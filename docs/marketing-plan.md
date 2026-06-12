# Plano de Marketing Digital — Aquino Home Solutions

> Atualizado: junho/2026 · Orçamento de mídia: **$350/semana (~$1.500/mês)** · Objetivo: **ligações de orçamento**

---

## 0. Pré-requisito crítico: domínio próprio

O site roda hoje em `aquino-home-solution-psi.vercel.app`. **Antes de ligar as campanhas**, comprar um domínio (ex.: `aquinohomesolutions.com`, ~$12/ano) e apontar para o Vercel.

Por quê: anúncios com URL `.vercel.app` passam menos confiança (CTR menor), o Quality Score sofre (CPC mais caro), e todo o SEO construído fica "preso" num domínio que não é seu.

---

## 1. SEO Local

### Já implementado no site
- ✅ 31 landing pages de cidade (`/service-areas/[cidade]`) com conteúdo único, vídeo, fotos, formulário e schema `GeneralContractor` + `areaServed`
- ✅ 9 páginas de serviço com galerias e vídeos
- ✅ Sitemap.xml (50 URLs), robots.txt, meta titles/descriptions únicos
- ✅ Linkagem interna: menu → cidades, rodapé → cidades tier A, páginas de cidade → cidades vizinhas (hub-and-spoke)
- ✅ Schema LocalBusiness no layout global

### Próximas ações (por prioridade)

| # | Ação | Ferramenta | Quem |
|---|------|-----------|------|
| 1 | Comprar domínio e configurar no Vercel | Registrador + Vercel | Luiz |
| 2 | Criar **Google Business Profile** (Lowell, MA) — o ativo nº 1 de SEO local; categoria "General Contractor"; fotos reais da equipe/obras; telefone (603) 408-4073 | business.google.com | Willy/Aquino (verificação postal) |
| 3 | Cadastrar no **Google Search Console**, enviar sitemap | search.google.com/search-console | Luiz |
| 4 | Pedir avaliações Google após cada obra (link direto do GBP via WhatsApp/SMS) | GBP | Aquino |
| 5 | Citações locais com NAP idêntico (nome/endereço/telefone): Yelp, Angi, HomeAdvisor, Houzz, BBB, Nextdoor, Thumbtack | — | Luiz |
| 6 | Conteúdo: 1 post/mês respondendo dúvidas reais ("How much does a kitchen remodel cost in Massachusetts?", "Deck permits in Lowell") | Blog (fase 2) | Luiz |

### Palavras-chave alvo (orgânico)
- `general contractor [cidade] ma` — alvo principal das city pages
- `kitchen remodel [cidade]` / `bathroom remodel [cidade]` — tier A/B
- `deck builder [cidade]`, `interior painting [cidade]`, `plumber [cidade]`, `hvac [cidade]`
- Cauda longa: `plaster repair massachusetts`, `luxury vinyl plank installation near me`

---

## 2. Analytics & Rastreamento (GA4 + GTM + Google Ads)

### Arquitetura
```
Site (dataLayer já implementado)
  └─ GTM (container web)
       ├─ Tag GA4 Config ──────────→ GA4 (relatórios)
       ├─ Tags GA4 Event (4 eventos)
       └─ Tags Google Ads Conversion ─→ Google Ads (otimização de lance)
```

### Eventos já disparados pelo site (dataLayer)
| Evento | Quando dispara | Tratar como conversão? |
|--------|----------------|------------------------|
| `click_call` | Clique em qualquer telefone (header, hero, sticky bar, cards) | ✅ **Conversão principal** |
| `click_whatsapp` | Clique no WhatsApp da sticky bar | ✅ Conversão |
| `submit_quote_form` | Formulário de orçamento enviado com sucesso | ✅ **Conversão principal** |
| `upload_photo` | Cliente anexa fotos no formulário | Sinal de qualidade (não conversão) |

### Passo a passo de configuração (1x, ~1h)
1. Criar conta **GA4** → propriedade "Aquino Home Solutions" → anotar Measurement ID (`G-XXXX`)
2. Criar conta **GTM** → container web → anotar ID (`GTM-XXXX`)
3. No Vercel: `NEXT_PUBLIC_GTM_ID=GTM-XXXX` (produção/preview) + redeploy — o site já injeta o GTM automaticamente
4. No GTM:
   - Tag *Google Analytics: GA4 Configuration* com o `G-XXXX` (trigger: All Pages)
   - 4 tags *GA4 Event* — uma por evento acima (trigger: Custom Event com o mesmo nome)
5. No GA4: marcar `click_call`, `submit_quote_form` e `click_whatsapp` como **key events** (conversões)
6. Criar conta **Google Ads** → vincular ao GA4 → **importar as 3 conversões**
7. No Google Ads, ativar também **conversões de chamada**: 
   - *Calls from ads* (número de encaminhamento do Google nos anúncios) — duração mínima 30s
   - *Calls to a phone number on your website* (snippet via GTM no número do site)
8. **UTMs**: todo link pago com `utm_source=google&utm_medium=cpc&utm_campaign={nome}` (auto-tagging do Google Ads já cobre; manter gclid ativo)

### O que olhar toda semana
- Custo por conversão (meta: **$40–80 por lead**) · Ligações ≥30s · Taxa de conversão das city pages vs páginas de serviço · Termos de pesquisa que geraram gasto sem conversão → negativar

---

## 3. Google Ads — Estrutura da Campanha ($350/semana)

