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

// Definir rutas de acceso
app.get('/',function(req,res){
    res.send('Rutassssss de iniciosssssss');
});

// Tercer paso
// Encender servidor
let puerto = 3000;
app.listen(puerto,function(){
    console.log('Servidor escuchando por puerto: ' + puerto);
});
