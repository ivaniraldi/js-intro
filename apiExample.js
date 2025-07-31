const apiURL= "https://jsonplaceholder.typicode.com/posts"

let getPosts= async()=>{
    let response = await fetch(apiURL)
    let respuestaFormateada = await response.json()
    console.log(respuestaFormateada)
    return respuestaFormateada
}

let renderLista= async() =>{
    let posts = await getPosts()
    let body = document.querySelector("body")

    let template = ""
    for(post of posts){
        template += `<h2>${post.title}</h2>`
    }

    body.innerHTML = template
}
renderLista()