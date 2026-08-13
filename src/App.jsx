import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [generated, setGenerated] = useState(false);

  function generateApp() {
    if (!prompt.trim()) return;
    setGenerated(true);
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">AI</div>
          <div>
            <strong>AI App Builder</strong>
            <small>Studio</small>
          </div>
        </div>

        <button className="new-project">
          + Novo projeto
        </button>

        <nav>
          <button className="nav-active">⌂ Projetos</button>
          <button>▣ Templates</button>
          <button>⚙ Configurações</button>
        </nav>

        <div className="status">
          <span></span>
          Ambiente pronto
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <span>Projetos / Meu aplicativo</span>

          <div>
            <button className="secondary">Salvar</button>
            <button className="primary">Publicar</button>
          </div>
        </header>

        <section className="builder">
          <div className="chat">
            <span className="label">CONSTRUTOR IA</span>

            <h1>O que vamos construir?</h1>

            <p>
              Descreva o aplicativo que deseja criar.
              A IA transformará a sua ideia em uma interface.
            </p>

            <div className="prompt-box">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex.: Crie uma plataforma de cursos com login, painel do aluno, cursos e sistema de progresso..."
              />

              <div className="prompt-bottom">
                <span>{prompt.length}/2000</span>

                <button onClick={generateApp}>
                  Gerar aplicativo →
                </button>
              </div>
            </div>

            <div className="suggestions">
              <span>Comece com:</span>

              <button
                onClick={() =>
                  setPrompt(
                    "Crie um dashboard financeiro moderno e responsivo."
                  )
                }
              >
                Dashboard financeiro
              </button>

              <button
                onClick={() =>
                  setPrompt(
                    "Crie uma loja online moderna com produtos e carrinho."
                  )
                }
              >
                Loja online
              </button>

              <button
                onClick={() =>
                  setPrompt(
                    "Crie uma plataforma de cursos online."
                  )
                }
              >
                Plataforma de cursos
              </button>
            </div>
          </div>

          <div className="preview">
            <div className="preview-header">
              <button className="tab-active">
                Pré-visualização
              </button>

              <button>Código</button>

              <div className="device">
                Desktop
              </div>
            </div>

            <div className="browser">
              <div className="browser-top">
                ● ● ●
                <span>localhost:5173</span>
              </div>

              <div className="mock-app">
                <div className="mock-nav">
                  <strong>
                    {generated ? "Meu aplicativo" : "Seu aplicativo"}
                  </strong>

                  <span>Dashboard</span>
                  <span>Projetos</span>
                  <span>Configurações</span>
                </div>

                <div className="mock-content">
                  <span className="label">
                    PROTÓTIPO V1
                  </span>

                  <h2>
                    {generated
                      ? "A sua ideia ganhou forma."
                      : "O seu aplicativo começa aqui."}
                  </h2>

                  <p>
                    {generated
                      ? "A primeira versão visual foi criada com base na sua descrição."
                      : "Escreva uma descrição no painel esquerdo para começar."}
                  </p>

                  <div className="cards">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
      }
