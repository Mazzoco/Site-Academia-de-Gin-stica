class Usuario {
    constructor(nome, email, idade, senha) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.senha = senha;
    }

    getNome() { return this.nome; }
    getEmail() { return this.email; }
    getIdade() { return this.idade; }
    getSenha() { return this.senha; }
}