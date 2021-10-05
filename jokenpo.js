let jogador1 = {
    escolha : "",
    //selecionando pedra, papel ou tesoura
    //Buscando valores na página HTML select->options
    selecao : function(){
        let select = document.getElementById('jokenpo');
        this.escolha = select.options[select.selectedIndex].value;
    }
};

let jogador2 = {
    escolha : "",
    //Escolha da máquina (Está sorteando)
    selecao: function(){
        let pedra = 1;
        let papel = 2;
        let tesoura = 3;
        this.escolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;
        if(this.escolha == 1){
            this.escolha = "pedra";
        }else if(this.escolha == 2){
            this.escolha = "papel";
        }else if(this.escolha == 3){
            this.escolha = "tesoura";
        }
        //alert(this.escolha);
    }
};

let jokenpo = {
    ganhador : -1,
    totalJogador1 : 0,
    totalJogador2 : 0,
    tabela : [],

    //Função adicionada no botão jogar na pág HTML
    jogar : function(){
        jogador1.selecao();
        jogador2.selecao();
        this.calcular();

        //Atualizar valores na tabela no front
        let atualizaTabela = {
            player1 : jogador1.escolha,
            player2 : jogador2.escolha,
            id : this.tabela.length + 1,
            ganhador: this.ganhador,
        }
        this.tabela.push(atualizaTabela);
        this.atualizaTela();
    },

    atualizaTela: function(){
        let table = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        table.innerHTML = '';
        for(let i = 0; i < this.tabela.length; i++){
            let linha = `<tr>
                            <td>${this.tabela[i].id}</td>
                            <td>${this.tabela[i].player1}</td>
                            <td>${this.tabela[i].player2}</td>
                            <td>${this.tabela[i].ganhador}</td>
                        </tr>`;
            table.innerHTML += linha;
        }
    },

    //Calcula o vencedor e atribui 1 ponto ao vencedor
    calcular : function(){
        //1-pedra
        //2-papel
        //3-tesoura
        if((jogador1.escolha == "pedra") && (jogador2.escolha == "pedra")){
            this.ganhador = "Empate";
        }else if((jogador1.escolha == "pedra") && (jogador2.escolha == "papel")){
            this.ganhador = "Computador";
            document.getElementById('jogador-2-pontos').innerText = this.totalJogador2 += 1;
        }else if((jogador1.escolha == "pedra") && (jogador2.escolha == "tesoura")){
            this.ganhador = "Jogador 1";
            document.getElementById('jogador-1-pontos').innerText = this.totalJogador1 += 1;
        }
        else if((jogador1.escolha == "papel") && (jogador2.escolha == "pedra")){
            this.ganhador = "Jogador 1";
            document.getElementById('jogador-1-pontos').innerText = this.totalJogador1 += 1;
        }else if((jogador1.escolha == "papel") && (jogador2.escolha == "papel")){
            this.ganhador = "Empate";
        }else if((jogador1.escolha == "papel") && (jogador2.escolha == "tesoura")){
            this.ganhador = "Computador";
            document.getElementById('jogador-2-pontos').innerText = this.totalJogador2 += 1;
        }
        else if((jogador1.escolha == "tesoura") && (jogador2.escolha == "pedra")){
            this.ganhador = "Computador";
            document.getElementById('jogador-2-pontos').innerText = this.totalJogador2 += 1;
        }else if((jogador1.escolha == "tesoura") && (jogador2.escolha == "papel")){
            this.ganhador = "Jogador 1";
            document.getElementById('jogador-1-pontos').innerText = this.totalJogador1 += 1;
        }else if((jogador1.escolha == "tesoura") && (jogador2.escolha == "tesoura")){
            this.ganhador = "Empate";
        }
    }
}

