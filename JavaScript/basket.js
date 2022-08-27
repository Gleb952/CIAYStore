var cart = {};

function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart();
    } else {
        $(".cart").html("None");
    }
}




function showCart() {
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
    })
};




$(document).ready(function () {
    loadCart();
    showCart();

});