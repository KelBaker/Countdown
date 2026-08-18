function countdown() {
    var dataFinal = new Date('2026-12-01T00:00:00')
    var dataAtual = new Date()
    var diferenca = dataFinal - dataAtual

    if (diferenca < 0) diferenca = 0

    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

    var pad = function (n) { return String(n).padStart(2, '0') }

    document.querySelector('[data-dias]').innerText = pad(dias)
    document.querySelector('[data-horas]').innerText = pad(horas)
    document.querySelector('[data-minutos]').innerText = pad(minutos)
    document.querySelector('[data-segundos]').innerText = pad(segundos)
}

setInterval(countdown, 1000)
countdown()
