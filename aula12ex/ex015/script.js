function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/h_bebe.jpeg')
            } else if (idade < 30) {
                //JOVEM
                img.setAttribute('src', 'imagens/h_jovem.jpeg')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'imagens/h_adulto.jpeg')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/h_idoso.jpeg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/m_bebe.jpeg')
            } else if (idade < 30) {
                //JOVEM
                img.setAttribute('src', 'imagens/m_jovem.jpeg')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'imagens/m_adulto.jpeg')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/m_idoso.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}