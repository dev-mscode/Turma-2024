$(document).ready(() => {

    var saveButton = $("#saveButton")

    saveButton.click((event) => {
        event.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var produtos = $(".add-to-cart");
        var form = $("#cartForm")
        var userInfor = $("#userInfo")


        if (name == "" || email == "") {
            alert("[ERRO] Email ou Nome invalido");
        } else {

            produtos.attr('disabled', false);
            produtos.css('curso', 'pointer');
            form.css('display', 'none');


            userInfor.show();
            var item = $("<p></p>");
            userInfor.append(item).html(`Seu nome: ${email} <br> seu gmail: ${name}`)

        }





    });


    


});

let total = 0;


function adicionarAoCarrinho(nome, preco) {

    var cart = $("#cartItems")
    let item = $("<li></li>").text(`${nome}: ${preco}`)
    
    cart.append(item);

    let totalPrice = $("#totalPrice")
    
    total = total + preco
    totalPrice.text(total)
    console.log(total)

}