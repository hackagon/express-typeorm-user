import "reflect-metadata";
import * as express from "express";
import { createConnection } from "typeorm";
import userRouter from "./controllers/user";
// import * as datasource from "../ormconfig.json";
import { User } from "./entity/user";
import datasource from './config/orm';

createConnection(datasource as any)
    .then(async conn => {

        const userRepository = conn.getRepository(User);
        const users = await userRepository.find()


        const app = express();
        app.use(express.json());

        app.use("/api", userRouter);

        const port = 5000;

        app.listen(port, () => {
            console.log(`App running on port ${port}`);
        });
    })
