<template>
 <div class="row">
    <div class="col d-flex justify-content-center">
        <div class="card text-center mx-auto w-100" >
            <h5 class="card-header"> {{ label }} </h5>
            <div class="card-body">
                <form @submit.prevent="submit('local')">
                    <div class="form-group pb-2"> 
                        <b-alert v-model="showError" variant="danger" @dismissed="$emit('dismissed')" dismissible>
                            {{ errorMessage }}
                        </b-alert>   
                    </div> 
                    <div class="form-group pb-2" v-if="register">
                        <input type="text" v-model="user.first_name" class="form-control" id="first_name" name="first_name" placeholder="First Name" required>
                    </div>
                    <div class="form-group pb-2" v-if="register">
                        <input type="text" v-model="user.last_name" class="form-control" id="last_name" name="last_name" placeholder="Last Name" required>
                    </div>
                    <div class="form-group pb-2">
                        <input type="email" v-model="user.email" class="form-control" id="email" name="email" placeholder="Email" required>
                    </div>
                    <div class="form-group pb-2">
                        <input type="password" v-model="user.password" class="form-control" id="password" name="email" placeholder="Password" required>
                    </div>
                    <div class="form-group pb-2">
                        <button type="submit" class="form-control form-control-lg btn btn-primary" > {{ label }} </button>                                            
                    </div>
                    <hr class="hr-text" data-content="OR">
                    <div class="form-group pb-2">   
                        <a class="btn btn-social btn-google form-control form-control-lg text-center" :href="serverUrl + '/auth/redirect/' + label.toLowerCase() +'/google'">
                            <font-awesome-icon :icon="['fab', 'google']"/> {{ label}} with Google
                        </a>                                            
                    </div>
                    <div class="form-group">                       
                        <button class="btn btn-social btn-facebook form-control form-control-lg text-center" :href="serverUrl + '/auth/redirect/' + label.toLowerCase() +'/facebook'">
                            <font-awesome-icon :icon="['fab', 'facebook']"/> {{ label }} with Facebook
                        </button>  
                    </div>
                </form>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
    props: [
        'register',
        'errorMessage',
    ],
    data() {
        return {
            user: {
                first_name: "",
                last_name:  "",
                email:      "",
                password:   ""
            },
            label:      "Login",
            showError:  false,
        }
    },
    computed: {
        serverUrl() {
            return process.env.serverUrl
        },
    },
    watch: {
        register(v) {
            this.label = v ? "Register" : "Login"
            this.reset()
        },
        errorMessage(v) {           
            this.showError = v ? true : false;
            this.reset();
        },
    },
    methods: {
        submit() {
            this.$emit(this.register ? 'register' : 'login', { user: this.user })
        },
       reset() {
            this.user = {
                first_name: "",
                last_name:  "",
                email:      "",
                password:   ""
            }
        }
    },
}
</script>
<style>
.btn-social>:first-child{
    top: 5px;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
