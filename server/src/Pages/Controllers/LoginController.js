const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const LoginRepository = require('../Repositories/LoginRepository');


class LoginController {
  // Exibir
  async index(req, res) {
    const users = await LoginRepository.findAll();
    return res.send(users);
  }

  // Criar
  async store(req, res) {
    const data = req.body;
    if(!(data.username)){
      return(
        res.status(400).json('Inserir nome!')
      )
    }
    if(!(data.password)){
      return(
        res.status(400).json('Inserir senha!')
      )
    }
    const userExists = await LoginRepository.findByUsername(data.username)
    if(userExists){
      return(res.status(400).json("Usuário já cadastrado com esse nome!"))
    }
    data.password = await bcrypt.hash(JSON.stringify(data.password), 8);
    const {
      username, password,
    } = data;

    if (!username) {
      return(
        res.status(400).json('Nome obrigatório!')
      )
    }
    if (!password) {
      return(
        res.status(400).json('Senha obrigatória!')
      )
    }
    const user = await LoginRepository.create({
      username, password
    })
    return res.status(200).json(`${username} cadastrado com sucesso!`)
    

  }

  // Verificar usuário
  async show(req, res) {
    const data = req.body;
    const userExists = await LoginRepository.findByUsername(data.username)
    if(!userExists){
      return(
        res.status(400).json('Usuário ou senha incorreta!')
      )
    }
    if(!(await bcrypt.compare(JSON.stringify(data.password), userExists.password))){
      return(
        res.status(400).json('Usuário ou senha incorreta!')
      )
    }
    const {username, balance, account_id} = await LoginRepository.findByAccount(data.username)
    const token = jwt.sign({id: userExists.id}, 'MAKSJDEN3945N23MN2MSOO123455DLOWMD', {expiresIn:'7d'})
    res.status(200).json({username, balance, account_id, token})

  }

  // Deletar
  async delete(req, res) {
    const data = req.body
    await LoginRepository.delete(data.username)
    res.status(204).json('Usuário deletado com sucesso')
  }
}

module.exports = new LoginController();
