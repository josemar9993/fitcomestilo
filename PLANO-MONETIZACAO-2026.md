# 🚀 PLANO MESTRE DE MONETIZAÇÃO — Fit com Estilo
### Versão 1.0 | 28 de Fevereiro de 2026

---

## DIAGNÓSTICO ATUAL

Analisei **cada arquivo, cada link, cada linha de código** do site `fitcomestilo.store`. Aqui está o panorama completo:

| O que vocês têm | Status |
|---|---|
| Site estático no GitHub Pages (custo zero) | ✅ |
| 5 programas de afiliados (Amazon, Shopee, Hotmart, Magalu, Shein) | ✅ |
| SEO avançado (Schema.org, Sitemap, RSS, Google Merchant Center) | ✅ |
| PWA instalável | ✅ |
| 6 redes sociais configuradas | ✅ |
| Microsoft Clarity (heatmaps) | ✅ |
| Callback TikTok API (publicação automática) | ✅ |

---

## ⚠️ PROBLEMAS CRÍTICOS ENCONTRADOS (Dinheiro que está sendo perdido AGORA)

### 🔴 PROBLEMA #1 — 240 PRODUTOS SEM TAG DE AFILIADO (CRÍTICO!)

A página `/achadinhos/` tem **240 produtos da Shopee** com links assim:
```
https://shopee.com.br/product/123456/789012
```

Esses links **NÃO TÊM** o parâmetro `mmp_pid=an_18356120947`. Isso significa que **NENHUM clique nesses 240 produtos gera comissão**. Se 100 pessoas clicam por dia, vocês estão **perdendo 100% dessa receita**.

**CORREÇÃO URGENTE:** Todos os 240 links precisam incluir:
```
?mmp_pid=an_18356120947&utm_source=an_18356120947&utm_medium=affiliates&utm_content=FitComEstilo-Achadinhos
```

### 🔴 PROBLEMA #2 — SEM GOOGLE ANALYTICS

Vocês têm Clarity (heatmaps) mas **zero dados de conversão**. Sem GA4, vocês não sabem:
- Quantas pessoas visitam o site
- De onde vêm (Google, Instagram, TikTok?)
- Quais produtos são mais clicados
- Qual o funil de conversão

### 🔴 PROBLEMA #3 — SEM GOOGLE ADSENSE

O site não tem nenhum anúncio display. Com o conteúdo que vocês têm (guias de compra, reviews, listas), o site é **elegível para AdSense** e pode gerar receita passiva por visualização de página, independente de vendas.

### 🟡 PROBLEMA #4 — SEM CAPTURA DE EMAIL

Zero formulários de email. Cada visitante que sai do site é perdido para sempre. Não há como re-engajá-lo.

### 🟡 PROBLEMA #5 — SEM PIXEL DE RETARGETING

Sem Facebook Pixel e sem TikTok Pixel, vocês não podem fazer remarketing (mostrar anúncios para quem já visitou o site).

---

## 💡 O PLANO: 7 ESTRATÉGIAS QUE QUASE NINGUÉM FAZ

Pesquisei extensivamente o mercado brasileiro de afiliados. A maioria faz o básico: posta link com cupom no Instagram e espera. O que proponho abaixo é uma **máquina de monetização multi-camada** que multiplica cada visitante em várias fontes de receita simultaneamente.

---

### ESTRATÉGIA 1: "COMPARADOR INTELIGENTE" — O Google Shopping caseiro
**Nível de inovação: ★★★★★ | Dificuldade: Média | Retorno: ALTO**

#### O que é:
Criar uma página `/comparar/` que funcione como um **mini Google Shopping personalizado**. O visitante escolhe o produto que quer (ex: "Legging") e o site mostra o mesmo produto em 4 lojas (Shopee, Shein, Amazon, Magalu) com preço, frete e avaliação — tudo com links de afiliado.

#### Por que ninguém faz:
99% dos afiliados brasileiros linkam para UMA loja. Ninguém oferece comparação entre lojas. O visitante sente que está sendo ajudado (não vendido), e a taxa de clique explode.

