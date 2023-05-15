let nav = document.getElementById('mobile-nav');
let menuOpen = document.getElementById('menu-open');
let header = document.querySelector('header');
let logo = document.getElementById('logo');
let navCounter = 0;


let simple_bookmarking_cont = document.getElementById('simple-bookmarking-cont');
let speedy_searching_cont = document.getElementById('speedy-searching-cont');
let easy_sharing_cont = document.getElementById('easy-sharing-cont');
let simple_bm = document.getElementById('simple-bookmarking');
let speedy_srch = document.getElementById('speedy-searching');
let easy_share = document.getElementById('easy-sharing');

let text = document.querySelectorAll('.text');
let question = document.querySelectorAll('.question');
let answer = document.querySelectorAll('.answer');

let email = document.getElementById('email');
let submit = document.getElementById('submit');
let error = document.getElementById('error');
submit.addEventListener('click', submitFun);

text.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('active');
    });
})

menuOpen.addEventListener('click', toggleMenu);

simple_bm.addEventListener('click', toggleFeatures);
speedy_srch.addEventListener('click', toggleFeatures);
easy_share.addEventListener('click', toggleFeatures);

function toggleMenu() {
    navCounter++;
    if(navCounter % 2 == 1) {
        nav.style.display = 'flex';
        header.style.background = 'rgba(37, 43, 70, 0.95)';
        menuOpen.src = './images/icon-close.svg'
        logo.src = './images/logo-bookmark-light.svg';
        document.body.style.position = 'fixed';
        
    } else {
        nav.style.display = 'none';
        header.style.backgroundColor = 'white';
        menuOpen.src = './images/icon-hamburger.svg';
        logo.src = './images/logo-bookmark.svg';
        document.body.style.position = 'static';
    }
}

function toggleFeatures(e) {
    if(e.target == simple_bm) {
        simple_bookmarking_cont.style.display = 'flex';
        speedy_searching_cont.style.display = 'none';
        easy_sharing_cont.style.display = 'none';

        simple_bm.style.borderBottom = '3px solid hsl(0, 94%, 66%)';
        speedy_srch.style.borderBottom = 'none';
        easy_share.style.borderBottom = 'none';

        simple_bm.style.paddingBottom = '1.5rem';
        speedy_srch.style.paddingBottom = '1.8rem';
        easy_share.style.paddingBottom = '1.8rem';
    } else if(e.target == speedy_srch) {
        simple_bookmarking_cont.style.display = 'none';
        speedy_searching_cont.style.display = 'flex';
        easy_sharing_cont.style.display = 'none';

        simple_bm.style.borderBottom = 'none';
        speedy_srch.style.borderBottom = '3px solid hsl(0, 94%, 66%)';
        easy_share.style.borderBottom = 'none';

        simple_bm.style.paddingBottom = '1.8rem';
        speedy_srch.style.paddingBottom = '1.5rem';
        easy_share.style.paddingBottom = '1.8rem';
    } else {
        simple_bookmarking_cont.style.display = 'none';
        speedy_searching_cont.style.display = 'none';
        easy_sharing_cont.style.display = 'flex';

        simple_bm.style.borderBottom = 'none';
        speedy_srch.style.borderBottom = 'none';
        easy_share.style.borderBottom = '3px solid hsl(0, 94%, 66%)';

        simple_bm.style.paddingBottom = '1.8rem';
        speedy_srch.style.paddingBottom = '1.8rem';
        easy_share.style.paddingBottom = '1.5rem';
    }
}


function submitFun(e) {
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) || !email.value) {
        email.parentElement.classList.add("error-message");
        email.classList.add("error-border");
        email.style.borderRadius = '5px 5px 0 0';
        error.style.display = 'block';
        e.preventDefault();
    }else {
        email.parentElement.classList.remove("error-message");
        email.classList.remove("error-border");
        email.style.borderRadius = '5px';
        error.style.display = 'none';
    }
}
