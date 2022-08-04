const vm = new Vue({
    el: '#app',
    computed: {
        pao() {
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