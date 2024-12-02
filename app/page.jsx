'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function Home() {

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);  // Inicia o carregamento ao clicar no botão

    try {
      // Faz a autenticação com o Google sem redirecionar automaticamente
      const result = await signIn('google', { redirect: false });

      // Se houver erro na autenticação
      if (result?.error) {
        console.error('Erro ao fazer login:', result.error);
      } else {
        // Caso o login seja bem-sucedido, redirecione o usuário
        window.location.href = '/redirecionado'; // Redireciona para a página desejada
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
    } finally {
      // Quando o processo for finalizado, desativa o loading
      setIsLoading(false);
    }
  };

  return (
    
    <div className="container">
      <div className="login-card">
        <img src="/logo.png" alt="GoMove Logo" className="logo" />
        <h2>Inicie sessão com:</h2>
        <div className="social-buttons">
          <button onClick={handleLogin} className="google-btn">Google</button>
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
}
