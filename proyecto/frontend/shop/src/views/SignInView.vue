<template>
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">
    
                <div class="mb-md-5 mt-md-4 pb-5">
    
                  <h2 class="fw-bold mb-2 text-uppercase">Sign In</h2>
                  <p class="text-white-50 mb-5">Please enter your login and password!</p>
    
                  <div v-if="message" class="alert alert-primary" role="alert">
                    {{ message }}
                  </div>
    
                  <div data-mdb-input-init class="form-outline form-white mb-4">
                    <input v-model="email" type="email" id="typeEmailX" class="form-control form-control-lg" />
                    <label class="form-label" for="typeEmailX">Email</label>
                  </div>
    
                  <div data-mdb-input-init class="form-outline form-white mb-4">
                    <input v-model="password" type="password" id="typePasswordX" class="form-control form-control-lg" />
                    <label class="form-label" for="typePasswordX">Password</label>
                  </div>
                  <button @click.prevent="signInGoogle()" class="btn btn-outline-light btn-lg px-5" type="submit"><Icon icon='logos:google-icon'/>Google</button>
                  <button @click.prevent="signIn()" class="btn btn-outline-light btn-lg px-5" type="submit">Sign In</button>
    
                </div>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </template>
    <script>
    import { getAuth,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
    import { Icon } from '@iconify/vue'
      export default{
        name: "LoginView",
        components:{Icon},
        data(){
          return{
            email:'',
            password:'',
            message:''
          }
        },
        methods:{
          signIn(){
            signInWithEmailAndPassword(getAuth(),this.email,this.password).then((data)=>{
              this.message='';
              this.email='';
              this.password='';
            })
            .catch((error)=>{
              switch (error.code) {
                case "auth/invalid-email":
                    this.message='Invalid Email!'                    
                    break;
                case "auth/user-not-found":
                    this.message='That User is not valid'                    
                    break;
                case "auth/wrong-password":
                    this.message='That Password is incorrect '                    
                    break;
                default:
                    this.message='Incorrect Email or Password '
                    break;
              }
            })
          },
          signInGoogle(){
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(),provider).then((result)=>{
              this.$router.push('/clients/')

            })
          },
        }
      }
    </script>