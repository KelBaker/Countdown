function countdown() {
    var dataFinal = new Date('2022-12-01T00:00:00')
    var dataAtual = new Date()
    var diferenca = dataFinal - dataAtual

    var negativo = diferenca < 0
    var abs = Math.abs(diferenca)

    var dias = Math.floor(abs / (1000 * 60 * 60 * 24))
    var horas = Math.floor((abs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutos = Math.floor((abs % (1000 * 60 * 60)) / (1000 * 60))
    var segundos = Math.floor((abs % (1000 * 60)) / 1000)

    var pad = function (n) { return String(n).padStart(2, '0') }

    document.querySelector('[data-dias]').innerText = pad(dias)
    document.querySelector('[data-horas]').innerText = pad(horas)
    document.querySelector('[data-minutos]').innerText = pad(minutos)
    document.querySelector('[data-segundos]').innerText = pad(segundos)

    document.querySelector('.countdown-label').innerText = negativo
        ? 'Já se passaram desde a maior CCXP de todos os tempos'
        : 'Contagem regressiva para a maior CCXP de todos os tempos'
}

setInterval(countdown, 1000)
countdown()