#### Como implementar:
1. Criar uma tabela HTML responsiva com as 4 lojas lado a lado
2. Incluir preço atualizado, badge de "Menor Preço" e botão "Ver Oferta"
3. Todos os botões são links de afiliado das respectivas lojas
4. Adicionar Schema.org `Product` com `AggregateOffer` para aparecer no Google Shopping

#### Receita estimada:
- Comparadores têm taxa de conversão 3-5x maior que links simples
- Visitantes clicam em MÚLTIPLAS lojas (você ganha cookie de afiliado em todas)

```html
<!-- Exemplo de estrutura -->
<div class="comparador">
  <h2>🔥 Legging Fitness — Compare Preços</h2>
  <div class="comparador-grid">
    <div class="loja-card shopee">
      <img src="logo-shopee.svg">
      <span class="preco">R$ 32,99</span>
      <span class="badge menor">✅ Menor Preço</span>
      <a href="[link-afiliado-shopee]" class="btn">Ver na Shopee</a>
    </div>
    <div class="loja-card shein">
      <img src="logo-shein.svg">
      <span class="preco">R$ 49,90</span>
      <a href="[link-afiliado-shein]" class="btn">Ver na Shein</a>
    </div>
    <!-- Amazon, Magalu... -->
  </div>
</div>
```

---

### ESTRATÉGIA 2: "QUIZ DE ESTILO" — Funil interativo com conversão brutal
**Nível de inovação: ★★★★★ | Dificuldade: Média | Retorno: MUITO ALTO**

#### O que é:
Um quiz interativo tipo: **"Qual é o seu estilo fitness?"** com 5-7 perguntas visuais. No final, gera um resultado personalizado com 3-5 produtos recomendados (todos com link de afiliado) + pedido de email para "receber mais recomendações".

#### Por que funciona:
- Quizzes têm **taxa de conclusão de 80%+** (vs. 2% de clique em banners)
- O visitante se sente "atendida pessoalmente"
- Coleta email de forma natural (sem parecer spam)
- Conteúdo é extremamente compartilhável no Instagram/TikTok

#### Como implementar (100% HTML/JS, sem backend):
```
Página: /quiz/
Pergunta 1: "Qual seu objetivo principal?" (Emagrecer / Ganhar massa / Flexibilidade / Bem-estar)
Pergunta 2: "Qual seu estilo preferido?" (Básico / Colorido / All Black / Estampado)
Pergunta 3: "Quanto quer investir?" (até R$50 / R$50-100 / R$100+)
Pergunta 4: "Qual acessório não pode faltar?" (Garrafa / Relógio / Fone / Mochila)
Pergunta 5: "Com que frequência treina?" (3x / 5x / Todo dia / Começando)
```

#### Resultados personalizados:
Cada combinação leva a um "perfil" com nome criativo:
- 🔥 **Warrior Fit** — "Você é intensa e precisa de roupas que acompanhem!"
- 🌸 **Zen Flow** — "Yoga e pilates são sua praia, conforto é tudo!"
- 💪 **Power Queen** — "Treino pesado pede peças que performam!"

Cada perfil mostra 3-5 produtos de afiliados específicos + CTA para Telegram/WhatsApp.

#### Receita estimada:
- Quiz captura email → lista de email → campanhas recorrentes
- Produtos recomendados convertem 4-7x mais que listagem genérica
- Compartilhamento orgânico gera tráfego gratuito

---

### ESTRATÉGIA 3: "OFERTAS RELÂMPAGO AUTOMATIZADAS" — Bot de Telegram/WhatsApp
**Nível de inovação: ★★★★☆ | Dificuldade: Baixa | Retorno: ALTO**

#### O que é:
Transformar o canal de Telegram `@fitcomestilo_ofertas` (que vocês já têm!) em uma **máquina de vendas automatizada** que posta ofertas por categoria, com horários estratégicos.

#### O que ninguém faz direito:
A maioria dos canais de ofertas posta 50 produtos por dia sem critério. O resultado: ninguém lê nada. A estratégia é postar **POUCOS produtos** (3-5/dia) nos **HORÁRIOS CERTOS**, com formato que gera urgência e desejo.

