import util from 'util'
import SQL from 'sql-template-strings'

class MySQLORM {
  constructor(connection) {
    this.connection = connection
  }

  async executeQuery(query) {
    // Promisify the query method
    // We are binding to ensure the promisfied functions "this" value refers to "this.connection"
    const asyncQuery = util.promisify(
      this.connection.query.bind(this.connection)
    )
    return asyncQuery(query)
    // the above return value will be an unresolved promise.
    // https://github.com/mysqljs/mysql#error-handling
  }

  async selectAllBurgers() {
    const query = SQL`SELECT * FROM burgers`
    return this.executeQuery(query)
  }

  async insertBurger(NameOfBurger) {
    const query = SQL`INSERT INTO burgers (burger_name) VALUES (${NameOfBurger})`
    return this.executeQuery(query)
  }

  async eatBurger(id) {
    const query = SQL`UPDATE burgers SET devoured = 1 where id = ${id}`
    return this.executeQuery(query)
  }
}

export { MySQLORM }
