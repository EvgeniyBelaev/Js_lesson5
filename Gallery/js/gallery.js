let mainImg = document.querySelector('#main')
let carousel = document.querySelector('#carousel')
let newBigImg = document.querySelector('#wrapper')
let leftBtn = document.querySelector('#left-btn')
let righttBtn = document.querySelector('#right-btn')


function gallery() {
    let nodeStr = ""
    for(let i=1; i<=8; i++) {
        nodeStr += `<img src="img/${i}.jpg" alt="galimg" id="small_img" class="small-img" width="180px" height="130px" onclick="somefunc(${i})">`
    }
    carousel.innerHTML = nodeStr   
}


function somefunc(num) {
    newBigImg.innerHTML = `<img src="img/${num}.jpg" alt="logo" id="main" data-num="${num}" class="big-img"  width="500px" height="400px" >`      
} 

function clickButtonLeft () {
    leftBtn.addEventListener('click', function() {
        let whatImg = document.getElementById('main').dataset.num
        if (whatImg > 1) {
            newBigImg.innerHTML = `<img src="img/${whatImg - 1}.jpg" alt="logo" id="main" data-num="${whatImg - 1}" class="big-img"  width="500px" height="400px" >`
        }
        else {
            newBigImg.innerHTML = `<img src="img/8.jpg" alt="logo" id="main" data-num="8" class="big-img"  width="500px" height="400px" >`
        }
    })
}

function clickButtonRight () {
    righttBtn.addEventListener('click', function() {
        let rImg = document.getElementById('main').dataset.num
        if (rImg < 8) {
            newBigImg.innerHTML = `<img src="img/${rImg + 1}.jpg" alt="logo" id="main" data-num="${rImg + 1}" class="big-img"  width="500px" height="400px" >`
        }  
        else {
            newBigImg.innerHTML = `<img src="img/1.jpg" alt="logo" id="main" data-num="1" class="big-img"  width="500px" height="400px" >`

        }     
    })
}


gallery()
clickButtonLeft()
clickButtonRight()


