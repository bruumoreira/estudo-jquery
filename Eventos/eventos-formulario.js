 // Evento para quando o elemento receber o foco (quando clicar pra preencher o campo, o css será adicionado no elemento)
            /*
            $('[name]').focus(function () {

                $(this).css('background', 'yellow');
            });

            // Evento para quando o elemento perder o foco
            $('[name]').blur(function () {

                alert ('Você digitou ' + $(this).val());
            });
            */

            // Evento para quando o elemento receber o foco, mesmo que seja um elemento filho
            /*
            $('.form-group').focusin(function () {

                console.log('Você selecionou um campo');
            });
            
            $('.form-group').focusout(function () {

                alert('Você deixou um elemento');
            });
             */

            // Evento para quando o campo mudar seu valor
            $('[name]').change(function () {

                console.log(`Valor do campo: ${$(this).val()}`);

            });

            // Evento para quando selecionarmos o valor de um campo do formulário
            $('[name]').select(function () {

                console.log('Você selecionou o valor deste campo');

            });

            // Evento que mostra o que foi preenchido no campo e evita a página de atualizar
            $('form').submit(function (event) {

                event.preventDefault();

                console.log($(this).serializeArray());
            });

            // Evento para quando clicar no logo, ao invés de redirecionar ao site, trocar a imagem.
            $('#link_logo').click(function (event) {

                event.preventDefault();

                $(this).find('img').attr('src', 'img/link_logo.png');

            });