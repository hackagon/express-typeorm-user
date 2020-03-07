import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { User } from '../entity/user';


export const getUsers = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);

    const users = await userRepository.find()
    res.status(200).json(users);
}

export const getUserById = (req: Request, res: Response) => {

}

export const createUser = (req: Request, res: Response) => {

}

export const replaceUserById = (req: Request, res: Response) => {

}

export const deleteUserById = (req: Request, res: Response) => {

}