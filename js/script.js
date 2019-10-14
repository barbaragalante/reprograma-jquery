$(function () {
    $("#eventType").change(function () {
        let selected = $("#eventType :selected").val();
        if (selected == "Teatro") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").show();
            $("#concepcao").hide();
            $("#direcao").show();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#artista").hide();
            $("#elenco").show();
            $("#artistas-convidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valor-entrada").show();
            $("#entrada-franca").show();

        } else if (selected == "Cinema") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").show();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#artista").hide();
            $("#elenco").show();
            $("#artistas-convidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valor-entrada").show();
            $("#entrada-franca").show();

        } else if (selected == "Debate Literário") {
            $("#titulo").show();
            $("#sinopse").hide();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").hide();
            $("#livro").show();
            $("#autor").show();
            $("#moderador").show();
            $("#curadoria").hide();
            $("#artista").hide();
            $("#elenco").hide();
            $("#artistas-convidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valor-entrada").hide();
            $("#entrada-franca").show();
        } else if (selected == "Dança") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").show();
            $("#direcao").show();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#artista").hide();
            $("#elenco").show();
            $("#artistas-convidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valor-entrada").show();
            $("#entrada-franca").show();

        } else if (selected == "Artes visuais e exposições") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").hide();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").show();
            $("#artista").hide();
            $("#elenco").hide();
            $("#artistas-convidados").show();
            $("#duracao").hide();
            $("#classificacao").show();
            $("#valor-entrada").hide();
            $("#entrada-franca").show();
        } else if (selected == "Música") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").hide();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#artista").show();
            $("#elenco").hide();
            $("#artistas-convidados").hide();
            $("#duracao").hide();
            $("#classificacao").show();
            $("#valor-entrada").show();
            $("#entrada-franca").show();

        } else {
            $("#titulo").hide();
            $("#sinopse").hide();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").hide();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#artista").hide();
            $("#elenco").hide();
            $("#artistas-convidados").hide();
            $("#duracao").hide();
            $("#classificacao").hide();
            $("#valor-entrada").hide();
            $("#entrada-franca").hide();
        }

    });

    $("#free").click(function () {
        $("#valor-entrada").toggle();
    });

});


$("#free").css("custom-checkbox", "none");