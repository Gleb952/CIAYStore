function init() {
    // читаем файл goods.json
    $.getJSON("good.json", goodsOut);
}

function goodsOut(data) {
    // вывод товара на страницу
    /* var goods = JSON.parse(data); */
    console.log(data);

}


$(document).ready(function () {
    init();

});