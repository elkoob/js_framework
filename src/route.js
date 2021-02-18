function check_route(){
    // 
    page("#/", {html: "hello world <a href='#/about'>about</a>", script: "amir"})
    page("#/about", {html: "this is about page", head: "amir"})
    // 
}