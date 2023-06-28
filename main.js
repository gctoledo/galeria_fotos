$(document).ready(function() {
    $('#adicionar-imagem-button').on('click', function() {
        $('form').slideDown();
    })

    $('#cancelar-buttom').click(function() {
        $('form').slideUp();
    })

    $('form').submit(function(e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $(`
        <li style="display: none">
        <img src="${enderecoNovaImagem}" alt="Foto" />
        <div class="url-tab">
            <a href="${enderecoNovaImagem}" target="_blank">Ver a foto em tamanho real</a>
        </div>
        </li>
        `);
        if(!$('#endereco-imagem-nova').val()) {
            alert("Insira um link de uma imagem!")
        } else {
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn();
            $('#endereco-imagem-nova').val('');
        }

    })
})