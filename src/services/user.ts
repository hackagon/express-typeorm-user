import { getRepository, getConnectionManager } from 'typeorm';
import { Request, Response } from 'express';
import { User } from '../entity/user';


export const getUsers = async (req: Request, res: Response) => {
    const manager = getConnectionManager().get("mysql")
    const userRepository = manager.getRepository(User);

    const users = await userRepository.find()
    res.status(200).json(users);
}

export const getUserById = (req: Request, res: Response) => {

}

export const createUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const { fullName, job } = req.body;
    const user = await userRepository.create({ fullName, job })
    res.status(200).json(user);
}

export const replaceUserById = (req: Request, res: Response) => {

}

export const deleteUserById = (req: Request, res: Response) => {

}