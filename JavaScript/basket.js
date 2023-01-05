var cart = {};

function loadCart() {
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расширфровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart();
    } else {
        $('.mainCart').html('cart is empty');
    }
}

function showCart() {

    //вывод корзины
    if (!isEmpty(cart)) {
        $('.mainCart').html('cart is empty');
    } else {
        $.getJSON('hoodie.json', function (data) {
            var goods = data;
            var out = '';
            for (var id in cart) {
                out += `<div class="cartBasket">`;
                out += `<img class="imgBasket" src="img\\${goods[id].img_goods}">`;
                out += ` ${goods[id].name  }`;
                out += ` ${cart[id]  }`;
                out += `<button data-id="${id}" class="minus-goods">-</button>`;
                out += `<button data-id="${id}" class="del-goods"><img src="img/trash.png"></button>`;
                out += `<button data-id="${id}" class="plus-goods">+</button>`;
                out += cart[id]*goods[id].cost

                out += '</div>';
            }
            $('.mainCart').html(out);
            $('.del-goods').on('click', delGoods);
            $('.plus-goods').on('click', plusGoods);
            $('.minus-goods').on('click', minusGoods);
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

function minusGoods() {
    //удаляем один товар из корзины
    var id = $(this).attr('data-id');
    if (cart[id] == 1) {
        delete cart[id];
    } else {
        cart[id]--;
    }
    saveCart();
    showCart();
}
function sendEmail (){
    var ename = $('#ename').val();
    var email = $('#email').val();
    var ephone = $('#ephone').val();

    if(ename!='' && email!='' && ephone!=''){
        if(isEmpty(cart)){
            $.post(
                "core/mail/php",
            {
                "ename" : ename,
                "email" : email,
                "ephone" : ephone,
                "cart" : cart 
            },
            function(data){
                console.log(dat);
            }
            );
        }else{
            alert('cart is empty');
        }
    }else{
        alert('fill out');
    }
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

    $('.send-email').on('click', sendEmail); // send to email buy basket 
});