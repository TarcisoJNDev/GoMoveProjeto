"use client";
import Image from "next/image";
import Esportes from '../../public/Esporte.jpg'

import { useState } from "react";


export default function Dashboard() {
  const [showCommentInput, setShowCommentInput] = useState(false); 
  const [commentText, setCommentText] = useState("");

  const handleLikeClick = (event) => {
    const likeCountElement = event.target.querySelector(".like-count");
    if (likeCountElement) {
      const currentCount = parseInt(likeCountElement.textContent, 10);
      likeCountElement.textContent = currentCount + 1;
    }
  };

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">GoMove</div>
        <input type="text" className="search-bar" placeholder="Pesquisar" />
        <div className="menu">
          <a className="botao-teste">Inicio</a>
          <a className="botao-teste">Perfil</a>
          <a className="botao-teste">Publicações</a>
          <a className="botao-teste"href="#">Mensagens</a>
          <a className="botao-teste"href="#">Notificações</a>
        </div>
      </header>

      <main className="main-content">
        <aside className="sidebar-left">
          <div className="profile-card">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile Picture"
              className="profile-pic"
            />
            <h3>Nome do Usuario</h3>
            <p>Descrição</p>
            <div className="stats">
              <p>
                 <span>Visualizações</span>
              </p>
              <p>
                 <span>postagens</span>
              </p>
            </div>
          </div>
        </aside>

        <section className="feed">
          <div className="post">
            <h4>Nome do Grupo/comunidade</h4>
            <p>"Tema"</p>
            <div className="imagem-centro">
              <Image src="/Esporte.jpg" width={500} height={300} alt="Pessoas numa maratona"/>
            </div>
            <p>
              Os esportes são atividades físicas e competitivas que promovem
              saúde, bem-estar e interação social. Eles podem ser praticados
              individualmente, como o tênis e o atletismo, ou em equipe, como o
              futebol e o basquete. Além de melhorar a condição física, os
              esportes desenvolvem habilidades como disciplina, trabalho em
              equipe e resiliência. São também uma forma de entretenimento,
              unindo pessoas ao redor do mundo por meio de competições locais,
              nacionais e internacionais. Praticar esportes contribui para uma
              vida mais ativa e equilibrada.
            </p>
            <div className="post-actions">
              <button className="color" onClick={handleLikeClick}>
                Gostei (<span className="like-count">0</span>)
              </button>
              <button className="color" onClick={handleCommentClick}>
                Comentar (<span className="comment-count">0</span>)
              </button>
              <button className="color">
                Compartilhar (<span className="share-count">0</span>)
              </button>
            </div>

            {showCommentInput && (
              <div className="comment-input">
                <input
                  type="text"
                  placeholder="Escreva seu comentário..."
                  value={commentText}
                  onChange={handleCommentChange}
                  className="comment-box"
                />
              </div>
            )}
          </div>
        </section>

        <aside className="sidebar-right">
          <div className="news">
            <h4>Perfis e Comunidades</h4>
            <ul>
              <li>
                <a href="#">Seguindo perfis</a>
              </li>
              <br />
              <li>
                <a href="#">Seguindo grupos</a>
              </li>
              <br />
              <li>
                <a href="#">Outros Perfis de interesse</a>
              </li>
              <br />
              <li>
                <a href="#">Outras comunidades/grupos</a>
              </li>
              <br />
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}

  