var cart = {}; //корзина backet
function init() {
    // читаем файл goods.json
    $.getJSON('good.json', goodsOut);

    function goodsOut(data) {
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
        $('.goods_out').html(out);
        $('.addToBacket').on('click', addToBacket);
    }
    function addToBacket (){
        var id = $(this).attr('data-id');
        console.log(id);


        if (cart[id]==undefined){
            cart[id] = 1;
        }
        else {
            cart[id]++;
        }
        console.log(cart);
    }

}
$(document).ready(function () {
    init();
});