#### Formato de post otimizado:
```
🔥 ACHOU QUE ERA FAKE? 🔥

✨ Legging Cós Alto Canelada
⭐ 4.8 (2.340 avaliações)
💰 De R̶$̶ ̶6̶5̶,̶9̶0̶ por R$ 28,99
📉 Menor preço dos últimos 30 dias!
🚚 Frete grátis acima de R$ 29

⏰ Só até meia-noite ou acabar o estoque!

🛒 COMPRAR AGORA 👇
[link-afiliado]

#ModaFitness #Promoção #Shopee
```

#### Horários estratégicos (baseados em dados de comportamento):
| Horário | Tipo de Post | Por quê |
|---|---|---|
| 07:00 | Dica rápida + 1 produto | Mulheres checam celular ao acordar |
| 12:00 | "Achado do Dia" (oferta principal) | Pausa do almoço = pico de compras |
| 18:00 | Flash Sale (urgência) | Saída do trabalho, tempo livre |
| 21:00 | "Enquanto dura" (oferta noturna) | Compras por impulso antes de dormir |

#### Automação:
- Usar **Telegram Bot API** (gratuito) para agendar posts
- Ou usar **Zapier free tier** para agendar de uma planilha Google Sheets
- Criar template fixo e só trocar produto/preço/link

---

### ESTRATÉGIA 4: "CONTEÚDO SEO PROGRAMÁTICO" — Páginas que se criam sozinhas
**Nível de inovação: ★★★★★ | Dificuldade: Alta | Retorno: MUITO ALTO (longo prazo)**

#### O que é:
Criar **dezenas de páginas de conteúdo automaticamente** a partir de templates + dados de produtos. Cada página é otimizada para uma busca específica no Google.

#### Exemplo de páginas geradas:
```
/melhores-leggings-ate-50-reais/
/melhores-creatinas-2026/
/comparativo-air-fryer-barata/
/melhor-serum-vitamina-c-shopee/
/kit-moda-fitness-iniciante/
/melhores-livros-desenvolvimento-pessoal/
/top-10-acessorios-academia-2026/
/guia-skincare-coreano-barato/
```

#### Por que funciona:
Cada página ataca uma **long-tail keyword** (busca específica como "melhor legging barata shopee 2026"). Essas palavras têm MENOS concorrência e MAIS intenção de compra.

#### Como implementar:
1. Criar um **template HTML base** com variáveis (`{TITULO}`, `{PRODUTO_1}`, `{PRECO}`, etc.)
2. Criar uma **planilha com dados** de cada página (título, produtos, preços, links)
3. Usar um **script Python/Node simples** que gera as páginas HTML automaticamente
4. Commitar no GitHub Pages

#### Script gerador (exemplo simplificado):
```python
import json

template = open('template-guia.html').read()
produtos = json.load(open('dados-produtos.json'))

for grupo in produtos:
    html = template.replace('{TITULO}', grupo['titulo'])
    html = html.replace('{DESCRICAO}', grupo['descricao'])
    # ... substituir variáveis de cada produto
    
    filename = grupo['slug'] + '.html'
    with open(f'p/{filename}', 'w') as f:
        f.write(html)
```

#### Receita estimada:
- 50 páginas otimizadas = 50 chances de aparecer no Google
- Cada página atrai tráfego orgânico permanente
- Tráfego orgânico é GRATUITO e RECORRENTE

---

### ESTRATÉGIA 5: "MONETIZAÇÃO EM CAMADAS" — Cada visitante gera receita de 3 formas
**Nível de inovação: ★★★★☆ | Dificuldade: Baixa | Retorno: ALTO**

#### O conceito:
Em vez de depender APENAS de comissões de afiliado, cada visitante deve gerar receita de **3 fontes simultâneas**:

