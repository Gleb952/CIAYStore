var cart = {}; //корзина backet
function posters() {
    // читаем файл goods.json
    $.getJSON('posters.json', postersOut);

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
        $('.goods_outPosters').html(out);

    }
}
function Sticker() {
    // читаем файл goods.json
    $.getJSON('Stickers.json', StickersOut);

    function StickersOut(data) {
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
        $('.goods_outStickers').html(out);

    }
}
function Keychains() {
    // читаем файл goods.json
    $.getJSON('Keychains.json', KeychainsOut);

    function KeychainsOut(data) {
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
        $('.goods_outKeychains').html(out);

    }
}
function Belts() {
    // читаем файл goods.json
    $.getJSON('Belts.json', BeltsOut);

    function BeltsOut(data) {
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
        $('.goods_outBelts').html(out);

    }
}
function Lanyard() {
    // читаем файл goods.json
    $.getJSON('Lanyard.json', LanyardOut);

    function LanyardOut(data) {
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
        $('.goods_outLanyard').html(out);

    }
}
function BankCardSticker() {
    // читаем файл BankCardSticker.json
    $.getJSON('BankCardSticker.json', BankCardStickerOut);

    function BankCardStickerOut(data) {
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
        $('.goods_outBankCardSticker').html(out);

        /* <---------------------------NO COPY---------------------------> */
        $('.addToBacket').on('click', addToBacket); // One universal event :)
        // should be the last !!!
        /* <---------------------------NO COPY---------------------------> */
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
    }

}
function showMiniCart() {
    //показываю мини корзину
    var out="";
    for (var key in cart) {
        out += key +' --- '+ cart[key]+'<br>';
    }
    $('.mini-cart').html(out);
}

$(document).ready(function () {
    posters();
    Sticker();
    Keychains();
    Belts ();
    Lanyard ();
 
    BankCardSticker();

});