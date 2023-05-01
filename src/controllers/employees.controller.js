import {pool} from '../db.js'


export const getEmployees = async (req,res)=>{

	try {
		// throw new Error('DB Error')
		const [rows] = await pool.query('SELECT * FROM employee')
		res.json(rows)
	} catch(e) {
		return res.status(500).json({
			message: 'Something goes wrong'
		})

		console.log(e);
	}


}





export const getEmployee = async (req,res) => {
	try {
		//console.log(req.params) //	console.log(req.params.id)

		const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
		// console.log(rows)

		if(rows.length <= 0) return res.status(404).json({
			message: 'Employee not found!'
		})

		res.json(rows[0])

	} catch(e) {
		return res.status(500).json({	message: 'Something goes wrong'	})
		console.log(e);
	}
}



// export const createEmployees = (req,res)=>res.send('<h2>creando empleados</h2>')
export const createEmployees = async (req,res)=>{
	const {name, salary} = req.body  	// console.log(req.body)

	try {
			const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES (?, ?)', [name, salary])
			// res.send({rows})  // res.send('Post success!')
			res.send({
				id: rows.insertId,
				name, 
				salary
			})  // res.send('Post success!')
	} catch(e) {
			return res.status(500).json({	message: 'Something goes wrong'	})
			console.log(e);
	}
}



export const deleteEmployees = async (req,res)=>{
	try {
			const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])

			if (result.affectedRows <= 0) return res.status(404).json({
				message: 'Employee not found'
			}) 

			// console.log(result)
			res.sendStatus(204)
	} catch(e) {
			return res.status(500).json({	message: 'Something goes wrong'	})
			console.log(e);
	}
}



export const updateEmployees = async (req,res)=>{
		// const id = req.params.id
		const {id} = req.params
		const {name, salary} = req.body

	try {
			// const [result] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?', [name, salary, id])
			const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])

			if(result.affectedRows === 0) return res.status(404).json('Employee not found')

			// console.log(name, salary, id)
			// console.log(result)

			const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
			console.log(rows[0])
			res.json(rows[0])
	} catch(e) {
			return res.status(500).json({	message: 'Something goes wrong'	})
			console.log(e);
	}

}



