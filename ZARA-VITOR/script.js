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
var itens = {
    "Item 1": 0,
    "Item 2": 0,
    "Item 3": 0,
    "Item 4": 0,
    "Item 5": 0
};

var itenss = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

function adicionarAoCarrinho(nome, preco){
    result += preco;

    itens[nome] += 1;

    $("#totalPrice").html(result.toFixed(2));

    var li = $("#cartItems");
    li.empty();

    itenss.forEach(element => {
        li.append("<li>"+ element + "  (" + itens[element] + ") " +"</li>");
    });
}
