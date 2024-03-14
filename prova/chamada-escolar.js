let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/23",
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        matriculadoEm: "2024/04/23",
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        matriculadoEm: "2024/02/25",
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/29",
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        matriculadoEm: "2024/12/23",
        numeroChamada: 1225
    },
]
//ira listar os alunos
function listarAlunos(chamadaDeAlunos = []){
    console.log("> listarAlunos");
    chamadaDeAlunos.forEach(aluno => {
        console.log(`>> Aluno: ${aluno.nome} RA: ${aluno.numeroChamada}`);
    })
}

function alunoPeloNumeroDaChamada(numeroChamada, chamadaDeAlunos = []) {
    console.log("NumeroDaChamada");
    const aluno = chamadaDeAlunos.find(aluno => aluno.numeroChamada == numeroChamada)
    console.log("aluno encontrado: ", aluno);
    return aluno
} 

function aprovados(chamadaDeAlunos = []){
    console.log(" aprovados");
    chamadaDeAlunos.forEach(aluno => {
        if(alunoEstaAprovado(aluno)) {
            console.log(`>> Aluno: ${aluno.nome} esta aprovado`);
        }
        
    })
}

function reprovadoeprovados(chamadaDeAlunos = []){
    console.log("Reprovados");
    chamadaDeAlunos.forEach(aluno => {
        if(!alunoEstaAprovado(aluno)) {
            console.log(` Aluno: ${aluno.nome} esta reprovado`);
        }
    })
}


 function listarAlunoPorMesMatricula(chamadaDeAlunos = [], mes, ano) {
    console.log("> listarAlunoPorMesMatricula");
    chamadaDeAlunos.forEach(aluno => {
        const dataMatriculaArr = aluno.matriculadoEm.split("/")
        const anoMatricula = dataMatriculaArr[0]
        const mesMatricula = dataMatriculaArr[1]

        if(ano == anoMatricula && mes == mesMatricula) {
            console.log(">> Aluno", aluno.nome);
            console.log(">> MatriculadoEm", aluno.matriculadoEm);
            console.log("\n");
    
        }
    })
}

function alunoEstaAprovado(aluno) {
    const materiasAprovadas = aluno.materias.map(materia => alunoAprovadoNaMateria(materia))
    if(materiasAprovadas.some(aprovadoNaMateria => aprovadoNaMateria == false)) {
        return false
    }
    return true
}

function avaliaAluno(materia) {
    if (materia.nota >= 6 && materia.presenca >= 75) {
        // Aprovado
        // ...
        console.log("APROVADO")
        console.log("NOTA: " + materia.nota)
        console.log("PRESENCA: " + materia.presenca)
        return
    }

    console.log("REPROVADO: ")
    console.log("NOTA: " + materia.nota)
    console.log("PRESENCA: " + materia.presenca)
}
