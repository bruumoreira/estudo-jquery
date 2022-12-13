$('p').click(function(event){

// retorna o tipo de evento executado
// console.log('Você realizou um evento de ' + event.type) ;

// Retorna o nome do elemento que clicamos
// alert(`Você clicou em uma tag <${event.target.localName}>`);

// console.log('TARGET' event.target);
// console.log('CURRENT TARGET' event.currentTarget);

});

// Retorna a posição X e Y do elemento onde occoreu o evento
$('[name=bio]').keydown(function(e){

// Retorna o código da tecla pressionada
// console.log(e.keyCode);
//console.log(e.which);

// Retorna o nome da tecla pressionada
//console.log(e.key);
/*
if (e.key === 'Enter'){
alert('Você pressionou o Enter');
}
*/ 

// Para a execução padrão do evento
e.preventDefault()

// Para a propagação de eventos
e.stopPropagation()
});