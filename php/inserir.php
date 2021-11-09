<?php

    $nome = $_POST["nome"];
    $data = $_POST["data_nascimento"];
    $sexo = $_POST["sexo"];
    $idade = $_POST["idade"];
    $email = $_POST["email"];


    $con = mysqli_connect("localhost:3306", "root", "", "habitante");

    mysqli_query($con, "INSERT INTO habitante (nome, data_nascimento, sexo,idade, email) VALUES('$nome', '$data', '$sexo','$idade','$email')");
?>