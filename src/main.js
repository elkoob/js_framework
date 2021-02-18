const loc = window.location
const app = document.getElementById("app")
 if(loc.hash == ""){
    loc.hash  = "#/"
 }
 if(document.readyState == "loading"){
    app.innerHTML = "<h1>loading...</h1>"
}

document.addEventListener("readystatechange", ()=>{
    if(document.readyState == "loading"){
        app.innerHTML = "<h1>loading...</h1>"
        console.log("lo")
    }
    if(document.readyState == "complete"){
        app.innerHTML = "complete"
        check_route()
    }
})

