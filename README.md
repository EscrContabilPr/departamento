# Escritório Paraná Contabilidade — Site Institucional

Site institucional estático (HTML5, CSS3 e JavaScript puro) para o **Escritório Paraná Contabilidade** (Escritorio Parana LTDA), desenvolvido para publicação no GitHub Pages e aprovação de conta no Google Ads.

## 📁 Estrutura de pastas

```
site/
├── index.html                          # Página principal (15 seções)
├── css/
│   └── style.css                       # Estilos, variáveis, responsividade e animações
├── js/
│   └── script.js                       # Menu mobile, FAQ, scroll reveal, formulário
├── pages/
│   ├── politica-de-privacidade.html    # Política de Privacidade (LGPD)
│   └── blog.html                       # Artigos completos do blog
├── robots.txt
├── sitemap.xml
└── README.md
```

## 🚀 Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `escritorio-parana`).
2. Copie todo o conteúdo desta pasta `site/` para a raiz do repositório.
3. Faça commit e push dos arquivos.
4. No repositório, vá em **Settings → Pages**.
5. Em **Branch**, selecione `main` e a pasta `/root`, depois clique em **Save**.
6. Aguarde alguns minutos — o GitHub fornecerá uma URL pública, algo como:
   `https://seu-usuario.github.io/escritorio-parana/`

## ✅ Itens já preparados para aprovação no Google Ads

- Dados de CNPJ, Razão Social e Registro CRC visíveis no **cabeçalho**, no **meio da página** (seção "Dados de Registro da Empresa") e no **rodapé**.
- Página dedicada de **Política de Privacidade**, com menção a cookies e ao uso do Google Ads.
- Informações de contato reais (telefone, e-mail e endereço físico) visíveis em várias seções.
- Site sem conteúdo enganoso, com textos claros sobre os serviços oferecidos.
- HTML semântico, meta tags de SEO e dados estruturados (JSON-LD) para melhor indexação.

## ✏️ Antes de publicar, atualize

- Substitua `https://www.escritorioparana.com.br/` pelo domínio real (ou pela URL do GitHub Pages) nas tags `canonical` e `og:url` dos arquivos HTML.
- Ajuste links de redes sociais no rodapé (`href="#"`).
- Se desejar receber os formulários de contato de verdade, integre um serviço como Formspree, EmailJS ou um backend próprio (atualmente o formulário abre um e-mail via `mailto:`).

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Flexbox, Grid, animações)
- JavaScript puro (sem frameworks ou dependências externas)
- Google Fonts (Inter e Poppins)

## ♿ Acessibilidade

- Link de "pular para o conteúdo".
- Uso de `aria-label`, `aria-expanded`, `aria-controls` e `role` nos componentes interativos.
- Contraste de cores adequado e foco visível em todos os elementos interativos.
- Suporte a `prefers-reduced-motion`.
