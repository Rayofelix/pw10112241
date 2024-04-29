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

// Tercer paso
// Encender servidor
let puerto = 3000;
app.listen(puerto,function(){
    console.log('Servidor escuchando por puerto: ' + puerto);
});
