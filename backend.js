function show_menu(){
    const menuBtn = document.getElementById("menuBtn");
    menuBtn.classList.toggle('active');

    const name = document.getElementById("name");
    name.classList.toggle('active');

    const links = document.getElementById("links");
    links.classList.toggle('active');

    const container = document.getElementById("container");
    container.classList.toggle('active');

    const footer = document.getElementById("footer");
    footer.classList.toggle('active');

    const body = document.getElementById("body");
    body.classList.toggle('active');
}