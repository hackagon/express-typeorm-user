import "reflect-metadata";
import * as express from "express";
import { createConnection } from "typeorm";
import userRouter from "./controllers/user";
import datasource from './config/orm';

createConnection(datasource as any)
    .then(async conn => {

        const app = express();
        app.use(express.json());

        app.use("/api", userRouter);

        const port = 5000;

        app.listen(port, () => {
            console.log(`App running on port ${port}`);
        });
    })
