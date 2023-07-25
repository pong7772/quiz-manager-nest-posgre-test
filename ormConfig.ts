import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as dotenv from 'dotenv';
dotenv.config();

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pong',
  password: 'pong',
  database: 'pong',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default ormConfig;
