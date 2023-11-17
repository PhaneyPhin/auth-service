import { DataSourceOptions } from "typeorm"
import dotenv from 'dotenv'
import { Merchant } from "../entities/merchant.entity"

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.testing'})
} else {
  dotenv.config()
}

const dataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    Merchant
  ],
  migrations: [
    'src/database/migrations/*.ts',
  ],
  synchronize: false,
}

export default dataSourceOption