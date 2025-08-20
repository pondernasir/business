function show_mobile_nav(){
    const body = document.getElementById('body');
    body.classList.toggle('active');

    const background = document.getElementById('background');
    background.classList.toggle('active');

    const links = document.getElementById('links');
    links.classList.toggle('active');

    const menu_button = document.getElementById('menu_button');
    menu_button.classList.toggle('active');
}