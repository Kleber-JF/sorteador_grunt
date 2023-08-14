document.addEventListener('DOMContentLoaded', function(){    
    document.getElementById('form-sorteio').addEventListener('submit', function(evento){
        evento.preventDefault();

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);
        let numAleatorio = Math.floor((Math.random() * numeroMaximo) + 1 );
        
        document.getElementById('valor-resultado').innerText = numAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})