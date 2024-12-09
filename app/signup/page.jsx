"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../globals.css";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    dataNascimento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    router.push("/dashboard");
  };

  return (
    <div className="signup-container">
      <h1>Cadastro</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Senha</label>
        <input
          type="password"
          name="senha"
          placeholder="Digite sua senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />

        <label>Confirmação da Senha</label>
        <input
          type="password"
          name="confirmarSenha"
          placeholder="Confirme sua senha"
          value={formData.confirmarSenha}
          onChange={handleChange}
          required
        />

        <label>Data de Nascimento</label>
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
        />

        <button type="submit" className="signup-btn">Cadastrar</button>
      </form>
      <p className="login-redirect">
        Já tem uma conta?{" "}
        <a href="#" onClick={() => router.push("/")}>
          Faça login aqui!
        </a>
      </p>
    </div>
  );
}

  