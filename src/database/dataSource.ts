import { DataSource } from 'typeorm';
import ormconfig from './ormconfig';

const dataSource = new DataSource(ormconfig)

dataSource.initialize()
    .then(() => {
        console.info("Database has been connected")
    })
    .catch((error: any) => console.log(error))

    
export default dataSource