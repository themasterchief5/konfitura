<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "konfitura";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $imie = $_POST["imie"];
    $opinia = $_POST["opinia"];

    $stmt = $conn->prepare("INSERT INTO opinie (imie, opinia) VALUES (?, ?)");
    $stmt->bind_param("ss", $imie, $opinia);
    $stmt->execute();
    $stmt->close();

    header("Location: opinie.php");
    exit();
    //CREATE TABLE opinie ( id INT AUTO_INCREMENT PRIMARY KEY, imie VARCHAR(50) NOT NULL, opinia TEXT NOT NULL );
}
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Opinie</title>
    <link rel="stylesheet" href="opinie.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" type="img/png" href="imgs/jungkonfi.png">
</head>
<body>
    <header>
        <a href="index.html"><img src="imgs/jungkonfiIIIIIIII.PNG.webp" alt="Log" height="45px"></a>
        <div class="menu-sect">
            <h1>MENU</h1><img src="imgs/jungkonfi.png" alt="MENU" class="menu">
        </div>
        <section id="side-menu">
            <a href="oNas.html#kucharze" class="menu-option">O nas</a>
            <a href="oNas.html#historia" class="menu-option">Historia</a>
            <a href="oferty.html" class="menu-option">Oferty</a> 
            <a href="oferty.html#order" class="menu-option">Złóż zamówienie</a> 
            <a href="#f_kontakt" class="menu-option">Kontakt</a> 
            <a href="opinie.php" class="menu-option">Opinie</a>
        </section>          
    </header>

    <main id="heroop">
        <section id="opinions">
            <section class="add-opinion">
                <section class="title">
                    <h2>Dodaj opinię</h2>
                </section>
                <form method="post">
                    <input type="text" name="imie" placeholder="Twoje imię" required>
                    <textarea name="opinia" placeholder="Twoja opinia" required></textarea>
                    <section class="title"><button type="submit">Wyślij</button></section>
                </form>
            </section>

            <?php
            $result = $conn->query("SELECT imie, opinia FROM opinie ORDER BY id DESC");
            while ($row = $result->fetch_assoc()) {
                echo '<section class="add-opinion">';
                echo '<p class="op-name">' . htmlspecialchars($row["imie"]) . '</p>';
                echo '<section class="op-text">' . htmlspecialchars($row["opinia"]) . '</section>';
                echo '</section>';
            }
            ?>

        </section>
    </main>

    <footer>
        <section id="foot_main">
            <img src="imgs/jungkonfi.png" alt="LOGO" height="95px">
            <h1 class="konfitura">KONFITURA</h1>
        </section>

        <section id="o_nas">
            <section id="f_media">
                Nasze media: <br>
                <a href="https://www.instagram.com/konfitura.rzeszow" target="_blank"><i class="fa-brands fa-instagram" style="transform: scale(2);"></i></a>
                <a href="https://www.facebook.com/RestauracjaKonfituraRzeszow" target="_blank"><i class="fa-brands fa-facebook" style="transform: scale(2);"></i></a>
            </section>

            <section id="f_kontakt">
                Kontakt: <br>
                Email: <a href="mailto:konfitura@gmail.com">konfitura@gmail.com</a><br>
                Telefon: <a href="tel:+48694 495 948">694 495 948</a>
            </section>

            <section id="f_adres">
                Adres: <br>
                <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x473cfb0221ec4f05:0x2ebbbc1065dcb7a4?sa=X&ved=1t:8290&ictx=111" target="_blank">
                    Konfitura <br>
                    ul. Łaska 61 <br>
                    98-220 Zduńska Wola
                </a>
            </section>

            <section id="f_godziny">
                Godziny otwarcia : <br>
                Poniedziałek - Piątek: 10<sup>00</sup> - 18<sup>00</sup> <br>
                Sobota: 10<sup>00</sup> - 15<sup>30</sup>
            </section>
        </section>
    </footer>

    <script src="menu.js"></script>

</body>
</html>

<?php
$conn->close();
?>
