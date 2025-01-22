# Protótipo de Aplicação Web Front-end modelo usando ReactJS

Este protótipo é uma aplicação web front-end baseada no framework [ReactJS](https://en.wikipedia.org/wiki/React_(software)), que faz o gerenciamento de usuários, upload de arquivos e dashboard integrado a aplicação web back-end [seed_backend](https://github.com/compexjr/seed_backend).

## Casos de Uso

* [Use Cases](https://github.com/compexjr/seed_frontend_react/blob/master/docs/imagens/usecases.png)
* [Source](https://github.com/compexjr/seed_frontend_react/blob/master/docs/usecases.puml)

## Arquitetura Base

* [Arquitetura](https://github.com/compexjr/seed_frontend_react/blob/master/docs/imagens/arquitetura.png)
* [Source](https://github.com/compexjr/seed_frontend_react/blob/master/docs/arquitetura.puml)

## Como usar

1. **Você precisa ter o [NodeJS](https://en.wikipedia.org/wiki/Node.js) instalado na sua máquina (recomendo a versão 20) e instalar o pnpm.**
   - No Windows/Linux/MacOS instale o pnpm:
      ```bash
      npm install pnpm -v
      ```
   - Agora instale as depedências do projeto
     ```bash
     pnpm install
     ```

2. **Crie o arquivo `.env` na raiz do projeto:**
   - Crie um arquivo chamado `.env` no diretório raiz do seu projeto e adicione as variáveis necessárias, com valores padrão ou conforme orientação específica. Use o ".env.example" como exemplo. Exemplo:
     ```
     ENV_BASE_URL=
     ```

3. **Execute a aplicação:**
   - No terminal da pasta raiz, no Windows/Linux/MacOS:
     ```bash
     pnpm dev
     ```

## Funcionalidades

### F1. Login do usuário
- Autenticação de usuários com geração de token JWT.

### F2. Logout do usuário
- Invalidar tokens de autenticação, garantindo a segurança do acesso.

### F3. Registro de novo usuário
- Endpoint para registrar novos usuários no sistema.

### F4. Recuperar senha do usuário/ Alterar senha do usuário
- Recuperação de senha através de email, com redefinição segura ou alteração de senha de um usuário devidamente autenticado.

### F5. Perfil do usuário
- Edição de informações do perfil do usuário, incluindo a alteração de fotos de perfil.

### F6. Arquivos (imagens, áudios e vídeos) do usuário
- Upload, visualização e gerenciamento de arquivos de mídia (imagens) dos usuários.

### F7. Lista de Tarefas do Usuário
- Gerenciamento de uma lista de tarefas individuais para cada usuário.
- Adicionar novas tarefas, com campos para descrição e prazo.
- Atualizar status de cada tarefa como "Pendente", "Em Progresso" ou "Concluída".
- Visualização e organização das tarefas em um formato de quadro, semelhante ao "board" de cards do GitHub, permitindo fácil atualização de status e organização das atividades.

## Quadro de atividades Kanban

Este projeto é dividido em diferentes tarefas conforme um fluxo de trabalho estruturado. Abaixo estão as tarefas salvas da equipe back-end com os passos para adicionar novos endpoints:

Quadro de Tarefas (Back-end) disponível em [link](https://github.com/orgs/compexjr/projects/1)

Quado de Tarefas (Front-end) disponível em [link](https://github.com/orgs/compexjr/projects/5)

## Regras de Negócio

- **Autenticação:** Login e logout de usuários com geração e validação de tokens [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token).
- **CRUD de Usuários:** Criação, leitura, atualização e exclusão de usuários.
- **Recuperação de Senha:** Processo seguro para redefinição de senha.
- **Perfil de Usuário:** Permite aos usuários editar suas informações pessoais e gerenciar suas fotos de perfil.
- **Arquivos do Usuário:** Upload e gestão de imagens dos usuários.
- **Dashboard:** Endpoint para recuperação de informações gerais sobre o sistema.
- **Token:** Sistema de geração e validação de tokens JWT para acesso seguro aos endpoints.
- **Gestão de Tarefas do Usuário:** Cada usuário pode criar e gerenciar sua lista de tarefas, permitindo uma organização de atividades de forma individualizada, alterando o status da tarefa entre "Em progresso" ou "Feita". Por padrão ela é criada como "À fazer".

## Passos para criar uma novo componente

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

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
* [JWT](https://jwt.io)
* [PlantUML](https://plantuml.com)
* [Editor PlantUML](https://plantuml-editor.kkeisuke.com)

