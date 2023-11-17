import { Request, Response } from "express";
import axios from 'axios'
import HttpStatusCode from "../enums/httpStatus";
import { Repository } from "typeorm";
import dataSource from "../database/dataSource";
import { Merchant } from "../entities/merchant.entity";
import { CAMDIGIKEY_ACCESS_TOKEN_URL, CAMDIGIKEY_BASE_URL, CAMDIGIKEY_LOGIN_TOKEN_URL } from "../config";
import { AuthRequest } from "../interface/AuthRequest";

export class AuthController {
    private userRepository: Repository<Merchant>;

    constructor() {
        this.userRepository = dataSource.getRepository(Merchant)
    }
    
    public getLoginUrl = async (_: Request, res: Response) => {
        try {
            const result = await axios.get(CAMDIGIKEY_LOGIN_TOKEN_URL)
         
            return res.status(HttpStatusCode.OK).send(result.data)
        } catch (e: any) {
            console.log(e)
            return res.status(HttpStatusCode.BAD_REQUEST).send(e.data)
        }
    }

    public requestLogin = async (_: Request, res: Response) => {
        try {
            const result = await axios.get(CAMDIGIKEY_LOGIN_TOKEN_URL)
            const loginToken = result.data.data.loginToken
            const loginResult = await axios.post('https://camdigikey-auth.camdx.gov.kh/api/v1/authenticate/requestLogin', {
                'loginToken': loginToken
            })

            return res.status(HttpStatusCode.OK).send(loginResult.data)
        } catch (e: any) {
            console.log(e)
            return res.status(HttpStatusCode.BAD_REQUEST).send(e.data)
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { authToken } = req.body

            const result = await axios.post(CAMDIGIKEY_ACCESS_TOKEN_URL, {
                authToken
            })

            const profileResult = await axios.post(CAMDIGIKEY_BASE_URL, {
                accessToken: result?.data?.data?.accessToken
            })
    
            if (! profileResult.data) {
                throw new Error()
            }

            const data = profileResult.data?.payload?.data

            const merchant = await this.userRepository.findOneByOrFail({
                contact_phone: data.mobile_phone
            })

            merchant.access_token = data.accessToken
            await this.userRepository.save(merchant)

            return res.status(HttpStatusCode.OK).send(result.data)
        } catch (e: any) {
            console.log(e)
            return res.status(HttpStatusCode.BAD_REQUEST).send(e.data)
        }
    }

    public getMe = async (req: Request, res: Response) => {
        const authRequest = req as AuthRequest
        return res.status(HttpStatusCode.OK).send(authRequest.merchant)
    }

    public createMerchant = async (req: Request, res: Response) => {
        const merchant = await this.userRepository.create(req.body)
        const result = await this.userRepository.save(merchant)

        res.status(HttpStatusCode.CREATED).send(result)
    }
}

const authController = new AuthController()

export default authController