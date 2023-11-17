import { NextFunction, Request, Response } from "express";
import dataSource from "../database/dataSource";
import { Merchant } from "../entities/merchant.entity";
import { AuthRequest } from "../interface/AuthRequest";
const merchantRepository = dataSource.getRepository(Merchant)

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (! token) {
            throw new Error();
        }

        (req as AuthRequest).merchant =  await merchantRepository.findOneByOrFail({ access_token: token });
        next();
    } catch (err) {
        res.status(401).send({
            message: 'unauthenticated'
        });
    }
};