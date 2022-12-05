const db = require('../../Database/index')

class TransactionsRepository{
  //EXERCÍCIO DE HOJE: 
  //TABLE - User, Account, Transactions 
  //Username - USER
  //Balance - ACCOUNT DO USER
  //Data - TRANSACTIONS DO USER
  //Nome das pessoas que enviou e recebeu - DEB/CRED TRANSACTIONS
  //Valor - TRANSACTIONS
  async findAll(){
    const row = await db.query(`
    SELECT *
    FROM transactions
    `)
    return(row)
  }

  async findByTransactions(account_id){
    const row = await db.query(`
    SELECT t.*
    FROM transactions AS t
    WHERE t.debited_account_id = $1
    OR t.credited_account_id = $1
    `, [account_id])
    return row
  }

  async findByUsername(username) {
    const [row] = await db.query(`
    SELECT users.*
    FROM users
    WHERE username = $1
    `, [username]);
    return (row);
  }
  async findByAccount(username) {
    const [row] = await db.query(`
    SELECT u.*, a.balance,
    FROM users AS u
    JOIN accounts AS a
    ON a.id = u.account_id
    WHERE u.username = $1
    `, [username]);
    return row;
  }

  async findByBalance(account_id){
    const [row] = await db.query(`
    SELECT a.balance
    FROM accounts AS a
    WHERE id = $1
    `, [account_id]);
    return (row.balance);
 }
 crateDate(){
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear() ;
  const today = `${day}/${month}/${year}`
  return(today)
 }

  // Debited -> Quem envia
  //Credited -> moneyrecebe
  async createTransaction({
    account_id_debited, account_id_credited, money, day
  }) {
    const [account] = await db.query(`
    INSERT INTO transactions(debited_account_id, credited_account_id, value, created_at)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [account_id_debited, account_id_credited, money, day])
    return (account);
  }


  async handleAccount(account_id, money){
    const [account] = await db.query(`
    UPDATE accounts
    SET balance = $1
    WHERE id = $2
    RETURNING balance
    `, [money, account_id])
    return(account)

  }

  // async delete(username) {
  //   const deleteOp = await db.query(`
  //     DELETE FROM users
  //     WHERE username = $1
  //   `, [username]);
  //   return deleteOp;
  // }

}


module.exports = new TransactionsRepository();
