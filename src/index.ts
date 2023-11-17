import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import authRouter from './auth.route';
dotenv.config();
const app: Express = express();
app.use(express.json())
app.use('auth', authRouter)
