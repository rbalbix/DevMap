import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://www.outsystems.com/forgeCore/rest/ComponentThumbnail/GetURL_ComponentThumbnail?ProjectImageId=18741"
                alt="Avatar do usuário"
              />
              <div className="user-info">
                <strong>Ricardo</strong>
                <span>React, Node</span>
              </div>
            </header>
            <p>Bio do GH</p>
            <a href="https://bitbucket.com">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://www.outsystems.com/forgeCore/rest/ComponentThumbnail/GetURL_ComponentThumbnail?ProjectImageId=18741"
                alt="Avatar do usuário"
              />
              <div className="user-info">
                <strong>Ricardo</strong>
                <span>React, Node</span>
              </div>
            </header>
            <p>Bio do GH</p>
            <a href="https://bitbucket.com">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://www.outsystems.com/forgeCore/rest/ComponentThumbnail/GetURL_ComponentThumbnail?ProjectImageId=18741"
                alt="Avatar do usuário"
              />
              <div className="user-info">
                <strong>Ricardo</strong>
                <span>React, Node</span>
              </div>
            </header>
            <p>Bio do GH</p>
            <a href="https://bitbucket.com">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://www.outsystems.com/forgeCore/rest/ComponentThumbnail/GetURL_ComponentThumbnail?ProjectImageId=18741"
                alt="Avatar do usuário"
              />
              <div className="user-info">
                <strong>Ricardo</strong>
                <span>React, Node</span>
              </div>
            </header>
            <p>Bio do GH</p>
            <a href="https://bitbucket.com">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
