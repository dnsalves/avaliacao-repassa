<h1>Rodando o Backend</h1>

<p>
  <ul>
    <li>Acesse a pasta server</li>
    <li>Crie uma cópia do arquivo .env.example e renomeie apenas para .env</li>
    <li>Preencha as variáveis com os dados corretamente e acesse a pasta server</li>
    <li>Crie as Tabelas usando a migration da pasta /server/src/database/migrations/</li>
    <li>Crie os Seeds usando a migration da pasta /server/src/database/seeds/</li>
    <li>Execute o script 'dev' (yarn dev ou npm run dev)</li>
    <li>Acesse o navegador atraves da URL e porta cadastrada no arquivo .env (ex.: http://localhost:3333 no caso de estar rodando o projeto localmente e ter cadastrado a porta 3333)</li>
    <li>A partir deste ponto a API estará pronta para responder</li>
  </ul>
</p>

<h1>Rodando o FrontEnd</h1>

<p>
  <ul>
    <li>Acesse a pasta web</li>
    <li>Execute o script 'start' (yarn start ou npm run start)</li>
    <li>Acesse o navegador atraves da URL http://localhost:3000</li>
    <li>O usuário/senha padrão deve ser criado através do seed (admin@repassa.com.br/123456)</li>
  </ul>
</p>
