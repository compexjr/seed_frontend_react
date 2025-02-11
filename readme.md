# Protótipo de Aplicação Web Front-end modelo usando ReactJS

Este protótipo é uma aplicação web front-end baseada no framework [ReactJS](https://en.wikipedia.org/wiki/React_(software)), que faz o gerenciamento de usuários, upload de arquivos e dashboard integrado a aplicação web back-end [seed_backend](https://github.com/compexjr/seed_backend).

## Índice

1. [Casos de Uso](#casos-de-uso)
2. [Arquitetura Base](#arquitetura-base)
3. [Como usar](#como-usar)
4. [Features Básicas](#features-básicas)
5. [Aspectos Técnicos](#aspectos-técnicos)
6. [Quadro de atividades Kanban](#quadro-de-atividades-kanban)
7. [Regras de Negócio](#regras-de-negócio)
8. [Testes da aplicação front-end](#testes-da-aplicação-front-end)
9. [Referências](#referências)

## Casos de Uso

* [Use Cases](https://github.com/compexjr/seed_frontend_react/blob/master/docs/imagens/usecases.png)
* [Source](https://github.com/compexjr/seed_frontend_react/blob/master/docs/usecases.puml)

## Arquitetura Base

* [Arquitetura](https://github.com/compexjr/seed_frontend_react/blob/master/docs/imagens/arquitetura.png)
* [Source](https://github.com/compexjr/seed_frontend_react/blob/master/docs/arquitetura.puml)

## Como usar

1. **Você precisa ter o [NodeJS](https://en.wikipedia.org/wiki/Node.js) instalado na sua máquina para fazer o setup da aplicação.**
   - Instale o Node.js na sua máquina no site oficial do [Node.js](https://nodejs.org/en).
   - No Windows/Linux/MacOS instale o pnpm:
     ```bash
     npm install pnpm -g
     ```
   - Clone a aplicação.
     ```bash
     git clone https://github.com/compexjr/seed_frontend_react
     ```
   - Vá para o diretório do projeto:
     ```bash
     cd seed_frontend_react
     ```
   - Agora instale as depedências do projeto
     ```bash
     pnpm install
     ```

2. **Crie o arquivo `.env` na raiz do projeto:**
   - Crie um arquivo chamado `.env` no diretório raiz do seu projeto e adicione as variáveis necessárias, Exemplo:
     ```
     VITE_DATABASE_URL=""
     ```

3. **Execute a aplicação:**
   - No terminal da pasta raiz, no Windows/Linux/MacOS:
     ```bash
     pnpm dev
     ```
Observação:
- Antes de executar a aplicação front-end, procure deixar a [aplicação back-end](https://github.com/compexjr/seed_backend) executando para permitir os testes fim a fim (front-end->back-end, back-end->front-end).

## Features Básicas

1. F1. Login
2. F2. Logout
3. F3. Registro de novo usuário
4. F4. Recuperar senha
5. F5. Gerenciar Dashboard
6. F6. Gerenciar Profile do usuário
7. F7. Gerenciar Tarefas do usuário
8. F8. Gerenciar Imagens do usuário
9. F9. Gerenciar Relatórios de Tarefas do usuário
10. F10. Gerenciar Gráficos das Tarefas

## Aspectos Técnicos

- Uso do React para criar componentes dinâmicos para criar aplicações HTML dinâmicas assíncronas.
- Uso do [TypeScript](https://en.wikipedia.org/wiki/TypeScript) para adicionar tipagem estática ao JavaScript, o que ajuda a prevenir erros comuns e torna o código mais robusto e confiável.
- Mais detalhes sobre a stack escolhida em [link](https://github.com/compexjr/seed_frontend_react/blob/master/stack.md)

## Quadro de atividades Kanban

Este projeto é dividido em diferentes tarefas conforme um fluxo de trabalho estruturado. Abaixo estão as tarefas salvas da equipe back-end com os passos para adicionar novos endpoints:

Quadro de Tarefas (Back-end) disponível em [link](https://github.com/orgs/compexjr/projects/1)

Quadro de Tarefas (Front-end) disponível em [link](https://github.com/orgs/compexjr/projects/5)

## Regras de Negócio

- **Autenticação:** Login e logout de usuários com geração e validação de tokens [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token).
- **CRUD de Usuários:** Criação, leitura, atualização e exclusão de usuários.
- **Recuperação de Senha:** Processo seguro para redefinição de senha.
- **Perfil de Usuário:** Permite aos usuários editar suas informações pessoais e gerenciar suas fotos de perfil.
- **Arquivos do Usuário:** Upload e gestão de imagens dos usuários.
- **Dashboard:** Exibição de informações gerais sobre o sistema.
- **Token:** Sistema de geração e validação de tokens JWT para acesso seguro aos endpoints.
- **Gestão de Tarefas do Usuário:** Cada usuário pode criar e gerenciar sua lista de tarefas, permitindo uma organização de atividades de forma individualizada, alterando o status da tarefa entre "Em progresso" ou "Feita". Por padrão ela é criada como "À fazer".

## Testes da aplicação front-end

Existem vários tipos de testes de software que podem ser aplicados durante o processo de desenvolvimento para garantir a qualidade do software. Logo abaixo seguem os tipos de testes que deverão ser feitos para garantir a qualidade da nossa aplicação.

### Testes Unitários

É realizado para verificar se as unidades individuais de código (geralmente funções, métodos ou classes) funcionam corretamente. O objetivo é testar cada unidade isoladamente para identificar possíveis erros lógicos ou funcionais. Geralmente, é executado pelos desenvolvedores.

```bash
pnpm test
```

### Testes E2E (End-to-End)

Os testes E2E (End-to-End) são realizados para verificar o funcionamento completo de um sistema, desde o início até o fim. O objetivo é simular o comportamento real do usuário, garantindo que todos os componentes do sistema (frontend, backend, banco de dados, etc.) funcionem corretamente em conjunto. Esses testes ajudam a identificar problemas de integração e a validar fluxos de trabalho críticos. Geralmente, são executados por desenvolvedores ou equipes de QA.

```bash
pnpm test:e2e
```

## Referências

* [Javascript](https://en.wikipedia.org/wiki/JavaScript)
* [Node](https://nodejs.org/en)
* [React](https://react.dev)
* [Typescript](https://www.typescriptlang.org/)
* [Vite](https://vite.dev/)
* [Shadcn/ui](https://ui.shadcn.com/)
* [JWT](https://jwt.io)
* [PlantUML](https://plantuml.com)
* [Editor PlantUML](https://plantuml-editor.kkeisuke.com)
