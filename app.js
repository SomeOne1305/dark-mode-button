let card = document.querySelector('.card');
let body = document.querySelector('body');
let checkbox = document.querySelector('#check');
let creator = document.querySelector('.title h3')
let loadAnim = document.querySelector('.infoOnload');
let info = document.querySelector('.info');
checkbox.addEventListener('click', ()=>{
    if (checkbox.checked === true) {
        body.style.backgroundColor = "#222";
        creator.style.color = 'rgb(239, 231, 231)';
        info.style.color = "#fff"
    } else {
        body.style.backgroundColor = "rgb(239, 231, 231)";
        creator.style.color = '#222';
        info.style.color = "#000";
    }
})

window.addEventListener('load', ()=>{
    loadAnim.parentElement.removeChild(loadAnim);
    info.style.display = 'block'
})