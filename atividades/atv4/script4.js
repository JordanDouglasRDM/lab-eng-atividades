const meuBotaoProfessor = document.getElementById('meuBotaoProfessor')
const meuBotaoAluno = document.getElementById('meuBotaoAluno')
const especificoProfessor = document.getElementById('especificoProfessor');
const especificoAluno = document.getElementById('especificoAluno');
const botaoEnviar = document.getElementById('botaoEnviar');

botaoEnviar.addEventListener('click', recebeDados);

alterarTipoPessoa();

class Pessoa {
    constructor(nome, email, celular, fixo, dataNascimento, matricula) {
        this.nome = nome;
        this.email = email;
        this.celular = celular;
        this.fixo = fixo;
        this.dataNascimento = dataNascimento;
        this.matricula = matricula;
    }

    exibirDados() {
        return `Nome: ${this.nome}\nEmail: ${this.email}\nCelular: ${this.celular}\nTelefone Fixo: ${this.fixo}\nData de Nascimento: ${this.dataNascimento}\nMatrícula: ${this.matricula}`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, email, celular, fixo, dataNascimento, matricula, curso) {
        super(nome, email, celular, fixo, dataNascimento, matricula);
        this.curso = curso;
    }

    exibirDados() {
        return `${super.exibirDados()}\nCurso: ${this.curso}`;
    }
}

class Professor extends Pessoa {
    constructor(nome, email, celular, fixo, dataNascimento, matricula, area, lattes) {
        super(nome, email, celular, fixo, dataNascimento, matricula);
        this.area = area;
        this.lattes = lattes;
    }

    exibirDados() {
        return `${super.exibirDados()}\nÁrea de atuação: ${this.area}\nLink do Lattes: ${this.lattes}`;
    }
}

function recebeDados(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const matricula = document.getElementById("matricula").value;
    const fixo = document.getElementById("fixo").value;
    const celular = document.getElementById("celular").value;

    const curso = document.getElementById("curso").value;
    const area = document.getElementById("area").value;
    const lattes = document.getElementById("lattes").value;

    if (curso !== '') {
        let aluno = new Aluno(nome, email, dataNascimento, matricula, fixo, celular, curso);
        Swal.fire({
            title: "Esse cadastro é para o tipo ALUNO",
            html: `<pre>${aluno.exibirDados()}</pre>`,
            icon: "success"
        });
    } else {
        let professor = new Professor(nome, email, dataNascimento, matricula, fixo, celular, area, lattes);
        Swal.fire({
            title: "Esse cadastro é para o tipo PROFESSOR",
            html: `<pre>${professor.exibirDados()}</pre>`,
            icon: "success"
        });
    }

}

function alterarTipoPessoa() {
    meuBotaoProfessor.addEventListener('click', function () {
        especificoProfessor.classList.add('show');
        especificoAluno.classList.remove('show');

        meuBotaoProfessor.classList.add('active', 'border-secondary');
        meuBotaoAluno.classList.remove('active', 'border-secondary');

        document.getElementById('curso').value = '';
    })
    meuBotaoAluno.addEventListener('click', function () {
        especificoProfessor.classList.remove('show');
        especificoAluno.classList.add('show')

        meuBotaoProfessor.classList.remove('active', 'border-secondary');
        meuBotaoAluno.classList.add('active', 'border-secondary');

        document.getElementById('area').value = '';
        document.getElementById('lattes').value = '';
    })
}
