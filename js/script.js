$(document).ready(function(){

    fLocalEventosClick();

});

function fLocalEventosClick(){

    $("#bGravar").click(function(){

        fLocalComunicaServidor("inserir");
        return false;
    });

    $("#bListar").click(function(){

        fLocalComunicaServidor("listar");
        return false;
    });
}

function fLocalComunicaServidor(arquivo){

    var valores = $("form").serialize();    

    $.ajax({

        type:"POST",
        dataType: "json",
        data: valores,
        url: "php/" + arquivo + ".php",
        success:function(retorno){           
            var conteudo = "";
            conteudo += '<tr>'
            conteudo += '<th>Nome</th>'
            conteudo += '<th>Data de Nascimento</th>'
            conteudo += '<th>Sexo</th>'
            conteudo += '<th>Idade</th>'
            conteudo += '<th>Email</th>'
            conteudo += '</tr>'
            for(var i = 0; i < retorno.length; i++){
                
                conteudo += "<tr>";
                conteudo += "<td>" + retorno[i]["nome"] + "</td>";
                conteudo += "<td>" + retorno[i]["data_nascimento"] + "</td>";
                conteudo += "<td>" + retorno[i]["sexo"] + "</td>";
                conteudo += "<td>" + retorno[i]["idade"] + "</td>";
                conteudo += "<td>" + retorno[i]["email"] + "</td>";
                conteudo += "</tr>";
            }

            $("#tableListaHabitantes").html(conteudo);
    
        }
    })

}