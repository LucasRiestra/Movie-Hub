import { PrismaClient as MongoClient} from "../../prisma/generated/mongodb_client";
import { PrismaClient as PostgresClient} from "../../prisma/generated/postgresql_client";
import { DefaultArgs, PrismaClientOptions } from "@prisma/client/runtime/library";

export const DATA_SOURCE = process.env.DATA_SOURCE ?? "mongo"

type ClientMongo = MongoClient<PrismaClientOptions, never, DefaultArgs>
type ClientPostgres = PostgresClient<PrismaClientOptions, never, DefaultArgs>

export const mongoClient: ClientMongo = new MongoClient();
export const postgresClient: ClientPostgres = new PostgresClient();

postgresClient.$connect()
  .then(() => console.log('Conexión con PostgreSQL exitosa'))
  .catch((error) => console.error('Error al conectar con PostgreSQL:', error));

export let prismaClient: any

if(DATA_SOURCE === "postgres") {
    prismaClient = postgresClient
} else {
    prismaClient = mongoClient
}

