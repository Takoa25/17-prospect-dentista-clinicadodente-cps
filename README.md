# SB Odonto - Website Institucional e Landing Page

Template moderno, elegante e de alta performance para clínicas odontológicas, com arquitetura white-label totalmente configurável via `Content.ts`.

## 🚀 Início Rápido

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📁 Estrutura do Projeto

```
/
├── src/
│   ├── components/          
│   │   ├── PrivacyPolicy.tsx   # Nova Página
│   │   ├── TermsOfUse.tsx      # Nova Página
│   │   ├── CookieConsent.tsx   # Banner LGPD
│   │   └── ... (Hero, About, Team)
│   ├── Content.ts           # ⭐ CONFIGURAÇÃO PRINCIPAL
│   ├── types.ts            
│   ├── index.css           
│   └── MainPage.tsx        
├── public/
│   └── images/             # Imagens Otimizadas (WebP)
├── App.tsx                 # Roteamento SPA
├── main.tsx
└── index.html
```

## ⚙️ Configuração (White-Label)

### 1. Editar `src/Content.ts`

Este é o **único arquivo** que você precisa editar para personalizar completamente o site:

```typescript
export const content: ContentConfig = {
  // Cores do Tema (Injetadas via CSS Variables)
  colors: {
    primary: '#0ea5e9',      // Cor principal (ex: Azul)
    primaryDark: '#0284c7',  // Hover e variantes escuras
    // ...
  },
  
  // Informações da clínica
  infos: {
    name: "SB Odonto",
    phone: "(19) 3266-2078",
    whatsapp: "5519998705599",
    // ...
  },
  
  // Imagens e Seções
  // Basta alterar os caminhos ou textos nas seções desejadas (hero, about, team, etc.)
}
```

### 2. Central de Imagens (`public/images/`)

O projeto utiliza imagens em formato **WebP** para máxima performance. Recomendamos manter os seguintes nomes e dimensões:

- `hero-desktop.webp` (1920x1080) / `hero-mobile.webp` (1080x1920)
- `about.webp` - Foto principal da clínica/doutores (800x1000)
- `service1.webp` até `service5.webp` - Cards de especialidades (800x600)
- `team1.webp`, `team2.webp` - Fotos da equipe (800x1066)
- `testimonial1.webp` até `testimonial5.webp` - Avatares (300x300)
- `before_after1.webp` até `before_after8.webp` - Casos de sucesso (826x368)

### 3. Sincronização de Cores

Edite `src/index.css` (linhas 10-16) para coincidir com a cor `primary` definida no `Content.ts`:

```css
:root {
  --color-primary: #0ea5e9;  /* Mesma cor do Content.ts */
  --color-primary-dark: #0284c7;
}
```

## 🎨 Funcionalidades do Template

- **Arquitetura SST**: Single Source of Truth via `Content.ts`.
- **Animações Premium**: Framer Motion e ScrollReveal integrados.
- **SEO Otimizado**: Meta tags dinâmicas e JSON-LD p/ busca local.
- **Scroll Suave**: Integração com Lenis Scroll para experiência luxuosa.
- **Bento Grid & Stacking Cards**: Layouts modernos para serviços e diferenciais.

## 🛠️ Stack Tecnológica

- **React 18** + **TypeScript**
- **Vite** (build tool ultra-rápida)
- **Tailwind CSS** (estilização utilitária)
- **Framer Motion** (animações de interface)
- **Lucide React** (biblioteca de ícones leves)
- **React Helmet Async** (SEO dinâmico)

## 📱 Responsividade & Performance

- ✅ 100% Mobile-First
- ✅ Otimização de imagens WebP
- ✅ Zero CLS (Cumulative Layout Shift)
- ✅ Score Lighthouse focado em SEO e Acessibilidade

## 🚢 Deploy (Netlify)

1. Build command: `npm run build`
2. Publish directory: `dist`
3. O projeto já inclui o `netlify.toml` com headers de segurança (HSTS, CSP, XSS protection).

## 📄 Licença

Desenvolvido pela **TAKOA Digital** — Consultoria e Desenvolvimento Web.

---

**Dúvidas?** Entre em contato com a equipe técnica da TAKOA.