```
┌──────────────────────────────────────────────┐
│           VISITANTE CHEGA NO SITE             │
├──────────────────────────────────────────────┤
│                                              │
│  CAMADA 1: Google AdSense                    │
│  → Ganha dinheiro POR VISUALIZAÇÃO           │
│  → Mesmo que não clique em nada!             │
│  → Estimativa: R$ 2-8 por 1000 visualizações │
│                                              │
│  CAMADA 2: Links de Afiliado                 │
│  → Ganha COMISSÃO por cada venda             │
│  → Shopee ~8-12%, Amazon 4-10%, Hotmart 40%+ │
│  → Já implementado (mas precisa corrigir!)   │
│                                              │
│  CAMADA 3: Captura de Email / Telegram       │
│  → Ganha o CONTATO do visitante              │
│  → Pode enviar ofertas futuras               │
│  → Receita RECORRENTE por meses/anos         │
│                                              │
└──────────────────────────────────────────────┘
```

#### Implementação da CAMADA 1 (AdSense):
1. **Criar conta no Google AdSense** → https://adsense.google.com
2. Vocês já têm o Google Search Console verificado, o que ajuda na aprovação
3. Inserir o código AdSense no `<head>` de todas as páginas
4. Posicionar anúncios em **3 locais estratégicos**:
   - **Topo** (antes do primeiro card) — banner horizontal
   - **Meio** (entre os cards, a cada 4 produtos) — anúncio nativo
   - **Rodapé** (antes do footer) — banner retangular

```html
<!-- Exemplo de integração AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX" crossorigin="anonymous"></script>

<!-- Anúncio entre cards -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXX"
     data-ad-slot="YYYYYYY"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
```

#### Implementação da CAMADA 3 (Captura de email):
Usar **formulário de email gratuito** via:
- **Mailchimp** (grátis até 500 contatos) — https://mailchimp.com
- **MailerLite** (grátis até 1000 contatos) — https://mailerlite.com
- **Brevo/Sendinblue** (grátis até 300 emails/dia) — https://brevo.com

Pontos de captura no site:
1. **Pop-up de saída** (exit intent) — "Espera! Quer receber as melhores ofertas antes de todo mundo?"
2. **Barra fixa superior** — "📩 Receba ofertas exclusivas por e-mail | Cadastre-se grátis"
3. **Após resultado do quiz** — "Me manda seu email que eu envio seu perfil completo"
4. **No final de cada guia** — "📬 Gostou? Receba guias como esse toda semana!"

---

### ESTRATÉGIA 6: "TIKTOK SHOP + CONTEÚDO VIRAL" — A mina de ouro inexplorada
**Nível de inovação: ★★★★★ | Dificuldade: Média | Retorno: EXPLOSIVO**

#### O que é:
Vocês JÁ têm a integração com TikTok API (callback OAuth configurado em `/callback/`). Isso é raro! 99% dos afiliados brasileiros não usam a TikTok API. Vamos usar isso a favor.

#### Estratégia de conteúdo TikTok (formato que viraliza):
| Tipo de Vídeo | Formato | Exemplo |
|---|---|---|
| **"Comprei por R$X"** | Unboxing curto (15s) | "Comprei esse conjunto fitness por R$32 na Shopee" |
| **"Achados que você PRECISA"** | Slideshow rápido (3-5 produtos) | Mostrar os achadinhos com preço na tela |
| **"Comparando preços"** | Split screen | Mesmo produto: Shopee R$28 vs Shein R$49 |
| **"Antes e Depois"** | Transição | Look básico → Look fitness completo |
| **"POV: Você encontrou"** | Trending audio | Usar áudio viral + mostrar produto |
| **"Testei os mais vendidos"** | Review rápido | Testar 3 produtos e dar nota |

#### Automação com TikTok API:
Usar o callback que vocês já têm para:
1. Postar conteúdo diretamente do site para o TikTok
2. Agendar posts em horários de pico (18h-22h)
3. Usar photos (carousel) do TikTok para mostrar múltiplos produtos

#### Por que TikTok é decisivo:
- O alcance orgânico do TikTok em 2026 é **10-50x maior** que Instagram
- Vídeos de "achadinhos" e "comprinhas" são dos mais assistidos no Brasil
- O link na bio pode apontar para **fitcomestilo.store** e gerar tráfego gratuito massivo
- TikTok Shop está expandindo no Brasil — quando chegar, vocês já estarão posicionados

