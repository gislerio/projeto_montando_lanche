const vm = new Vue({
    el: '#app',
    data: {
        inputTipoPao: ''

    },
    computed: {
        pao() {
            switch (this.inputTipoPao) {
                case 'gergelim':
                    return ['./img/pao_gergelim_superior.png', './img/pao_gergelim_inferior.png']
                case 'australiano':
                    return ['./img/pao_australiano_superior.png', './img/pao_australiano_inferior.png']
                default:
                    return ['./img/padrao/pao_superior.png', './img/padrao/pao_inferior.png']
            }
            return ['./img/padrao/pao_superior.png', './img/padrao/pao_inferior.png']
        },
        alface() {
            return './img/padrao/alface.png'
        },
        ketchup() {
            return './img/padrao/molho.png'
        },
        Mostarda() {
            return './img/padrao/molho.png'
        },
        Maionese() {
            return './img/padrao/molho.png'
        },
        hamburguer() {
            return './img/padrao/hamburguer.png'
        },
    }

});