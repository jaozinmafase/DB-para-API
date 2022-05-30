import mysql from 'mysql2/promise'

const con = await msql.createConnection({
		host:'procces.env.MYSQL_HOST',
		user:'procces.env.MYSQL_USER',
		password:'procces.env.MYSQL_PWD',
		database:'procces.env.MYSQL_DB'
})

export { con }