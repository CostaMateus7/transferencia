const TransactionsRepository =require('../Repositories/TransactionsRepository')
const bcrypt = require('bcryptjs')

class TransactionsController{
  //Exibir Transações
  async index(req, res){
    const findTransactions = await TransactionsRepository.findAll()
    return(
      res.status(200).json(findTransactions)
    )

  }
  async show(req, res){
  
    const {account_id} = req.params
    
    if(!account_id){
      return res.status(400).json('Usuário não encontrado!')
      
    }
    const allTransactions = await TransactionsRepository.findByTransactions(account_id)

    if(!allTransactions){
      return res.status(200).json('Usuário ainda não possuí transações!')
    }

    return res.status(200).json(allTransactions)
    



  }
  //Debited --> Quem envia
  //Credited --> Quem recebe
  async store(req, res){
    const {
      userNameDebited, userNameCredited, money, password
    } = req.body

    const userExists = await TransactionsRepository.findByUsername(userNameCredited)

    if(!userExists){
      return res.status(400).json('Usuário não existe!')
    }
    if(!(await bcrypt.compare(JSON.stringify(password), userExists.password))){
      return res.status(400).json('Senha incorreta!')
    }
    if(userNameCredited === userNameDebited){
      return res.status(400).json("O usuário não pode depositar para sí mesmo!")
    }
    if(!userNameCredited){
      return res.status(400).json("Digite o seu nome do beneficiário!")
    }
    if(!money){
      return res.status(400).json("Digite o valor!")
      }


    const userDataDeb = await TransactionsRepository.findByUsername(userNameDebited)
    const userDataCred = await TransactionsRepository.findByUsername(userNameCredited)
    if(!(userDataCred.account_id) || !(userDataCred.account_id)){
      return res.status(400).json("Usuário inválido!")
    }


    const balanceDebited = await TransactionsRepository.findByBalance(userDataDeb.account_id)
    const balanceCredited =  await TransactionsRepository.findByBalance(userDataCred.account_id)

    if(!balanceCredited || !balanceCredited){
      return res.status(400).json("Usuário não encontrado")
    }


    const resultDebited = balanceDebited - money
      if(resultDebited < 0){
        return res.status(400).json('Saldo insuficiente!')
      }
    const resultCredited = parseFloat(balanceCredited) + parseFloat(money)


    const insertBalanceCredited = await TransactionsRepository.handleAccount(userDataCred.account_id, resultCredited)
    const insertBalanceDebited = await TransactionsRepository.handleAccount(userDataDeb.account_id, resultDebited)

    const day = TransactionsRepository.crateDate() 
    const account_credited = userDataCred.account_id
    const account_debited = userDataDeb.account_id
    const newTransaction = await TransactionsRepository.createTransaction({account_debited, account_credited, money, day})

      //VERIFICAS O HISTÓRICO DE TRANSAÇÕES
    return res.status(200).json(insertBalanceDebited.balance)
  }

}


module.exports = new TransactionsController();
