<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Clients
                <RouterLink to="/clients/create" class="btn btn-primary float-end">Agregar</RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class=" table table-bordered table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>RFC</th>
                        <th>Curp</th>
                        <th>Cp</th>
                        <th>Actions</th>
                    </thead>
                    <tbody v-if="clients.length > 0">
                        <tr v-for="(client,index) in clients" :key="index">
                            <td>{{ client.id }}</td>
                            <td>{{ client.name }}</td>
                            <td>{{ client.lastname }}</td>
                            <td>{{ client.address }}</td>
                            <td>{{ client.phone }}</td>
                            <td>{{ client.rfc }}</td>
                            <td>{{ client.curp }}</td>
                            <td>{{ client.cp }}</td>
                            <td>
                                <button class="btn btn-primary">
                                    Editar
                                </button>
                                <button class="btn btn-danger" @click="deleteClients(client.id)">
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="9" style="text-align: center;"> Sin registros!</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        name:'ClientsView',
        data(){
            return{
                clients:[],
            }
        },
        mounted(){
            this.getClients();
        },
        methods:{
            getClients(){
                axios.get('http://localhost:3000/api/clients').then(res=>{
                    console.log(res)
                    this.clients = res.data;
                });
            },
            deleteClients(idClientDelete){
                axios.delete('http://localhost:3000/api/clients/'+idClientDelete).then(res=>{
                    console.log(res);
                    this.getClients();
                })
            }
        }
    }
</script>