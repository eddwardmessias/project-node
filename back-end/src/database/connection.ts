import knex from "knex";
import path from 'path';

const connetction = knex({
    client: 'sqlite3',
    connection: {
        //retorna o caminho do diretio do arquivo que tá direcionando ele(database)
        filename: path.resolve(__dirname,'database.sqlite')
    }
});


export default connetction;

// Migrations = Historico do banco de dados
//basta executar um comando
// create table points
// create table users