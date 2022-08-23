var cart = {};

function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        $(".cart").html("None");
        showCart();
    }
}

function showCart() {
    $.getJSON(("posters.json", "Stickers.json", "Keychains.json", "Belts.json", "Lanyard.json", "BankCardSticker.json"), function (data) {
        var goods = {};
        var out = "";
        for (var key in cart) {
            out += ``
        }

    });
}



$(document).ready(function () {
    loadCart();

});