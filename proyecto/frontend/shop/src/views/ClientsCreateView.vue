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
                <Form :validation-schema="validationSchema" @submit="onOK()">
                    <div class="mb-3">
                        Id
                        <Field name="id" id="id" type="text" class="form-control" v-model="model.client.id"/>
                        <ErrorMessage name="id" />
                    </div>
                    <div class="mb-3">
                        Name
                        <Field name="name" id="name" type="text" class="form-control" v-model="model.client.name"/>
                        <ErrorMessage name="name" />
                    </div>
                    <div class="mb-3">
                        Lastname
                        <Field name="lastname" id="lastname" type="text" class="form-control" v-model="model.client.lastname"/>
                        <ErrorMessage name="lastname" />
                    </div>
                    <div class="mb-3">
                        Address
                        <Field name="address" id="address" type="text" class="form-control" v-model="model.client.address"/>
                        <ErrorMessage name="address" />
                    </div>
                    <div class="mb-3">
                        Phone
                        <Field name="phone" id="phone" type="text" class="form-control" v-model="model.client.phone"/>
                        <ErrorMessage name="phone" />
                    </div>
                    <div class="mb-3">
                        RFC
                        <Field name="rfc" id="rfc" type="text" class="form-control" v-model="model.client.rfc"/>
                        <ErrorMessage name="rfc" />
                    </div>
                    <div class="mb-3">
                        Curp
                        <Field name="curp" id="curp" type="text" class="form-control" v-model="model.client.curp"/>
                        <ErrorMessage name="curp" />
                    </div>  
                    <div class="mb-3">
                        CP
                        <Field name="cp" id="cp" type="text" class="form-control" v-model="model.client.cp"/>
                        <ErrorMessage name="cp" />
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Sent</button>
                    </div>
                </Form>  
            </div>
        </div>
    </div>
</template>
<script>
import { Field,Form,ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
import axios from 'axios';

export default{
    name: 'ClientsCreate',
    components:{ Field,Form,ErrorMessage },
    data(){
        const validationSchema =toTypedSchema(
            zod.object({
                id: zod.string().nonempty({message:'Required field'}).min(1),
                name: zod.string().nonempty({message: 'Required Field'}).min(1),
                lastname: zod.string().nonempty({message: 'Required Field'}).min(1),
                address: zod.string().nonempty({message: 'Required Field'}).min(1),
                phone: zod.string().nonempty({message: 'Required Field'}).min(1).max(10),
                rfc: zod.string().nonempty({message: 'Required Field'}).min(1),
                curp: zod.string().nonempty({message: 'Required Field'}).min(1),
                cp: zod.string().nonempty({message: 'Required Field'}).min(1),
            })
        );
        return{
            validationSchema,
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
        onOK(){
            alert('Client Successfully Added')
        },
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