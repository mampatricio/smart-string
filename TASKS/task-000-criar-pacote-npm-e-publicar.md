# Task 000 — criar pacote NPM e publicar

Status: pending
Type: feat
Assignee: Marcos

## Description

Criar e publicar um pacote NPM, utilizando pnpm como gerenciador de pacotes, asdf para versionamento de ferramentas, e o fluxo de trabalho com taskin para gerenciamento de tarefas. O objetivo é reforçar o conhecimento completo do ciclo de vida de um pacote NPM, desde a configuração inicial do ambiente até a publicação e validação do pacote publicado.

Fique a vontade pra escolher o que seu projeto fará e o nome que ele terá.

## Tasks

- [ ] Criar estrutura inicial do projeto (pasta "o-nome-do-seu-projeto", inicializar git, configurar asdf com nodejs 24.9.0 e pnpm 10.23.0)
- [ ] Inicializar projeto node com pnpm e fazer commit inicial na branch main
- [ ] Criar branch develop e configurar scripts no package.json (test, format, lint, lint:fix, typecheck, build, dev)
- [ ] Adicionar dependência do taskin (https://github.com/sidartaveloso/taskin)
- [ ] Criar e iniciar tarefa no taskin (título: "setup inicial"), fazer commit no develop
- [ ] Ir para branch sugerida pelo taskin e implementar o código do pacote
- [ ] Implementar testes automatizados e garantir que passam
- [ ] Escrever README.md detalhado focado no desenvolvedor cliente (problema resolvido e como utilizar)
- [ ] Fazer commits semânticos e granulares durante o desenvolvimento
- [ ] Finalizar task no taskin e fazer merge para develop e main
- [ ] Enviar projeto para GitHub como repositório público
- [ ] Buildar e publicar pacote no NPM a partir da branch main
- [ ] Validar o pacote criando um novo projeto, importando-o e testando seu funcionamento
- [ ] Acionar Sidarta pelo Discord para revisão do trabalho

## Notes

Recursos necessários:
Conta no NPM (https://www.npmjs.com/)
Conta no GitHub
Token de autenticação do NPM configurado localmente

Pontos de atenção:
O nome do pacote no NPM deve ser único (verificar disponibilidade antes)
Configurar corretamente o package.json com campos: name, version, description, main, types, files, repository, keywords, license
Garantir que o .gitignore e .npmignore estejam corretos
Documentar no README: instalação, uso básico, exemplos de código (se aplicável)
Seguir versionamento semântico (semver)
Considerar adicionar badges no README (npm version, license, build status)

Comandos úteis:

# Login no NPM
```shell
npm login

# Publicar pacote
npm publish --access public

# Verificar conteúdo que será publicado
npm pack --dry-run
```

## Revision Notes

**Revisor:** Sidarta Veloso  
**Data:** 05 de dezembro de 2025

### Pontos Positivos

✅ **Estrutura do projeto:** Bem organizada com separação adequada de código fonte e configurações  
✅ **Configuração asdf:** Arquivo `.tool-versions` corretamente configurado com Node.js 24.9.0 e pnpm 10.23.0  
✅ **Package.json:** Todos os scripts essenciais estão presentes (test, format, lint, lint:fix, typecheck, build, dev)  
✅ **Dependências:** Taskin adicionado e todas as ferramentas de desenvolvimento necessárias instaladas  
✅ **TypeScript:** Configuração adequada com tsconfig.json e suporte a tipos  
✅ **Testes:** Implementados com Vitest e cobrindo funcionalidades principais  
✅ **Código funcional:** Funções utilitárias de string implementadas corretamente  
✅ **README:** Documentação clara, objetiva e focada no desenvolvedor cliente  
✅ **Commits semânticos:** Histórico de commits bem estruturado seguindo padrões convencionais  
✅ **Branches:** Estrutura com main e develop corretamente implementada  
✅ **Repositório público:** Projeto disponível no GitHub (mampatricio/smart-string)

### Pontos de Atenção

⚠️ **Arquivos gerados comitados:** A pasta `dist/` foi comitada no repositório (arquivos `dist/index.cjs` e `dist/index.d.cts` estão versionados). **Arquivos gerados automaticamente pelo processo de build não devem ser comitados no Git**. Eles devem ser:
   - Adicionados ao `.gitignore` para evitar versionamento
   - Gerados apenas no momento do build/publicação
   - Incluídos no pacote NPM através do campo `files` no `package.json` (que está correto)
   
   **Motivo:** Arquivos gerados causam conflitos desnecessários em merges, poluem o histórico do Git e podem ficar desatualizados se o código fonte mudar sem rebuild. O NPM cuidará de incluí-los no pacote publicado através do processo de build.

⚠️ **Gitignore incompleto:** O arquivo `.gitignore` contém apenas `node_modules`. Deveria incluir também:
   ```
   node_modules
   dist
   .DS_Store
   *.log
   coverage
   .env
   ```

⚠️ **Package.json:** Campos `description`, `keywords`, `author` e `repository` estão vazios ou ausentes. Estes campos são importantes para:
   - Melhorar a descoberta do pacote no NPM
   - Fornecer contexto sobre o projeto
   - Facilitar contribuições

⚠️ **Falta .npmignore:** Embora não seja obrigatório (o campo `files` já controla o que é publicado), seria bom ter um `.npmignore` explícito para maior clareza.

### Recomendações

1. **Remover pasta dist do Git:**
   ```bash
   git rm -r --cached dist
   echo "dist" >> .gitignore
   git add .gitignore
   git commit -m "chore: remove dist folder from git and update gitignore"
   ```

2. **Completar package.json** com informações faltantes

3. **Expandir .gitignore** com padrões comuns de arquivos/pastas a ignorar

### Conclusão

O projeto está muito bem estruturado e demonstra compreensão sólida do ciclo de vida de um pacote NPM. O principal ponto de melhoria é a remoção de arquivos gerados do controle de versão, uma boa prática essencial em projetos profissionais. Após esses ajustes, o pacote estará em excelente estado para publicação.
