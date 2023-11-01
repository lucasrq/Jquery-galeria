$(document).ready(function () {
    console.log($('header button'))

    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp()
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const NovoItem = $('<li style = "display:none"></li>')
        $(`<img src = "${enderecoDaNovaImagem}" />`).appendTo(NovoItem)
        $(`<div class = "overlay-imagem"> 
                <a href = "${enderecoDaNovaImagem} target = "_blank title= "Ver imagem tamanho real">
                    Ver imagem tamanho real
                </a>
            </div> `).appendTo(NovoItem)
        $(NovoItem).appendTo('ul')
        $(NovoItem).fadeIn(2000)
        $('#endereco-imagem-nova').val(' ')
    })
})



// // $(informamos o seletor).quando o documento estiver pronto(funcao(){
//     ativa o alert
// })