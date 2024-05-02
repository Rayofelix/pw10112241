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

// seleccionamos un cliente en especifico
app.get('/api/clients/:id',(req,res)=>{
    // params es agregar los parametros del get
    conexion.query('select * from clients where id=?',[req.params.id],(error,rows)=>{
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    })//consulta de sql
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
app.put('/api/clients/:id',(req,res)=>{
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

// Tercer paso
// Encender servidor
let puerto = 3000;
app.listen(puerto,function(){
    console.log('Servidor escuchando por puerto: ' + puerto);
});
