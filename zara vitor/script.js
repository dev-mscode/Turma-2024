$(document).ready(function(){
    var btnSave = $('#saveButton');
    
    btnSave.on("click", function(){
        var nome = $('#nomeInput').val();
        var email = $('#emailInput').val();

        if(nome === "" || email === ""){
            alert('Preencha os campos!');
        } else {
            $('#userInfo').removeClass('hide');
            $('#userName').text(nome);
            $('#userEmail').text(email);
            $(".add-to-cart").attr("disabled", false);
        }
    });

    $("#cartForm").on("submit", function(e){
        e.preventDefault();
    });
});

var result = 0;

function adicionarAoCarrinho(nome, preco){
    result += preco;

    $("#totalPrice").html(result.toFixed(2));
}
