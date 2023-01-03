*Observação*
- Projeto completamente dockerizado!

**Apesentação** 

Esta aplicação é uma carteira financeira que permite a transferências entre os
usuários da plataforma.

A duração deste projeto foi de aproximadamente 20 dias.

Funcionalidades: Esta é uma plataforma financeira que possibilita o cadastro de
usuário, com senha criptografada. Para criptografar a senha utilizei uma lib
chamada bcrypt. Ela é utilizada basicamente em duas partes da aplicação no back:
no cadastro e no login. Quando o usuário realiza o cadastro no front, esse cadastro
é enviado para o back-end, no controller, onde fica a regra de negócio, a senha é
manipulada e transformada em um hash, que representa a senha do usuário. Após
isso, é enviado esse hash para o banco de dados e não a senha colocada no front.
Essa técnica é utilizada para dar maior segurança aos dados do usuário, uma vez
que se o banco de dados da aplicação sofrer algum ataque, a senha “real” fica
protegida. Já na parte de login, quando o usuário acessa a aplicação ele envia o
nome de usuário(que no caso desse projeto o nome do usuário é único) e a senha.
Após isso, a API recolhe no banco de dados o nome do usuário (que é uma
identificação única) e a senha(hash) que acompanha esse nome. Dessa maneira, a
biblioteca Bcrypt compara as duas senhas(o hash do banco de dados e a senha que
o usuário digitou) e identifica se elas se correspondem.
Além do login e do cadastro de usuário, esta aplicação apresenta mais duas
páginas, uma da carteira do usuário, que mostra o nome e o saldo do cliente
(começa com R$1.000,00), além de um botão de logout e um link para realizar a
transferência para outros usuários. Já a última página é a de transferência, em que
permite o cliente transferir para outros usuários cadastrados, sendo que para enviar
é necessário que a senha seja validada. Por fim, a aplicação também permite a
troca de tema que persiste no local storage.

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
