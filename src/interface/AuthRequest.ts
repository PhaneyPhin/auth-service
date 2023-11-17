import { Request } from "express";
import { Merchant } from "../entities/merchant.entity";

export interface AuthRequest extends Request {
    merchant: Merchant
}
