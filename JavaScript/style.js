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
        $('.goods_outBankCardSticker').html(out);

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
        console.log(cart);
    }

}

$(document).ready(function () {
    posters();
    Sticker();
    BankCardSticker();

});