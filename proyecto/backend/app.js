// Primer paso:
// Asignar funcionalidad de express, mysql y cors para utilizar sus metodos
let express = require('express'); 
let mysql = require('mysql');
let cors = require('cors');

// Segundo paso
// asignar objetos 
let app = express();
app.use(express.json());
app.use(cors());


// conexion a sql
let conexion = mysql.createConnection({
    host:'127.0.0.1',
    password:'',
    user:'root',
    database:'pwdata',
    port:'3306'
});

// nos conectamos a sql
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conectado a la base de datos')
    }
});

// Definir rutas de acceso
app.get('/',function(req,res){
    res.send('Ruta de inicio');
});


//=====================================================CLIENTS====================================
// seleccionar todos los clientes
app.get('/api/clients',(req,res)=>{
    conexion.query('select * from clients',(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});


// Seleccionar un cliente específico por ID
app.get('/api/clients/id/:id', (req, res) => {
    conexion.query('SELECT * FROM clients WHERE id = ?', [req.params.id], (error, rows) => {
        if (error) {
            throw error;
        } else {
            res.send(rows);
        }
    });
});

// Seleccionar un cliente específico por nombre
app.get('/api/clients/name/:name', (req, res) => {
    conexion.query('SELECT * FROM clients WHERE name = ?', [req.params.name], (error, rows) => {
        if (error) {
            throw error;
        } else {
            res.send(rows);
        }
    });
});

app.delete('/api/clients/:id',(req,res)=>{
    let id = req.params.id;
    conexion.query('delete from clients where id=?',[id],(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});

// <form action='url' method='post'>
// req.body
// se recomienda usar id y name en forms para hacer referencias
app.post('/api/clients',(req,res)=>{
    let data = {
        id: req.body.id,
        name: req.body.name,
        lastname: req.body.lastname,
        address: req.body.address,
        phone: req.body.phone,
        rfc: req.body.rfc,
        curp: req.body.curp,
        cp: req.body.cps
    };
    let sql = 'insert into clients set ?';
    conexion.query(sql,data,(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});

// Actualizar
app.put('/api/clients/id/:id',(req,res)=>{
    let id = req.params.id; // Solo este viene de params
    let name = req.body.name;
    let lastname = req.body.lastname;
    let address = req.body.address;
    let phone = req.body.phone;
    let rfc = req.body.rfc;
    let curp = req.body.curp;
    let cp = req.body.cp;
    let sql = 'update clients set name = ?, lastname = ?,address = ?,phone = ?,rfc = ?,curp = ?,cp = ? where id = ?';
    conexion.query(sql,[name,lastname,address,phone,rfc,curp,cp,id],(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});
//=========================================EMPLOYEES=======================================
// seleccionar todos los vendedores
app.get('/api/employees',(req,res)=>{
    conexion.query('select * from employees',(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});
// Seleccionar un empleado específico por ID
app.get('/api/employees/id/:id', (req, res) => {
    conexion.query('SELECT * FROM employees WHERE id = ?', [req.params.id], (error, rows) => {
        if (error) {
            throw error;
        } else {
            res.send(rows);
        }
    });
});

// Seleccionar un empleado específico por nombre
app.get('/api/employees/name/:name', (req, res) => {
    conexion.query('SELECT * FROM employees WHERE name = ?', [req.params.name], (error, rows) => {
        if (error) {
            throw error;
        } else {
            res.send(rows);
        }
    });
});
app.delete('/api/employees/:id',(req,res)=>{
    let id = req.params.id;
    conexion.query('delete from employees where id=?',[id],(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});
app.post('/api/employees',(req,res)=>{
    let data = {
        id: req.body.id,
        name: req.body.name,
        lastname: req.body.lastname,
        department: req.body.department,
    };
    let sql = 'insert into employees set ?';
    conexion.query(sql,data,(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});

// Actualizar
app.put('/api/employees/:id',(req,res)=>{
    let id = req.params.id; // Solo este viene de params
    let name = req.body.name;
    let lastname = req.body.lastname;
    let department = req.body.department;
    let sql = 'update employees set name = ?, lastname = ?,department = ? where id = ?';
    conexion.query(sql,[name,lastname,department,id],(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});

// =====================================================ARTICLES======================================================
// seleccionar todos los vendedores
app.get('/api/articles',(req,res)=>{
    conexion.query('select * from articles',(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});
// Seleccionar un articulo específico por ID
app.get('/api/articles/id/:id', (req, res) => {
    conexion.query('SELECT * FROM articles WHERE id = ?', [req.params.id], (error, rows) => {
        if (error) {
            throw error;
        } else {
            res.send(rows);
        }
    });
});

// Seleccionar un articulo específico por nombre
app.get('/api/articles/description/:description', (req, res) => {
    conexion.query('SELECT * FROM articles WHERE description = ?', [req.params.description], (error, rows) => {
        if (error) {
            throw error;
        } else {
            res.send(rows);
        }
    });
});
app.delete('/api/articles/:id',(req,res)=>{
    let id = req.params.id;
    conexion.query('delete from articles where id=?',[id],(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});
app.post('/api/articles',(req,res)=>{
    let data = {
        id: req.body.id,
        description: req.body.description,
        stock: req.body.stock,
        price: req.body.price
    };
    let sql = 'insert into articles set ?';
    conexion.query(sql,data,(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});

// Actualizar
app.put('/api/articles/id/:id',(req,res)=>{
    let id = req.params.id; // Solo este viene de params
    let description = req.body.description;
    let stock = req.body.stock;
    let price = req.body.price;

    let sql = 'update articles set description = ?, stock = ?,price = ? where id = ?';
    conexion.query(sql,[description,stock,price,id],(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});



// Tercer paso
// Encender servidor
let puerto = 3000;
app.listen(puerto,function(){
    console.log('Servidor escuchando por puerto: ' + puerto);
});
