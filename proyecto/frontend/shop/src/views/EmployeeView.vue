<template>
    <div class="container">
        <div class="container-search">
            <Icon icon="hugeicons:search-02" />
            <input class="search" type="search" name="searchEmployee" id="searchEmployee" placeholder="Search">
        </div>
        <div class="card">
            <div class="card-header">
                <h4>Employees
                <RouterLink to="/employees/create" class="btn btn-primary float-end">Add</RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class=" table table-bordered table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </thead>
                    <tbody v-if="employees.length > 0">
                        <tr v-for="(employee,index) in employees" :key="index">
                            <td>{{ employee.id }}</td>
                            <td>{{ employee.name }}</td>
                            <td>{{ employee.lastname }}</td>
                            <td>{{ employee.department }}</td>
                            <td>
                                <RouterLink :to="{path: '/employees/'+ employee.id +'/edit' }" class="btn btn-success">
                                    Edit
                                </RouterLink>
                                <button class="btn btn-danger" @click="deleteEmployees(employee.id)">
                                    Delete
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
    import {Icon} from '@iconify/vue';
    import { RouterLink } from 'vue-router';
    export default{
        name:'EmployeeView',
        components:{Icon},
        data(){
            return{
                employees:[],
            }
        },
        mounted(){
            this.getEmployees();
        },
        methods:{
            getEmployees(){
                axios.get('http://localhost:3000/api/employees').then(res=>{
                    console.log(res)
                    this.employees = res.data;
                });
            },
            deleteEmployees(idEmployeeDelete){
                axios.delete('http://localhost:3000/api/employees/'+idEmployeeDelete).then(res=>{
                    console.log(res);
                    this.getEmployees();
                })
            }
        }
    }
</script>
<style>
    .container-search{
        padding: 10px;
        margin-bottom: 50px;
        margin-top: 20px;
    }
    .search{
        text-align: center;
        background: #f1f1f1;
        border-radius: 15px;
        font-size: 1.3em;
        margin-left: 5px;
        padding: 5px;
        width: 200px;
    }
</style>