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

//salva perfil
function salvarAlteracoesUsuario() {
    const nome = document.getElementById('inputNomeUsuario').value.trim();
    const email = document.getElementById('inputEmailUsuario').value.trim();
    const fotoInput = document.getElementById('inputFotoPerfil');

    if (nome !== "") localStorage.setItem("nomeUsuario", nome);
    if (email !== "") localStorage.setItem("emailUsuario", email);

    if (fotoInput.files && fotoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem("fotoPerfil", e.target.result);

            const preview = document.getElementById("previewFotoPerfil");
            if (preview) preview.src = e.target.result;

            const fotoNav = document.getElementById("fotoPerfilNav");
            if (fotoNav) fotoNav.src = e.target.result;
        }
        reader.readAsDataURL(fotoInput.files[0]);
    }

    atualizarNavbar();
    alert("Informações atualizadas com sucesso!");
}

//Atualiza NavBar

function atualizarNavbar() {
    const nome = localStorage.getItem("nomeUsuario");
    const foto = localStorage.getItem("fotoPerfil");

    const nomeNav = document.getElementById("nomeUsuarioNav");
    const fotoNav = document.getElementById("fotoPerfilNav");

    const menuDados = document.getElementById("menuDados");
    const menuSair = document.getElementById("menuSair");
    const menuDivider = document.getElementById("menuDivider");
    const menuLogin = document.getElementById("menuLogin");

    // Atualiza nome
    if (nomeNav) {
        nomeNav.innerText = nome ? nome : "Minha Conta";
    }

    // Atualiza foto
    if (fotoNav) {
        fotoNav.src = foto ? foto : "imgsgym/person-circle.svg";
    }

    // Controle de menus
    if (nome) {
        // Usuário logado
        if (menuDados) menuDados.style.display = "block";
        if (menuSair)  menuSair.style.display = "block";
        if (menuDivider) menuDivider.style.display = "block";

        if (menuLogin) menuLogin.style.display = "none";
    } else {
        // Usuário NÃO logado
        if (menuDados) menuDados.style.display = "none";
        if (menuSair)  menuSair.style.display = "none";
        if (menuDivider) menuDivider.style.display = "none";

        if (menuLogin) menuLogin.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", atualizarNavbar);

    //Logout
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
