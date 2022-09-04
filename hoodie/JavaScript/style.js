var cart = {}; //корзина backet
function goodsOut($class, $file) {
    // читаем файл goods.json
    $.getJSON($file, postersOut);

    function postersOut(data) {
        // вывод на страницу
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
        $($class).html(out);
         $('.addToBacket').on('click', addToBacket); 

    }
}

function addToBacket() {
    var id = $(this).attr('data-id');
    console.log(id);


    if (cart[id] == undefined) {
        cart[id] = 1;
    } else {
        cart[id]++;
    }
    showMiniCart();
    saveCart();
}


function showMiniCart() {
    //показываю мини корзину
    var out = "";
    for (var key in cart) {
        out += key + ' --- ' + cart[key] + '<br>';
    }
    $('.mini-cart').html(out);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
}

function start (){
    goodsOut('.goods_outPosters', 'posters.json');
    goodsOut('.goods_outStickers', 'Stickers.json');
    goodsOut('.goods_outKeychains', 'Keychains.json');
    goodsOut('.goods_outLanyard', 'Lanyard.json');
    goodsOut('.goods_outBelts', 'Belts.json');
    goodsOut('.goods_outBankCardSticker', 'BankCardSticker.json');

    loadCart();

}


$(document).ready(function () {

    
    start ();



});