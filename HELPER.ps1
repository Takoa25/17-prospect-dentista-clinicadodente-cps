# ==================================================================================
# SCRIPT HELPER - ATHLO TEMPLATE
# ==================================================================================
# Este arquivo contém comandos úteis para trabalhar com o template

# DESENVOLVIMENTO
# ==================================================================================

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# ==================================================================================
# MANUTENÇÃO
# ==================================================================================

# Limpar node_modules e reinstalar
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install

# Atualizar dependências (cuidado!)
npm update

# Verificar dependências desatualizadas
npm outdated

# ==================================================================================
# IMAGENS
# ==================================================================================

# Listar arquivos em public/images
Get-ChildItem -Path public/images -File

# Contar imagens
(Get-ChildItem -Path public/images -File).Count

# ==================================================================================
# GIT (se usar controle de versão)
# ==================================================================================

# Inicializar repositório
git init

# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "feat: initial commit - Athlo template white-label"

# Adicionar remote (substitua pela sua URL)
# git remote add origin https://github.com/seu-usuario/seu-repo.git
# git push -u origin main

# ==================================================================================
# DEPLOY NETLIFY
# ==================================================================================

# 1. Criar arquivo _redirects em public/
# New-Item -Path public/_redirects -ItemType File -Value "/*    /index.html   200"

# 2. Build
# npm run build

# 3. Arraste a pasta dist/ para netlify.com/drop

# ==================================================================================
# TROUBLESHOOTING
# ==================================================================================

# Se o dev server não iniciar, tente:
# netstat -ano | findstr :5173
# (Se a porta 5173 estiver em uso, mate o processo ou mude a porta no vite.config.ts)

# Limpar cache do Vite
Remove-Item -Recurse -Force node_modules/.vite

# ==================================================================================
# CUSTOMIZAÇÃO RÁPIDA
# ==================================================================================

# Arquivos principais para editar:
# - src/Content.ts (TUDO!)
# - public/images/ (Imagens)
# - src/index.css (cores hardcoded, linhas 10-16)

# Após editar Content.ts, o site atualiza automaticamente (Hot Module Reload)

# ==================================================================================
# FIM DO HELPER
# ==================================================================================