### Princípios
- **Foco: ligações.** Anúncio → ligar direto, ou landing page → botão de ligar/formulário
- Começar concentrado (poucas campanhas, orçamento denso) e expandir com dados
- CPCs do setor em MA: $8–20 (remodel), $5–12 (serviços) → expectativa: **15–30 leads/mês** no início

### Estrutura inicial (fase 1 — primeiras 4–6 semanas)

```
Conta Google Ads
├── C1 · Search — Kitchen & Bath Remodel ........... $150/sem
│   ├── AdGroup: kitchen remodel  → LP /services/kitchen-bath-remodel
│   ├── AdGroup: bathroom remodel → LP /services/kitchen-bath-remodel
│   └── Geo: cidades Tier A + B (ajuste de lance +20% no Tier A)
├── C2 · Search — Core Services ..................... $120/sem
│   ├── AdGroup: deck builder     → LP /services/decks
│   ├── AdGroup: interior/exterior painting → LP /services/painting
│   ├── AdGroup: plumber / water heater → LP /services/plumbing
│   ├── AdGroup: hvac / mini split → LP /services/hvac
│   └── Geo: raio 35 milhas de Lowell (todas as 31 cidades)
└── C3 · Call Ads (só ligação, mobile) .............. $80/sem
    ├── "General Contractor — Free Estimate — Call Now"
    └── Veiculação APENAS no horário de atendimento (Seg–Sex 7–19h, Sáb 8–17h)
```

### Palavras-chave (correspondência de frase + exata)
- C1: "kitchen remodeling [city]", "bathroom remodel near me", "kitchen renovation contractor", "bath remodel cost"
- C2: "deck builder", "deck contractor", "house painters near me", "interior painting company", "water heater installation", "plumber near me", "mini split installation", "hvac contractor"
- C3: "contractor near me", "general contractor", "home remodeling company"

### Negativas (lista inicial — aplicar à conta toda)
`jobs, hiring, salary, diy, how to, course, school, free [exceto free estimate], cheap, apartments for rent, lowes, home depot, youtube, plans, software`

### Assets (extensões) — obrigatórios em todas as campanhas
- **Call asset** com (603) 408-4073 (encaminhamento Google ATIVO = rastreia ligação)
- Sitelinks: Kitchen & Bath · Decks · Painting · Free Estimate
- Callouts: Licensed & Insured · Free Estimates · 15+ Years Experience · Response in 1 Hour
- Structured snippet (Services): Remodeling, Decks, Painting, Flooring, Plumbing, HVAC
- Location asset (vincular ao Google Business Profile)
- Imagens: usar as fotos profissionais do site

### Copy dos anúncios (RSA — exemplo C1)
- H: "Kitchen Remodeling in {LOCATION(City)}" · "Licensed & Insured Contractor" · "Free In-Home Estimate" · "From Demo to Final Walkthrough" · "15+ Years Serving Greater Lowell"
- D: "One team for plumbing, tile, cabinets & paint. Clean job sites, clear schedules. Call now for a free estimate." 
- URL final: página do serviço · Display path: /kitchen-remodel

### Lances e aprendizado
1. **Semanas 1–3**: *Maximize Clicks* com teto de CPC ($12 C1, $8 C2) — coletar dados
2. **Após ~30 conversões**: migrar para *Maximize Conversions*; depois tCPA (~$60)
3. Não mexer no orçamento mais de 20% por vez; esperar 3–5 dias entre mudanças

### Rotina semanal (30 min)
1. Relatório de termos de pesquisa → adicionar negativas
2. Pausar keywords com >$50 gastos e 0 conversões
3. Conferir % de ligações atendidas (lead perdido = dinheiro perdido)
4. Comparar CPA por cidade → realocar ajuste de lance
5. Conferir pacing: ~$50/dia

### Fase 2 (após 6 semanas com dados)
- Campanha de **remarketing** display/YouTube (usar os vídeos do site) — $30–50/sem
- **Performance Max** para leads locais com os assets de vídeo/foto
- Expandir city pages como LP direta dos anúncios (Tier A: anúncio "Contractor in Weston" → /service-areas/weston)
- Avaliar **Local Services Ads (Google Guaranteed)** — paga por lead, excelente para contractor; requer verificação de licença/seguro

---

## 4. Checklist de lançamento

- [ ] Comprar domínio e apontar no Vercel
- [ ] Google Business Profile criado e verificado
- [ ] GA4 + GTM criados, `NEXT_PUBLIC_GTM_ID` no Vercel, eventos testados (Tag Assistant)
- [ ] Google Ads criado, conversões importadas + conversões de chamada ativas
- [ ] Search Console com sitemap enviado
- [ ] Campanhas C1/C2/C3 montadas com assets completos
- [ ] Telefone (603) 408-4073 com atendimento garantido no horário dos anúncios
- [ ] Primeira semana: revisar termos de pesquisa em D+3 e D+7

---

## IDs das contas (preenchido conforme criação)

| Conta | ID | Criado em |
|---|---|---|
| GA4 (propriedade Aquino Website) | `G-FLLFY02F4Y` — ✅ tag no ar, 3 key events (click_call, submit_quote_form, click_email), retenção 14 meses, vinculado ao Search Console | 2026-06-12 |
| GTM (container web) | `GTM-KJLK63NS` — criado, dormente (ativar via NEXT_PUBLIC_GTM_ID na fase das tags do Ads; cuidado com dupla contagem com o gtag) | 2026-06-12 |
| Google Ads | `114-065-0649` — conta criada, cartao cadastrado | 2026-06-12 |
| Search Console | ✅ verificado (prefixo https://www.aquinosolutions.com) | 2026-06-12 |
