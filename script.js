function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

// pegar a tag img
const img = document.querySelector ("#profile img")

//subistituir img
if(html.classList.contains('light')) {
    img.setAttribute('src', '/assets/avatar-light.png')
} else {
     
    
 // se tiver sem lightmode manter a imagem normal
 
 img.setAttribute("src", "/assets/avatar.png")

    }
}
