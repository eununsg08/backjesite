const toggleBtn = document.querySelector('navs_toogleButton');
const menu = document.querySelector('navs_menu');
const sns = document.querySelector('navs_sns');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});