function calcular() {
    var num1 = $("#n1");
    var num2 = $("#n2");
    var textArea = $("#text-area");

    $("#mais").click(() => {
        var resultado = Number(num1.val()) + Number(num2.val());
        textArea.val(resultado);
    });

    $("#menos").click(() => {
        var resultado = Number(num1.val()) - Number(num2.val());
        textArea.val(resultado);
    });

    $("#multi").click(() => {
        var resultado = Number(num1.val()) * Number(num2.val());
        textArea.val(resultado);
    });

    $("#divis").click(() => {
        var resultado = Number(num1.val()) / Number(num2.val());
        textArea.val(resultado);
    });
}

function saudacao() {
    var nomeInput = $("#username");
    var saudacaoP = $("#saudacao");

    $("#salvar").click(() => {
        var nome = nomeInput.val();
        saudacaoP.text(`Olá, ${nome}`);
    });
}

$(document).ready(function() {
    calcular();
    saudacao();
});