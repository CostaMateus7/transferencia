*Observação*
- Projeto completamente dockerizado!

**Apesentação** 

Essa é uma plataforma financeira que possibilita o cadastro e login do usuário, sendo que a autenticação é JWT e a senha é criptografada. Nela o você tem uma página de usuário única que mostra o saldo (começa com R$1.000,00), um botão de logout e um link para realizar transferência. E as transferências podem ser realizadas somente entre usuários cadastrados. Por fim, a aplicação também permite a troca de tema persistida.


**Link do vídeo de apresentação do projeto:**

https://drive.google.com/file/d/1_E_BBgNXihf_tRmEXlGefn81DTKvjjyn/view?usp=sharing


**Instruções para o funcionamento da aplicação**

**OBSERVAÇÕES**

- Para utilizar tais comandos é necessário que você tenha o Docker e o Docker Compose instalado em sua máquina;

- Antes de executar o comando verifique que está com as seguintes portas liberadas: 8080, 3000 e 5432;

- Verificar se está no diretório /transferencia antes de realizar o comando;

**Comandos** 

- Para baixar o repositório vá ao terminal e cole a seguinte instrução:

git clone https://github.com/CostaMateus7/transferencia.git


- Vá até o diretório /transferencia e digite o seguinte comando:


*Dispositivos em geral*

docker compose -f server/docker-compose.yaml up -d --build &&  docker compose -f client/docker-compose.yaml up -d

*Linux*

sudo docker compose -f server/docker-compose.yaml up -d --build && sudo  docker compose -f client/docker-compose.yaml up -d

- Confira se os containers estão ativos com o comando: 

docker ps 

- Vá ao navegador e acesse

http://localhost:3000 


**Conteúdos utilizados e estudados:** 

*FRONT:*

- ReactJs
- Organização de pastas
- JSX
- Components
- Yup
- React Router
- ContextAPI
- Persistência de dados (Local Storage)
- UseState
- UseNavigate
- UseEffect
- Styled components
- Map
- UseMemo
- UseTheme
- Props
- Axios
- Themes
- Responsividade

*Back:*

- NodeJs
- Postgres
- Docker
- Eslint
- EditorConfig
- Insomnia
- Yarn
- Cors
- Middlewares
- Autenticação JWT
- Criptografia Bcrypt
