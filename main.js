$(document).ready(function() {
    const $n1 = $("#n1");
    const $n2 = $("#n2");
    const $resultado = $("#resultado");

    $("#soma").on("click", function() {
        if ($n1.val() === "" || $n2.val() === "") {
            alert("Por favor, insira valores nos dois campos.");
            return;
        }
        const calculo = parseFloat($n1.val()) + parseFloat($n2.val());
        $resultado.text(calculo);
    });

    $("#subtracao").on("click", function() {
        if ($n1.val() === "" || $n2.val() === "") {
            alert("Por favor, insira valores nos dois campos.");
            return;
        }
        const calculo = parseFloat($n1.val()) - parseFloat($n2.val());
        $resultado.text(calculo);
    });

    $("#divisao").on("click", function() {
        if ($n1.val() === "" || $n2.val() === "") {
            alert("Por favor, insira valores nos dois campos.");
            return;
        }
        const calculo = parseFloat($n1.val()) / parseFloat($n2.val());
        $resultado.text(calculo);
    });

    $("#multiplicacao").on("click", function() {
        if ($n1.val() === "" || $n2.val() === "") {
            alert("Por favor, insira valores nos dois campos.");
            return;
        }
        const calculo = parseFloat($n1.val()) * parseFloat($n2.val());
        $resultado.text(calculo);
    });

    const $nomeInput = $("#nome");
    const $saudacao = $("#saudacao");
    const $confirmarNomeBtn = $("#confirmarNome");
    const $nomeSection = $("#nomeSection");

    $confirmarNomeBtn.on("click", function() {
        if ($nomeInput.val() === "") {
            alert("Por favor, insira seu nome.");
            return;
        }
        const nome = $nomeInput.val();
        $saudacao.text(`Olá mundo, ${nome}`);
        $nomeSection.hide();
    });
});
