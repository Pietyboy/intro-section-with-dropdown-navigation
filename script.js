var menu_opened = false;
var container_1_opened = false;
var container_2_opened = false;

function collapsed_menu(){

}

function open_menu(){
    if (menu_opened){
        document.querySelector('#menu').style.display = 'none';
        document.getElementById('menu_icon').src = 'images/icon-menu.svg';
        menu_opened = false;
    } else {
        document.querySelector('#menu').style.display = 'flex';
        document.getElementById('menu_icon').src = 'images/icon-close-menu.svg';
        document.getElementById('menu_icon').height = '20';
        menu_opened = true;
    }
}

function drop_1(){
    if (container_1_opened){
        document.querySelector('#first_container').style.display = 'none';
        document.getElementById('first_arrow').src = 'images/icon-arrow-down.svg';
        container_1_opened = false;
    } else {
        document.querySelector('#first_container').style.display = 'block';
        document.getElementById('first_arrow').src = 'images/icon-arrow-up.svg';
        container_1_opened = true;
    }
}

function drop_2(){
    if (container_2_opened){
        document.querySelector('#second_container').style.display = 'none';
        document.getElementById('second_arrow').src = 'images/icon-arrow-down.svg';
        container_2_opened = false;
    } else {
        document.querySelector('#second_container').style.display = 'block';
        document.getElementById('second_arrow').src = 'images/icon-arrow-up.svg';
        container_2_opened = true;
    }
}