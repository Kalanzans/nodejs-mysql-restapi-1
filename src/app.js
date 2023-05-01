'use strict'

import express from 'express'  // const express = require('express')
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

process.stdout.write('\x1Bc')


app.use(express.json())

app.use('/api', indexRoutes)
app.use('/api', employeesRoutes)

app.use((req,res,next)=>{
	res.status(404).json({
		message:'endpoint not found'
	})
})

export default app