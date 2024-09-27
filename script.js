// script.js

function calcular() {
    const name = document.getElementById("player").value.trim();
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.classList.add("d-none");

    if (name === "") {
        mostrarMensagem("Por favor, insira o seu nome.", "danger");
        return;
    }
    
    let level = 0;

    // Verifica escolha de personagem
    const isMagicCharacter = document.getElementById("magic").checked;
    const isWarriorCharacter = document.getElementById("guerreiro").checked;

    if (isMagicCharacter) {
        level += 2000;
    } else if (isWarriorCharacter) {
        level += 1800;
    } else {
        mostrarMensagem("Você precisa escolher um personagem.", "danger");
        return;
    }

    // Função para adicionar XP de itens
    function addItens() {
        const itens = [
            { id: 'escudo', xp: 700 },
            { id: 'porcao', xp: 1100 },
            { id: 'p_forca', xp: 1200 },
            { id: 'p_sabedoria', xp: 1300 },
            { id: 's_beringela', xp: 200 },
            { id: 'espada', xp: 950 },
            { id: 'bebida', xp: 550 }
        ];

        itens.forEach(item => {
            if (document.getElementById(item.id).checked) {
                level += item.xp;
            }
        });
    }

    // Adiciona itens ao nível do jogador
    addItens();

    // Função para adicionar XP de atributos
    function addAtributos() {
        const atributos = [
            { id: 'intel', xp: 1600 },
            { id: 'forca', xp: 1400 },
            { id: 'leal', xp: 1200 },
            { id: 'charme', xp: 800 }
        ];

        atributos.forEach(atributo => {
            if (document.getElementById(atributo.id).checked) {
                level += atributo.xp;
            }
        });
    }

    // Adiciona atributos ao nível do jogador
    addAtributos();

    // Classificação do nível do jogador
    let mensagem = "";
    if (level <= 1000) {
        mensagem = `O herói de nome ${name} está no nível de Ferro.`;
    } else if (level <= 2000) {
        mensagem = `O herói de nome ${name} está no nível de Bronze.`;
    } else if (level <= 5000) {
        mensagem = `O herói de nome ${name} está no nível de Prata.`;
    } else if (level <= 7000) {
        mensagem = `O herói de nome ${name} está no nível de Ouro.`;
    } else if (level <= 8000) {
        mensagem = `O herói de nome ${name} está no nível de Platina.`;
    } else if (level <= 9000) {
        mensagem = `O herói de nome ${name} está no nível de Ascendente.`;
    } else if (level <= 10000) {
        mensagem = `O herói de nome ${name} está no nível de Imortal.`;
    } else {
        mensagem = `O herói de nome ${name} está no nível de Radiante.`;
    }

    mostrarMensagem(mensagem, "success");
}

function mostrarMensagem(texto, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = texto;
    mensagemDiv.className = `alert alert-${tipo}`;
    mensagemDiv.classList.remove("d-none");

    setTimeout(() => {
        mensagemDiv.classList.add("d-none");
    }, 5000); // 5000 ms = 5 segundos
}

