// Tab Feature
function forTabFeature(n , m , b, r, f, g) {
    let getIndex = document.querySelectorAll('.one-slide');
    let getBottom = document.querySelectorAll('.section-3 li');
    getIndex[0].style.display = n;
    getIndex[1].style.display = m;
    getIndex[2].style.display = b;
    getBottom[r].style.borderBottom = '2px solid hsl(0, 94%, 66%)';
    getBottom[f].style.borderBottom = '1px solid hsl(229, 8%, 60%)';
    getBottom[g].style.borderBottom = '1px solid hsl(229, 8%, 60%)';
}

function tabFeature(n) {
    if (n === 1) {
        forTabFeature('flex', 'none', 'none', 0 , 1, 2);
    } 
    if (n === 2) {
        forTabFeature('none', 'flex', 'none', 1 , 0 , 2);
    }
    if (n === 3){
        forTabFeature('none', 'none', 'flex', 2, 0, 1);
    }
}

tabFeature(1);


// Question
let getIndex = document.querySelectorAll('.question .quest');

function questEff(e) {
    if (e == 1) {
        getIndex[0].classList.toggle('hilang');
    }
    if (e == 2) {
        getIndex[1].classList.toggle('hilang');
    }
    if (e == 3) {
        getIndex[2].classList.toggle('hilang');
    }
    if (e == 4) {
        getIndex[3].classList.toggle('hilang');
    }
}
function checkEmail() {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let email = document.querySelectorAll('input')[0];
    if (regex.test(email.value)) {
        alert(email.value);
        document.querySelectorAll('form')[0].classList.remove('gones');
    } else {
        document.querySelectorAll('form')[0].classList.toggle('gones');
        setTimeout(() => {
        document.querySelectorAll('form')[0].classList.remove('gones');
            
        }, 10000)
    }
};

function openTop() {
    document.getElementsByClassName('nav-mobile')[0].classList.toggle('mobile-flex');
}
function closeTop() {
    document.getElementsByClassName('nav-mobile')[0].classList.toggle('mobile-flex');
}

