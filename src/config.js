import {config} from 'dotenv' 
config()

// process.stdout.write('\x1Bc')

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || localhost
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'r00t'
export const DB_NAME = process.env.DB_NAME || 'employee'
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'
export const DB_PORT = process.env.DB_PORT || 3306

// console.log(process.env.PORT)
// console.log(process.env.DB_HOST)
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD)
// console.log(process.env.DB_NAME)
// console.log(process.env.DB_DATABASE)


