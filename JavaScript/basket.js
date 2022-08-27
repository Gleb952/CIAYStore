var cart = {};

function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart_posters();
        showCart_Stickers();
    } else {
        $(".cart").html("None");
    }
}




function showCart_posters() {
    $.getJSON("posters.json", function (data) {
        var goods = data;
        var out = '';
        for (var id in cart) {
            out += `<div class="cartBasket">`;
            out += `<img class="imgBasket" src="img\\${goods[id].img_goods}">`;
            out += ` ${goods[id].name  }`;
            out += ` ${cart[id]  }`;
            out += `<button data-id="${id}" class="del-goods"><img src="img/trash.png"></button>`;
            out += '</div>';
        }
        $('.cart').html(out);
        $('.del-goods').on('click', delGoods);
    })
};
function showCart_Stickers() {
    $.getJSON("Stickers.json", function (data) {
        var goods = data;
        var out = '';
        for (var id in cart) {
            out += `<div class="cartBasket">`;
            out += `<img class="imgBasket" src="img\\${goods[id].img_goods}">`;
            out += ` ${goods[id].name  }`;
            out += ` ${cart[id]  }`;
            out += `<button data-id="${id}" class="del-goods"><img src="img/trash.png"></button>`;
            out += '</div>';
        }
        $('.cart').html(out);
        $('.del-goods').on('click', delGoods);
    })
};



function delGoods() {
    //удаляем товар из корзины
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart_posters();
    showCart_Stickers();
}

function saveCart() {
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}


$(document).ready(function () {
    loadCart();
});