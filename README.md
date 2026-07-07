# eco-ferramentas-backend

API minima em Express que recebe o formulario de contato do site e envia um e-mail via Resend para contato@ecotools.com.br.

## Rodar localmente

npm install
cp .env.example .env
npm start

Servidor sobe em http://localhost:3000. Endpoint: POST /api/contato.

## Deploy no Render

1. Render.com - New - Web Service - conecte este repositorio.
2. Build command: npm install
3. Start command: npm start
4. Em Environment, adicione RESEND_API_KEY com a chave gerada em resend.com.
5. Depois do deploy, copie a URL gerada e atualize CONTATO_API_URL em js/main.js no site.
