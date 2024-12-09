/*import Image from "next/image";
import styles from "./globals.css";

export default function Home() {

  return (
    <div className="container">
    <div className="login-card">
      <h2>Inicie sessão com:</h2>
      <div className="social-buttons">
        <button className="google-btn">Google</button>
        <button className="facebook-btn">Facebook</button>
        <button className="linkedin-btn">LinkedIn</button>
      </div>
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Digite seu email" />
        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" />
        <small>
          * Mínimo 10 caracteres, uma maiúscula, uma minúscula e um número.
        </small>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <a href="#" className="forgot-password">Esqueci minha senha</a>
      <p className="signup">
        Você não tem uma conta na GoMove? <a href="#">Cadastre-se aqui!</a>
      </p>
    </div>
  </div>
    );
  }*/

"use client";
import { useRouter } from "next/navigation"; // Import correto no App Router
import styles from "./globals.css";

export default function Home() {
  const router = useRouter(); // Instância do roteador

  const handleLogin = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    router.push("/dashboard"); // Redireciona para a rota 'dashboard'
  };

  const handleSignupRedirect = (e) => {
    e.preventDefault(); // Previne comportamento padrão do link
    router.push("/signup"); // Redireciona para a rota 'signup'
  };

  return (
    <div className="container">
      <div className="login-card">
        <h2>Inicie sessão com:</h2>
        <div className="social-buttons">
          <button className="google-btn">Google</button>
          <button className="facebook-btn">Facebook</button>
          <button className="linkedin-btn">LinkedIn</button>
        </div>
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Digite seu email" />
          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />
          <small>
            * Mínimo 10 caracteres, uma maiúscula, uma minúscula e um número.
          </small>
          <button type="submit" className="login-btn" onClick={handleLogin}>Login</button>
        </form>
        <a href="#" className="forgot-password">Esqueci minha senha</a>
        <p className="signup">
          Você não tem uma conta na GoMove?{" "}
          <a href="#" onClick={handleSignupRedirect}>Cadastre-se aqui!</a>
        </p>
      </div>
    </div>
  );
}
