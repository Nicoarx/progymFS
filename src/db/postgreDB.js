// db.js
import postgres from 'postgres'

//const connectionString = process.env.DB_URL
const connectionString = 'postgres://postgres.uxioymvcfdcckdhbhfea:estoesimposible@aws-0-sa-east-1.pooler.supabase.com:6543/postgres'
const sql = postgres(connectionString)                                    

export default sql
