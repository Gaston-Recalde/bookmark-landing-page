const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const navbar = document.querySelector('.nav__ul');

const email = document.querySelector('.email');
const form = document.querySelector('.form');

const logo = document.querySelector('.normal');
const logo2 = document.querySelector('.secondary');
const social = document.querySelector('.nav__social');

const feature_p = document.querySelectorAll('.info__p');
const feature_data = document.querySelectorAll('.feature__article');

const question = document.querySelectorAll('.question');

btnOpen.addEventListener('click', () => {
    navbar.classList.add('nav__ul-active');
    btnOpen.style.display = 'none';
    btnClose.style.display = 'inline-block';
    logo.style.display = 'none';
    logo2.style.display = 'inline-block';
    social.style.display = 'flex';
});

btnClose.addEventListener('click', () => {
    navbar.classList.remove('nav__ul-active');
    btnOpen.style.display = 'inline-block';
    btnClose.style.display = 'none';
    logo.style.display = 'inline-block';
    logo2.style.display = 'none';
    social.style.display = 'none';
});

feature_p.forEach((item, index) => {
    item.addEventListener('click', () => {
        feature_p.forEach((item) => {
            item.classList.remove('info__p-active');
        });
        feature_data.forEach((item) => {
            item.classList.remove('feature__article-active');
        });
        feature_p[index].classList.add('info__p-active');
        feature_data[index].classList.add('feature__article-active');
    });
});

question.forEach(e => {
    e.addEventListener('click', () => {

        const img = e.querySelector('.question_data i');
        if(img.className === 'uil uil-angle-down'){
            img.className = 'uil uil-angle-down active';
        } else{
            img.className = 'uil uil-angle-down';
        }

        const p = e.querySelector('.answer');
        if(p.className === 'answer'){
            p.classList.add('answer-active');
        } else{
            p.classList.remove('answer-active');
        }

    });
});

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const emailValue = email.value.trim();
    const small = document.querySelector('.input__small');
    const img = document.querySelector('.icon');

    if(emailValue === '') {
		small.classList.add('email__error');
        email.classList.add('input-error');
        img.classList.add('error');
	} else if (!isEmail(emailValue)) {
		small.classList.add('email__error');
        email.classList.add('input-error');
        img.classList.add('error');
	} else {
        small.classList.remove('email__error');
        email.classList.remove('input-error');
        img.classList.remove('error');
	}
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}