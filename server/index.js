import dotenv from "dotenv"
import express from "express"
dotenv.config()

const Pool = require('pg').Pool;
const pool = new Pool({
    host : "localhost",
    user : "postgres",
    password  : "kevingreat",
    database : "W2Q1",
    port : 5432
})

const app = express()
app.use(express.json())

const port = process.env.PORT || 3003

app.listen(port,()=>{console.log('Server listening on port '+port)})

//Tabel Region
app.get('/api/region',(req,res)=>{
    pool.query('select * from regions',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/region/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from regions where region_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/region/',(req,res)=>{
    const {region_name} = req.body
    pool.query('insert into regions (region_name) values ($1)',
    [region_name],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/region/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    pool.query("update regions set region_name=$1 where region_id=$2",
    [name,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/region/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from regions where region_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

//Tabel Country
app.get('/api/country',(req,res)=>{
    pool.query('select * from countries',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/country/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from countries where country_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/country/',(req,res)=>{
    const {country_id,country_name,region_id} = req.body
    pool.query('insert into countries (country_id,country_name,region_id) values ($1,$2,$3)',
    [country_id,country_name,region_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/country/:id',(req,res)=>{
    const {id} = req.params
    const {country_name} = req.body
    pool.query("update countries set country_name=$1 where country_id=$2",
    [country_name,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/country/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from countries where country_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

//Tabel Location
app.get('/api/location',(req,res)=>{
    pool.query('select * from locations',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/location/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from locations where location_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/location/',(req,res)=>{
    const {location_id, street_address, postal_code, city, state_province, country_id} = req.body
    pool.query('insert into locations (location_id, street_address, postal_code, city, state_province, country_id) values ($1,$2,$3,$4,$5,$6)',
    [location_id, street_address, postal_code, city, state_province, country_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/location/:id',(req,res)=>{
    const {id} = req.params
    const {city} = req.body
    pool.query("update locations set city=$1 where location_id=$2",
    [city,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/location/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from locations where location_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

//Tabel Departments
app.get('/api/department',(req,res)=>{
    pool.query('select * from departments',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/department/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from departments where department_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/department/',(req,res)=>{
    const {department_id,department_name, location_id} = req.body
    pool.query('insert into departments (department_id,department_name, location_id) values ($1,$2,$3)',
    [department_id,department_name, location_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/department/:id',(req,res)=>{
    const {id} = req.params
    const {department_name} = req.body
    pool.query("update departments set department_name=$1 where department_id=$2",
    [department_name,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/department/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from departments where department_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

//Tabel Jobs
app.get('/api/job',(req,res)=>{
    pool.query('select * from jobs',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/job/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from jobs where job_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/job/',(req,res)=>{
    const {job_id,job_title, min_salary,max_salary} = req.body
    pool.query('insert into jobs (job_id,job_title, min_salary,max_salary) values ($1,$2,$3,$4)',
    [job_id,job_title, min_salary,max_salary],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/job/:id',(req,res)=>{
    const {id} = req.params
    const {job_title} = req.body
    pool.query("update jobs set job_title=$1 where job_id=$2",
    [job_title,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/job/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from jobs where job_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

//Tabel Employee
app.get('/api/employee',(req,res)=>{
    pool.query('select * from employees',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/employee/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from employees where employee_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/employee/',(req,res)=>{
    const {first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id, proj_account_mgr} = req.body
    pool.query('insert into employees (first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id, proj_account_mgr) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
    [first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id, proj_account_mgr],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/employee/:id',(req,res)=>{
    const {id} = req.params
    const {first_name} = req.body
    pool.query("update employees set first_name=$1 where employee_id=$2",
    [first_name,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/employee/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from employees where employee_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

//Tabel Dependent
app.get('/api/dependent',(req,res)=>{
    pool.query('select * from dependents',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/dependent/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from dependents where dependent_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/dependent/',(req,res)=>{
    const {dependent_id,first_name, last_name, relationship, employee_id} = req.body
    pool.query('insert into dependents (dependent_id,first_name, last_name, relationship, employee_id) values ($1,$2,$3,$4,$5)',
    [dependent_id,first_name, last_name, relationship, employee_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/dependent/:id',(req,res)=>{
    const {id} = req.params
    const {first_name} = req.body
    pool.query("update dependents set first_name=$1 where dependent_id=$2",
    [first_name,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/dependent/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from dependents where dependent_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})