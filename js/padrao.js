const vm = new Vue({
    el: '#app',
    data: {
        inputTipoPao: '',
        inputSaladas: [],
        inputMolhos: [],
        inputHamburguer: '',
        etapa: 1,
        inputNome: '',
        inputEndereco: '',
        novoPedidoAssincrono: null
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
        },
        alface() {
            if (this.inputSaladas.includes('alface')) {
                return './img/alface.png'
            }
            return './img/padrao/alface.png'
        },
        ketchup() {
            if (this.inputMolhos.includes('ketchup')) {
                return './img/ketchup.png'
            }
            return './img/padrao/molho.png'
        },
        Mostarda() {
            if (this.inputMolhos.includes('mostarda')) {
                return './img/mostarda.png'
            }
            return './img/padrao/molho.png'
        },
        Maionese() {
            if (this.inputMolhos.includes('maionese')) {
                return './img/maionese.png'
            }
            return './img/padrao/molho.png'
        },
        hamburguer() {
            switch (this.inputHamburguer) {
                case 'bovino':
                    return './img/bovino.png'
                case 'frango':
                    return './img/frango.png'
                case 'soja':
                    return './img/soja.png'
                default:
                    return './img/padrao/hamburguer.png'
            }
        },
    },
    methods: {
        fazerPedido() {
            if (this.inputTipoPao && this.inputHamburguer) {
                this.etapa = 2
            } else {
                alert('Você precisa selecionar um pão e um hamburguer')
            }
        },
        confirmarPedido() {
            if (this.inputNome && this.inputEndereco) {
                this.etapa = 3;
                this.novoPedidoAssincrono = setTimeout(() => this.novoPedido(), 7000);
            } else {
                alert('Informe o nome e endereço');
            }
        },
        novoPedido() {
            this.etapa = 1

            this.inputTipoPao = ''
            this.inputSaladas = []
            this.inputMolhos = []
            this.inputHamburguer = ''
            this.inputNome = ''
            this.inputEndereco = ''
        }
    },
    watch: {
        etapa(novoValor) {
            if (novoValor == 1) {
                clearTimeout(this.novoPedidoAssincrono);                
            }
        }

    },

});