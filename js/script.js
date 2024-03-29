let texts = ['text1', 'TEXT2', 'ТЕКСТ3'];
let imgs = ["img/1.jpg", "img/299.jpg", "img/3.jpg", "img/4.jpg"]
let imgSlider = document.getElementById('imgSlider')
let slider = document.getElementById('slider')
let i = 0;

// setInterval(() => {
//     slider.textContent = texts[i];
//     i++;

//     if (i == texts.length) {
//         i = 0
//     }
//     console.log(i);
// }, 500)



setInterval(() => {
    imgSlider.src = imgs[i]
    i++;
    if (i == imgs.length) {
        i = 0
    }
}, 500)