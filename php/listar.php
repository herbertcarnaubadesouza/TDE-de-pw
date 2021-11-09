<?php
    $con = mysqli_connect("localhost:3306", "root", "", "habitante");

    $resultado = mysqli_query($con, "SELECT * FROM habitante");

    $i = 0;

    while($linha = mysqli_fetch_assoc($resultado)){


        $retorno[$i]["nome"] = $linha["nome"];
        $retorno[$i]["data_nascimento"] = $linha["data_nascimento"];
        $retorno[$i]["sexo"] = $linha["sexo"];
        $retorno[$i]["idade"] = $linha["idade"];
        $retorno[$i]["email"] = $linha["email"];

        $i++;

    }

    echo json_encode($retorno);
    
?>