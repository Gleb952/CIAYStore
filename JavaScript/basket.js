var cart = {};

function loadCart() {
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расширфровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart();
    } else {
        $('.mainCart').html('Корзина пуста!');
    }
}

function showCart() {

    //вывод корзины
    if (!isEmpty(cart)) {
        $('.mainCart').html('Корзина пуста!');
    } else {
        $.getJSON('hoodie.json', function (data) {
            var goods = data;
            var out = '';
            for (var id in cart) {
                out += `<div class="cartBasket">`;
                out += `<img class="imgBasket" src="img\\${goods[id].img_goods}">`;
                out += ` ${goods[id].name  }`;
                out += ` ${cart[id]  }`;
                out += `<button data-id="${id}" class="del-goods"><img src="img/trash.png"></button>`;
                out += `<button data-id="${id}" class="plus-goods">+</button>`;
                out += '</div>';
            }
            $('.mainCart').html(out);
            $('.del-goods').on('click', delGoods);
            $('.plus-goods').on('click', plusGoods);
        });
    }
}

function delGoods() {
    //удаляем товар из корзины
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}
function plusGoods() {
    //добавляем товар из корзины
    var id = $(this).attr('data-id');
    cart[id]++;
    saveCart();
    showCart();
}

function saveCart() {
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}

function isEmpty(object) { 
    //проверка корзины на пустоту
    for (var key in object)
        if (object.hasOwnProperty(key)) return true;
    return false;
}


$(document).ready(function () {
    loadCart();
});