function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main() {
    let data = fazGet("https://api.thecatapi.com/v1/images/search");
    let informacao = JSON.parse(data);
    let site = informacao[0].url
    let img = document.getElementById("rederiza")
    img.innerHTML = `<img src="${site}">`
    console.log(site) 
}