<template>
  <form ref="parent" class="container m-5" @submit.prevent="save()">         
    <div class="form-row">
        <div class="col-md-5 mb-3">
            <label for="first_name">First name</label>
            <input type="text" :class="['input', ($v.parent.first_name.$error) ? 'is-danger' : '']" class="form-control" id="first_name" name="first_name" v-model="parent.first_name" required>        
        </div>
        <div class="col-md-5 mb-3">
          <label for="last_name">Last name</label>
          <input type="text" class="form-control" id="last_name" name="last_name" v-model="parent.last_name" required>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label for="validationDefault03">Cell Phone</label>
          <input type="text" class="form-control" id="phone" name="phone" v-model="parent.phone" required>  
        </div>
        <div class="col-md-5 mb-3">
            <label for="email"> Email</label>
            <input type="text" class="form-control" id="email" name="email" v-model="parent.email" >  
        </div>   
         <button ref="ss" type="submit" v-show="false" class="btn btn-success" @click="save($event)">Submit</button>     
      </div>
    </form>
</template>

<script>

import {validationMixin} from 'vuelidate'
import {required, email} from 'vuelidate/lib/validators'

export default {
    name : "EditParent",
    props: ['clickedNext', 'currentStep' ],
    mixins: [validationMixin],
    data() {
        return {
            parent : {
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
            },
        }
    },
    validations: {
        parent: {
            first_name: {
                required
            },
            last_name: {
                required
            },
            email: {
                required,
                //email
            },
            phone: {
                required
            }
        }
    },
     watch: {
        $v: {
            handler: function (val) {
                this.vv()
            },
            deep: true
        },
        clickedNext(val) {   
            console.log("nextStep")
               this.$parent.$emit('new-input', { value: "nextStep" } );         
            if(val === true) {
               // save data when moving to the next step
               console.log("nextStep")
               this.$parent.$emit('new-input', { value: "nextStep" } ); 
            }
        }
    },
    beforeCreate() {      
        // this.axios.get('/api/v1/parent/' + this.$route.params.id)
        //     .then( res => this.parent = res.data.parent )
        //     .catch( e => alert(e) )
    },
    activated() {   
        this.parent  = this.$parent.parent   
        this.vv()
    },
    methods : {
        vv(){
            var isValid = this.$refs.parent.checkValidity();
            this.$parent.parent = this.parent
            this.$parent.$emit('can-continue', { value: isValid } );        
        },
        save : function(e) {
            //  e.preventDefault();
            //  alert("submittied")
            // this.axios.put('/api/v1/parent/' + this.$route.params.id, this.parent)
            //     .then(res => this.$router.push({path: "/show/family/" + this.parent.family_id}) )
            //     .catch( e => alert(e) )              
        },        
    }
}
</script>
