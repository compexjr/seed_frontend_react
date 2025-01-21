# Dashboard com ReactJS

Este projeto é uma dashboard feito com ReactJS, que faz o gerenciamento de usuários, upload de arquivos e dashboard.

## Como usar

1. **Crie e ative um ambiente virtual na sua IDE (VScode ou outra):**
   - No Windows:
      ```powershell
      python -m venv venv
      .\venv\Scripts\activate
      ```
   - No Linux/MacOS:
      ```bash
      python3 -m venv venv
      source venv/bin/activate
      ```

   ### Configuração do Ambiente

   **1.1 Caso não seja possível executar o script de ativação no Windows, execute este comando:**
   - No Windows:
      ```powershell
      Set-ExecutionPolicy RemoteSigned -Scope Process
      ```
      Esse comando permitirá a execução de scripts apenas no processo atual do VScode. Ao fechar o processo, a permissão voltará automaticamente para "Restricted".
      Caso queira manter padrão a execução de scripts, ao invés de "process" use "CurrentUser".

2. **Crie o arquivo `.env` na raiz do projeto:**
   - Crie um arquivo chamado `.env` no diretório raiz do seu projeto e adicione as variáveis necessárias, com valores padrão ou conforme orientação específica. Exemplo:
     ```
      db_name = sqlite:///./NomeDoSeuBanco.db
      API_KEY = SuaChaveSecreta
     ```
   
3. **Baixe os módulos do `requirements.txt`:**
   - No terminal do Windows:
      ```powershell
      pip install -r requirements.txt
      ```
   - No terminal do Linux/MacOS:
      ```bash
      pip install -r requirements.txt
      ```
4. **Baixe o módulos do `wkhtmltopdf` no Sistema Operacional:**
   - No terminal do Windows:
      ```powershell
      winget install --id wkhtmltopdf.wkhtmltopdf
      ```
   - No terminal do Linux/MacOS:
      ```bash
      sudo apt-get install wkhtmltopdf
      ```

5. **Execute a aplicação:**
   - No terminal da pasta raiz, no Windows:
     ```powershell
     uvicorn server:app --reload
     ```
   - No terminal da pasta raiz, no Linux/MacOS:
     ```bash
     uvicorn server:app --reload
     ```
6. **Execute a arquivo server.py para criação do banco**

7. **Acesse o Swagger da API**
   - Após iniciar o processo, um host local estará disponível para ser acessado pelo navegador. Use essa URL + `/docs` para acessar o Swagger.




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

Este projeto é dividido em diferentes tarefas conforme um fluxo de trabalho estruturado. Abaixo estão os passos para adicionar novos endpoints:

Disponível em [link](https://github.com/orgs/compexjr/projects/1)

### Passos para Criar um Novo Endpoint

1. **Definir o Modelo no SQLAlchemy**
   - Crie ou ajuste o modelo de dados da entidade que o novo endpoint irá manipular. No arquivo `models.py`, defina a classe que representa a tabela no banco de dados.

2. **Criar o Esquema no Pydantic**
   - Na pasta `schemas`, defina os esquemas de validação de dados de entrada e saída usando Pydantic.

3. **Implementar as Funções CRUD**
   - Na pasta `repositories`, crie um novo arquivo `.py` e adicione funções para manipulação de dados no banco, como criação, leitura, atualização e exclusão (CRUD).

4. **Criar as Rotas no FastAPI**
   - Na pasta `routes`, crie o arquivo `.py` com as funções de endpoint que processam as requisições HTTP (GET, POST, PUT, DELETE), utilizando as funções CRUD. Em seguida, referencie estas rotas no arquivo `main.py`.

## Regras de Negócio

- **Autenticação:** Login e logout de usuários com geração e validação de tokens JWT.
- **CRUD de Usuários:** Criação, leitura, atualização e exclusão de usuários.
- **Recuperação de Senha:** Processo seguro para redefinição de senha.
- **Perfil de Usuário:** Permite aos usuários editar suas informações pessoais e gerenciar suas fotos de perfil.
- **Arquivos do Usuário:** Upload e gestão de imagens dos usuários.
- **Dashboard:** Endpoint para recuperação de informações gerais sobre o sistema.
- **Token:** Sistema de geração e validação de tokens JWT para acesso seguro aos endpoints.
- **Gestão de Tarefas do Usuário:** Cada usuário pode criar e gerenciar sua lista de tarefas, permitindo uma organização de atividades de forma individualizada, alterando o status da tarefa entre "Em progresso" ou "Feita". Por padrão ela é criada como "À fazer".

## Testes da aplicação back-end

Existem vários tipos de testes de software que podem ser aplicados durante o processo de desenvolvimento para garantir a qualidade do software. Logo abaixo seguem os tipos de testes que deverão ser feitos para garantir a qualidade da nossa aplicação.

### Testes Unitários

É realizado para verificar se as unidades individuais de código (geralmente funções, métodos ou classes) funcionam corretamente. O objetivo é testar cada unidade isoladamente para identificar possíveis erros lógicos ou funcionais. Geralmente, é executado pelos desenvolvedores.

```bash
pnpm test
```
