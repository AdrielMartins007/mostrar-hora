function atualizar() {

    var novaHora = new Date()

    var hora = novaHora.getHours()
    var minutos = novaHora.getMinutes()
    var segundos = novaHora.getSeconds()

    var mostrarHora = document.getElementById('mostrar')
    var imagem = document.querySelector('body')
    var mensagem = document.getElementById('mensagem')

    if (hora >= 0 && hora <= 12) {
        imagem.style.backgroundImage = "url('img/fotoManha.jpg')"
        imagem.style.backgroundSize = 'cover'
        imagem.style.backgroundAttachment = 'fixed'
        imagem.style.backgroundPosition = 'center center'
        imagem.style.backgroundRepeat = 'no-repeat'
        mensagem.innerHTML = 'Bom Dia'
        mostrarHora.innerHTML = 'Hora atual: ' + hora + ':' + minutos + ':' + segundos

    } else if (hora >= 12 && hora < 18) {
        imagem.style.backgroundImage = "url('img/fotoTarde.jpg')"
        imagem.style.backgroundSize = 'cover'
        imagem.style.backgroundAttachment = 'fixed'
        imagem.style.backgroundPosition = 'center center'
        imagem.style.backgroundRepeat = 'no-repeat'
        mensagem.innerHTML = 'Boa Tarde'
        mostrarHora.style.color = 'white'
        mostrarHora.innerHTML = 'Hora atual: ' + hora + ':' + minutos + ':' + segundos

    } else {
        imagem.style.backgroundImage = "url('img/fotoNoite.jpg')"
        imagem.style.backgroundSize = 'cover'
        imagem.style.backgroundAttachment = 'fixed'
        imagem.style.backgroundPosition = 'center center'
        imagem.style.backgroundRepeat = 'no-repeat'
        mensagem.innerHTML = 'Boa Noite'
        mensagem.style.color = 'white'
        mostrarHora.innerHTML = 'Hora atual: ' + hora + ':' + minutos + ':' + segundos
        mostrarHora.style.color = 'white'
    }

    setInterval(atualizar, 1000)/* comando para atualizar o relogio a cada 1 segundo(1000 milesegundos) */
}
