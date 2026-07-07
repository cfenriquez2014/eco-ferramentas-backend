const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_ORIGINS = [
"https://www.ecotools.com.br",
"https://storied-lollipop-1867ca.netlify.app",
];

app.use(cors({ origin: ALLOWED_ORIGINS }));
app.use(express.json());

app.post("/api/contato", async (req, res) => {
const { nome, empresa, email, telefone, area, mensagem } = req.body || {};

if (!nome || !empresa || !email || !mensagem) {
return res.status(400).json({ error: "Campos obrigatórios faltando" });
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
return res.status(400).json({ error: "E-mail inválido" });
}
aconst express = require("express");
  const cors = require("cors");
  const { Resend } = require("resend");

  const app = express();
  const resend = new Resend(process.env.RESEND_API_KEY);

  const ALLOWED_ORIGINS = [
    "https://www.ecotools.com.br",
    "https://storied-lollipop-1867ca.netlify.app",
    ];

  app.use(cors({ origin: ALLOWED_ORIGINS }));
  app.use(express.json());

  app.post("/api/contato", async (req, res) => {
    const { nome, empresa, email, telefone, area, mensagem } = req.body || {};

    if (!nome || !empresa || !email || !mensagem) {
      return res.status(400).json({ error: "Campos obrigatórios faltando" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "E-mail inválido" });
    }

    try {
      await resend.emails.send({
        from: "Site Eco Ferramentas <onboarding@resend.dev>",
        to: "cfenriquez2014@gmail.com",
        reply_to: email,
        subject: `Novo contato do site: ${nome} (${empresa})`,
        text:
          `Nome: ${nome}\n` +
          `Empresa: ${empresa}\n` +
          `E-mail: ${email}\n` +
          `Telefone: ${telefone || "-"}\n` +
          `Área: ${area || "-"}\n\n` +
          `Mensagem:\n${mensagem}`,
      });
      res.json({ ok: true });
    } catch (err) {
      console.error("Falha ao enviar e-mail:", err);
      res.status(502).json({ error: "Falha ao enviar e-mail" });
    }
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  
try {
await resend.emails.send({
from: "Site Eco Ferramentas <onboarding@resend.dev>",
to: "contato@ecotools.com.br",
reply_to: email,
subject: `Novo contato do site: ${nome} (${empresa})`,
text:
`Nome: ${nome}\n` +
`Empresa: ${empresa}\n` +
`E-mail: ${email}\n` +
`Telefone: ${telefone || "-"}\n` +
`Área: ${area || "-"}\n\n` +
`Mensagem:\n${mensagem}`,
});
res.json({ ok: true });
} catch (err) {
console.error("Falha ao enviar e-mail:", err);
res.status(502).json({ error: "Falha ao enviar e-mail" });
}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
