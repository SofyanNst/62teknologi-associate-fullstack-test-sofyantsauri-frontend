<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-5 mt-5">
                <div class="card">
                    <div class="card-body">
                        <div class="container">

                            <div class="row justify-content-center mt-4">
                                <div class="col-md-1">
                                    <img src="../../assets/small-icon.png" width="40" height="40" class="mt-2">
                                </div>
                                <div class="col-md-3">
                                    <h3 class="fw-bolder mt-3 mb-5">&nbsp; Login</h3>
                                </div>
                            </div>



                            
                            <form @submit.prevent="login">
                                <div class="col">
                                    <div v-if="loginFailed" class="alert alert-danger">
                                        <p>Email atau password salah</p>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" v-model="user.email" class="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp">
                                </div>
                                <div v-if="validation.email" class="mt-2 alert alert-danger">
                                    {{ validation.email[0] }}
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" v-model="user.password" class="form-control"
                                        id="exampleInputPassword1">
                                </div>
                                <div v-if="validation.password" class="mt-2 alert alert-danger">
                                    {{ validation.password[0] }}
                                </div>
                                <button type="submit" class="btn btn-warning mt-3 w-100 mb-4">Masuk</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { reactive, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import axios from 'axios'

    export default {

        setup() {

            //inisialisasi vue router on Composition API
            const router = useRouter()

            //state user
            const user = reactive({
                email: '',
                password: '',
            })

            //state validation
            const validation = ref([])

            //state loginFailed
            const loginFailed = ref()

            //method login
            function login() {

                //define variable 
                let email = user.email
                let password = user.password

                //send server with axios
                axios.post('http://localhost:8000/api/login', {
                        email,
                        password,
                })
                .then(response => {

                    if(response.data.success) {

                        //set token
                        localStorage.setItem('token', response.data.token)

                        //redirect ke halaman dashboard
                        return router.push({
                            name: 'dashboard'
                        })
                    }

                    //set state loggedIn to true
                    loginFailed.value = true


                }).catch(error => {
                    //set validation dari error response
                    validation.value = error.response.data
                })

            }

            return {
                user,           // <-- state user
                validation,     // <-- state validation 
                loginFailed,    // <-- state loggedIn
                login           // <-- method login
            }

        }

    }
</script>

<style>
    @import '../../assets/css/loginstyle.css';
</style>