import {Router} from 'express'
import {ping} from '../controllers/index.controller.js'

const router = Router()


router.get('/ping', ping)


export default router





// const [result] = await pool.query('SELECT 1 + 1 AS result')
