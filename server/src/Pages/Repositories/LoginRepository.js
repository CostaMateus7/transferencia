const db = require('../../Database/index')


class LoginRepository{
  async findAll(){
    const row = await db.query('SELECT * FROM users')
    return(row)
  }
  async findByUsername(username) {
    const [row] = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    return row;
  }
  async findByAccount(username) {
    const [row] = await db.query(`
    SELECT u.*, a.balance
    FROM users AS u
    JOIN accounts AS a
    ON a.id = u.account_id
    WHERE u.username = $1
    `, [username]);
    return row;
  }


  async create({
    username, password,
  }) {
    const [account] = await db.query(`
    INSERT INTO accounts(balance)
    VALUES(1000)
    RETURNING id
    `
    )
    const value = account.id
    const [rowUsers] = await db.query(`
    INSERT INTO users(username, password, account_id)
    VALUES($1, $2, $3)
    RETURNING *
    `, [username, password, value]);
    return (account, rowUsers);
  }

  async delete(username) {
    const deleteOp = await db.query(`
      DELETE FROM users
      WHERE username = $1
    `, [username]);
    return deleteOp;
  }

}


module.exports = new LoginRepository();
