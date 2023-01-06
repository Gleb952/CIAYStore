<?php
$json = file_get_contents('../hoodie.json');
$json = json_decode($json, true);

$message = '';
$message .= '<h1>Заказ в магазине</h1>';
$message .='<p>Почта: '.$_POST['email'].'</p>';
$message .='<p>Телефон: '.$_POST['ephone'].'</p>';
$message .='<p>Клиент: '.$_POST['ename'].'</p>';

$cart = $_POST['cart'];

foreach ($cart as $id=>$count) {
    $message .=$json[$id]['name'];

}

print_r($message);


?>