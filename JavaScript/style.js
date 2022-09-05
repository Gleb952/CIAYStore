var cart = {};

function init() {
    //read  goods.json
    $.getJSON("hoodie.json", goodsOut);
}

function goodsOut(data) {
    console.log(data);
    var out = '';
    for (var key in data) {
        out += '<div class="card col">';
        out += '<img clas="card_img_top img_goods" src="img/' + data[key].img_goods + '" alt="photo">';
        out += '<div class="card-body">';
        out += '<h5 class="card-title text-center name">' + data[key].name + '</h5>';
        out += '<p class="card-text text-secondary text-center cost">' + data[key].cost + '</p>';
        out += '</div>';
        out += `<button type="button" class="btn btn-outline-secondary addToBacket" data-id="${key}">By</button>`;
        out += '</div>';
    }
    $('.goods_Out').html(out);
    $('.addToBacket').on('click', addToBacket);
}

function addToBacket() {
    var id = $(this).attr('data-id');
    if (cart[id] == undefined) {
        cart[id] = 1; 
    } else {
        cart[id]++; 
    }
    saveCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

$(document).ready(function () {
    init();
    loadCart();
});