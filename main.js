// let img = document.querySelector('img');

// img.setAttribute('src', 'image/2019.jpg')

// console.log(img.getAttribute('alt'));




let bigImg = document.querySelector('.bigImg img');
let smallImg = document.querySelectorAll('.smallImg img');

smallImg.forEach(img => {
    img.addEventListener('click', () => {
        bigImg.setAttribute('src', img.getAttribute('src'));

        bigImg.parentElement.children[1].innerHTML = img.parentElement.children[1].innerHTML;

    });
});