let mainImg = document.querySelector('#main')
let carousel = document.querySelector('#carousel')
let newBigImg = document.querySelector('#wrapper')

function gallery() {
    let nodeStr = ""
    for(let i=1; i<=8; i++) {
        nodeStr += `<img src="img/${i}.jpg" alt="galimg" id="small_img" class="small-img" onclick="somefunc(${i})">`
    }
    carousel.innerHTML = nodeStr
    
}

function somefunc(num) {
    newBigImg.innerHTML = `<img src="img/${num}.jpg" alt="galimg" id="small_img" class="big-img"  width="500px" height="400px" >`
      
} 

gallery()