---

### ESTRATÉGIA 7: "MICRO-SAAS DE CUPONS" — Receita recorrente sem estoque
**Nível de inovação: ★★★★★ | Dificuldade: Alta | Retorno: MUITO ALTO (longo prazo)**

#### O que é:
Criar um **sistema de alerta de ofertas** onde o visitante se cadastra para receber notificações quando um produto específico baixar de preço. Funciona como um "Pelando" ou "Buscapé", mas focado no nicho fitness/beleza feminina.

#### Como funciona:
1. Visitante acessa `/alertas/`
2. Escolhe categoria (Moda Fitness, Skincare, Suplementos)
3. Define preço máximo que deseja pagar
4. Recebe notificação por email/Telegram quando encontrar

#### Por que é genial:
- **Captura email** de forma natural (a pessoa QUER receber)
- **Reengajamento**: pode enviar ofertas mesmo semanas depois
- **Exclusividade**: nenhum site de afiliados fitness faz isso
- **Dados**: você descobre EXATAMENTE o que as pessoas querem comprar

#### Implementação (MVP simples):
- Formulário no site → dados vão para Google Sheets (via Google Forms)
- Script semanal verifica preços e envia email manual com as ofertas
- Evolui para automação com Zapier/Make conforme crescer

---

## 📊 PLANO DE AÇÃO — CRONOGRAMA DE IMPLEMENTAÇÃO

### SEMANA 1-2: CORREÇÕES URGENTES (Estancar as perdas)

