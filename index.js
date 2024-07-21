function countdown() {
    var dataFinal = new Date('2024-10-01T00:00:00')
    var dataAtual = new Date()
    var diferenca = dataFinal - dataAtual

    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

    document.getElementById('Countdown').innerText = dias + 'd ' + horas + 'h ' + minutos + 'm ' + segundos + 's'
    document.getElementById('Countdown').style.color = 'rgb(199, 33, 11)'
}


setInterval(countdown, 1000)
countdown() 
