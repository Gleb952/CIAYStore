<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basket</title>
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="css/style.css" />
</head>

<body>
    <div class="wrapper">
        <div class="topnav">
            <a class="active" href="#home"><img src="img/logo.png" alt="photo"></a>
        </div>

            <div>
                <a class="btn btn-outline-primary btnBack" id="exem" href="index.php">Back</a>
            </div>

        <div class="mainCart"></div>
        <div class="emailField">
        <p>Name: <input type="text" id="ename"></p>
        <p>Email: <input type="text" id="email"></p>
        <p>Phone: <input type="text" id="ephone"></p>
        <p><button class="send-email">Buy</button></p>

        </div>





        <footer>
            <hr>
            <p>shop.ciay.ru © since 2007 - 2022 CA shop</p>
        </footer>
    </div>
    <script src="JavaScript/jquery-3.6.0.min.js"></script>
    <script src="JavaScript/basket.js"></script>
</body>

</html>