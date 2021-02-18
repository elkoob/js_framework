

function page(hash, work){
if(hash == loc.hash){
    work.html = work.html || ""
    work.page = work.page || "nth"
    work.script = work.script || ""
    work.head = work.head || ""
    app.innerHTML = work.html
    if(work.page != "nth"){
        
    }
    document.getElementById("script").innerHTML = work.script
    // document.getElementById("pageHead").innerHTML = work.head
}else{
    return "notMatch"
}
}

function loadPage(pageName){
    var xhr = new XMLHttpRequest()
        xhr.onload = function () {

			// callback(ONLINE);
            app.innerHTML = xhr.response

		};

        xhr.onerror = function () {
			app.innerHTML = xhr.response
            loadPage(pageName)
		};

		xhr.ontimeout = function () {
			app.innerHTML = xhr.response
            loadPage(pageName)
		};

		xhr.open('GET', "assets/pages/" + pageName || "errors/500" + ".elkb.html");

		// for (var key in headers) {
		// 	xhr.setRequestHeader(key, headers[key]);
		// }

		xhr.send();
}