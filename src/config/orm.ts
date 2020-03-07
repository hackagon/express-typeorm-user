import "reflect-metadata";
import { ConnectionOptions } from "typeorm";
import * as path from "path";

const entityPath = path.join(`${__dirname}/../entity/*{.ts,.js}`)
console.log("entityPath", entityPath)

const datasource: ConnectionOptions = {
    name: "mysql",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "hackagon",
    database: "typeorm_user",
    synchronize: true,
    entities: [entityPath],
}

export default datasource;