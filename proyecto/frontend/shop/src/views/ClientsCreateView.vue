<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Client</h4>
                <div v-if="message==1" class=" alert alert-success" role="alert" >
                    Data Save Succesfully!
                </div>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    Id
                    <input type="text" class="form-control" v-model="model.client.id">
                </div>
                <div class="mb-3">
                    Name
                    <input type="text" class="form-control" v-model="model.client.name">
                </div>
                <div class="mb-3">
                    Lastname
                    <input type="text" class="form-control" v-model="model.client.lastname">
                </div>
                <div class="mb-3">
                    Address
                    <input type="text" class="form-control" v-model="model.client.address">
                </div>
                <div class="mb-3">
                    Phone
                    <input type="text" class="form-control" v-model="model.client.phone">
                </div>
                <div class="mb-3">
                    RFC
                    <input type="text" class="form-control" v-model="model.client.rfc">
                </div>
                <div class="mb-3">
                    Curp
                    <input type="text" class="form-control" v-model="model.client.curp">
                </div>
                <div class="mb-3">
                    CP
                    <input type="text" class="form-control" v-model="model.client.cp">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="createClient()">Sent</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    name: 'ClientsCreate',
    data(){
        return{
            message: 0,
            model:{
                client:{
                    id:'',
                    name:'',
                    lastname:'',
                    address:'',
                    phone:'',
                    rfc:'',
                    curp:'',
                    cp:''
                }
            }
        }
    },
    methods:{
        createClient(){
            axios.post('http://localhost:3000/api/clients',this.model.client).then(res =>{
                if(res.data.affectedRows == 1){
                    this.model.client = { //Limpiar cuadros de texto al dar click al boton
                        id:'',
                        name:'',
                        lastname:'',
                        address:'',
                        phone:'',
                        rfc:'',
                        curp:'',
                        cp:''
                    }
                    this.message = 1;
                }
            });
        }
    }
}
</script>