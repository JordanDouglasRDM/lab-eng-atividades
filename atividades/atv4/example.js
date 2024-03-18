//exemplo de uma forma alternativa (mais antiga) de implementar classes

function Pessoa() {
    let nome, email, celular, fixo, dataNascimento, matricula;
    this.setNome = function (vNome) {
        this.nome = vNome;
    }
    this.getNome = function () {
        return this.nome;
    }
    this.setEmail = function (vEmail) {
        this.email = vEmail;
    }
    this.getEmail = function () {
        return this.email;
    }
    this.setCelular = function (vCelular) {
        this.celular = vCelular;
    }
    this.getCelular = function () {
        return this.celular;
    }
    this.setFixo = function (vFixo) {
        this.fixo = vFixo;
    }
    this.getFixo = function () {
        return this.fixo;
    }
    this.setDataNascimento = function (vDataNascimento) {
        this.dataNascimento = vDataNascimento;
    }
    this.getDataNascimento = function () {
        return this.dataNascimento;
    }
    this.setMatricula = function (vMatricula) {
        this.matricula = vMatricula;
    }
    this.getMatricula = function () {
        return this.matricula;
    }
}

function Aluno() {
    let curso;
    Pessoa.call(this);
    this.setCurso = function (vCurso) {
        this.curso = vCurso;
    }
    this.getCurso = function () {
        return this.curso;
    }
}

function Professor() {
    let area, lattes;
    Pessoa.call(this);
    this.setArea = function (vArea) {
        this.area = vArea;
    }
    this.getArea = function () {
        return this.area;
    }
    this.setLattes = function (vLattes) {
        this.lattes = vLattes;
    }
    this.getLattes = function () {
        return this.lattes;
    }
}