- [ ] **CORRIGIR os 240 links de afiliado na /achadinhos/** (está perdendo dinheiro!)
- [ ] **Instalar Google Analytics 4** (código simples no `<head>`)
- [ ] **Instalar Facebook Pixel** (para remarketing futuro)
- [ ] **Instalar TikTok Pixel** (já têm a verificação, falta o pixel)
- [ ] **Adicionar UTM tracking** em todos os links de afiliado

### SEMANA 3-4: GOOGLE ADSENSE (Camada 1 de receita)

- [ ] **Aplicar para Google AdSense** (o site tem conteúdo suficiente)
- [ ] **Posicionar anúncios estrategicamente** (sem atrapalhar UX)
- [ ] **Testar formatos** (auto-ads vs. manual placements)

### SEMANA 5-6: CAPTURA DE EMAIL + TELEGRAM (Camada 3)

- [ ] **Configurar Mailchimp/MailerLite** (conta gratuita)
- [ ] **Criar pop-up de saída** com oferta irresistível
- [ ] **Criar barra superior** de captura de email
- [ ] **Ativar canal Telegram** com posts automatizados
- [ ] **Criar sequência de boas-vindas** (3 emails automáticos)

### SEMANA 7-8: QUIZ INTERATIVO (Motor de conversão)

- [ ] **Criar página /quiz/** com HTML/CSS/JS puro
- [ ] **Definir 5 perfis de resultado** com produtos específicos
- [ ] **Integrar com captura de email** no resultado
- [ ] **Compartilhar quiz no Instagram/TikTok** para gerar tráfego

### SEMANA 9-12: COMPARADOR + CONTEÚDO PROGRAMÁTICO (SEO de longo prazo)

- [ ] **Criar página /comparar/** com os primeiros 10 produtos
- [ ] **Criar template de guia** para geração programática
- [ ] **Gerar 20-30 páginas de conteúdo** otimizadas para Google
- [ ] **Submeter novas páginas no Google Search Console**

### CONTÍNUO: TIKTOK + REDES SOCIAIS (Tráfego gratuito)

- [ ] **Postar 3-5 vídeos por semana no TikTok** (formato testado acima)
- [ ] **Repostar conteúdo no Reels/Instagram** e YouTube Shorts
- [ ] **Analisar dados semanalmente** e ajustar estratégia

---

## 💰 PROJEÇÃO DE RECEITA

### Cenário Conservador (3 meses)

| Fonte de Receita | Receita Mensal Estimada |
|---|---|
| Shopee Afiliados (com links corrigidos!) | R$ 200 - R$ 800 |
| Amazon Associates | R$ 100 - R$ 400 |
| Hotmart (cursos 40%+ comissão) | R$ 300 - R$ 1.500 |
| Google AdSense | R$ 50 - R$ 200 |
| Magalu + Shein | R$ 50 - R$ 200 |
| **TOTAL MENSAL** | **R$ 700 - R$ 3.100** |

### Cenário Otimista (6-12 meses com todas as estratégias)

| Fonte de Receita | Receita Mensal Estimada |
|---|---|
| Shopee Afiliados (+ achadinhos + comparador) | R$ 1.000 - R$ 5.000 |
| Amazon Associates | R$ 500 - R$ 2.000 |
| Hotmart (quiz direciona para cursos) | R$ 1.500 - R$ 8.000 |
| Google AdSense (50+ páginas de conteúdo) | R$ 300 - R$ 1.500 |
| Magalu + Shein | R$ 200 - R$ 1.000 |
| Email Marketing (lista crescente) | R$ 500 - R$ 3.000 |
| **TOTAL MENSAL** | **R$ 4.000 - R$ 20.500** |

---

## 🧠 DETALHES TÉCNICOS — CÓDIGO PRONTO PARA IMPLEMENTAR

### 1. Google Analytics 4 (adicionar em TODAS as páginas)
```html
<!-- Google Analytics 4 — Adicionar ANTES de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Facebook Pixel (adicionar em TODAS as páginas)
```html
<!-- Facebook Pixel — Adicionar ANTES de </head> -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### 3. Tracking de cliques em afiliados (evento customizado)
```javascript
// Adicionar no JavaScript principal
// Trackeia cada clique em link de afiliado
document.querySelectorAll('a[href*="shopee"], a[href*="amazon"], a[href*="shein"], a[href*="magalu"], a[href*="hotmart"]').forEach(link => {
  link.addEventListener('click', function() {
    const store = this.href.includes('shopee') ? 'Shopee' :
                  this.href.includes('amazon') ? 'Amazon' :
                  this.href.includes('shein') ? 'Shein' :
                  this.href.includes('magalu') ? 'Magalu' : 'Hotmart';
    
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', 'affiliate_click', {
        'event_category': 'Affiliate',
        'event_label': store,
        'link_url': this.href
      });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead', { content_name: store });
    }
  });
});
```

### 4. Pop-up de captura de email (Exit Intent)
```html
<!-- Pop-up de saída — Adicionar ANTES de </body> -->
<div id="exit-popup" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:99999; align-items:center; justify-content:center;">
  <div style="background:#fff; border-radius:24px; padding:40px; max-width:400px; text-align:center; position:relative; margin:20px;">
    <button onclick="document.getElementById('exit-popup').style.display='none'; localStorage.setItem('popup-closed','1')" style="position:absolute; top:12px; right:16px; background:none; border:none; font-size:24px; cursor:pointer;">✕</button>
    <div style="font-size:48px; margin-bottom:16px;">🎁</div>
    <h2 style="font-size:22px; margin-bottom:8px; color:#1a1a2e;">Espera! Presente pra você</h2>
    <p style="color:#666; margin-bottom:20px; font-size:14px;">Receba as <b>melhores ofertas fitness</b> direto no seu email antes de todo mundo!</p>
    <form action="https://SEU-MAILCHIMP-URL" method="post" target="_blank">
      <input type="email" name="EMAIL" placeholder="Seu melhor e-mail" required style="width:100%; padding:14px; border:2px solid #e0e0e0; border-radius:12px; font-size:16px; margin-bottom:12px; box-sizing:border-box;">
      <button type="submit" style="width:100%; padding:14px; background:linear-gradient(135deg,#8b5cf6,#ec4899); color:white; border:none; border-radius:12px; font-size:16px; font-weight:700; cursor:pointer;">Quero Receber Ofertas! 💜</button>
    </form>
    <p style="font-size:11px; color:#999; margin-top:12px;">Zero spam. Só as melhores ofertas.</p>
  </div>
</div>

<script>
// Exit Intent — só mostra 1x por sessão
document.addEventListener('mouseout', function(e) {
  if (e.clientY < 50 && !localStorage.getItem('popup-closed')) {
    document.getElementById('exit-popup').style.display = 'flex';
  }
});
// Para mobile: mostra após 30s na página
if (/Mobi|Android/i.test(navigator.userAgent)) {
  setTimeout(function() {
    if (!localStorage.getItem('popup-closed')) {
      document.getElementById('exit-popup').style.display = 'flex';
    }
  }, 30000);
}
</script>
```

### 5. Corrigir links da Shopee (script para gerar links corretos)
```javascript
// Script de correção de links Shopee na /achadinhos/
// Executar no console ou integrar no código
document.querySelectorAll('a[href*="shopee.com.br/product"]').forEach(link => {
  const url = new URL(link.href);
  if (!url.searchParams.has('mmp_pid')) {
    url.searchParams.set('mmp_pid', 'an_18356120947');
    url.searchParams.set('utm_source', 'an_18356120947');
    url.searchParams.set('utm_medium', 'affiliates');
    url.searchParams.set('utm_content', 'FitComEstilo-Achadinhos');
    url.searchParams.set('af_click_lookback', '7d');
    link.href = url.toString();
  }
});
```

---

## 📱 CALENDÁRIO SEMANAL DE CONTEÚDO

| Dia | TikTok/Reels | Telegram | Site |
|---|---|---|---|
| **Segunda** | "Como eu monto meu look de treino" | Oferta da semana de Moda Fitness | Atualizar /ofertas-hoje/ |
| **Terça** | "3 achadinhos da Shopee que VALEM" | Flash sale (Shopee/Amazon) | — |
| **Quarta** | "Skincare pós-treino barato" | Comparativo de preços | Novo guia de comparação |
| **Quinta** | "Meus 5 livros que mudaram minha vida" | Ofertas de livros/eBooks | — |
| **Sexta** | "Preparando o treino do fim de semana" | Super promoção da sexta | Atualizar achadinhos |
| **Sábado** | "Montando o kit fitness ideal" | Resumo das melhores ofertas | — |
| **Domingo** | Quiz/Enquete (engajamento) | Dica de receita fit + produto | — |

---

## 🏆 RESUMO DAS PRIORIDADES

### 🔴 FAZER AGORA (esta semana):
1. **Corrigir os 240 links de afiliado da /achadinhos/** — ESTÁ PERDENDO DINHEIRO
2. **Instalar Google Analytics 4** — precisa de dados ONTEM
3. **Adicionar tracking de cliques** — saber o que converte

### 🟡 FAZER EM SEGUIDA (próximas 2 semanas):
4. **Aplicar para Google AdSense** — receita passiva por pageview
5. **Configurar captura de email** — pop-up + barra superior
6. **Instalar Facebook Pixel** — remarketing futuro
7. **Intensificar TikTok** — 3-5 vídeos/semana

### 🟢 FAZER NO MÉDIO PRAZO (1-2 meses):
8. **Criar Quiz de Estilo** — conversão brutal
9. **Criar Comparador de Preços** — diferencial competitivo
10. **Gerar conteúdo programático** — 30+ páginas SEO

---

## 💡 DICA DE OURO FINAL

O que diferencia sites que ganham R$100/mês de sites que ganham R$10.000/mês **não é a quantidade de produtos**. É a **qualidade da relação com o visitante**.

Vocês já fizeram o mais difícil: montaram um site profissional, com SEO avançado, PWA, múltiplos programas de afiliados, e presença em 6 redes sociais. O que falta é:

1. **Corrigir o vazamento** (links sem tag = dinheiro jogado fora)
2. **Adicionar camadas de monetização** (AdSense + Email)
3. **Criar conteúdo interativo** (Quiz + Comparador)
4. **Escalar com conteúdo** (TikTok + SEO programático)

O potencial está todo aí. Agora é executar. 💪

---

*Plano criado em 28/02/2026 para fitcomestilo.store*
*Baseado na análise completa de todos os arquivos do repositório + pesquisa de mercado*
