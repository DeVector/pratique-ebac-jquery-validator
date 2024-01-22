$(document).ready(function () {
    
    $('#form-adress').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            endCompleto: {
                required: true
            },
            cep: {
                required: true
            }
        }
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('.cep').mask('0000-000')

    console.log($('.cep'))

});