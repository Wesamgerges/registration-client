<template>
    <div>
        <b-button @click="modalShow = !modalShow">Pay</b-button>
        <b-modal v-model="modalShow" centered title="Add Payment" ok-title="Add" @ok="addPayment()" >
            <div class="d-block text-center">
                <div class="row justify-content-md-start">
                    <div class="col-md-8 mb-4 text-left">
                        <label for="amount">Amount </label>
                        <input type="text" class="form-control" id="amount" name="amount" v-model="amount" >        
                    </div>
                    <div class="col-md-8 mb-4 text-left">
                        <label for="amount">Method </label>
                        <select type="text" class="form-control" id="method" name="method" v-model="method" > 
                            <option v-for="(m, index) in payment_methods" :key="index" :value="index">{{m}} </option>
                        </select>       
                    </div>
                </div>            
            </div>          
        </b-modal>
    </div>
</template>

<script>
export default {
    name : 'payment',
    props : [
        "familyId"
    ],
    data() {
        return {
            amount : 0.0,
            payment_methods : ['Cash', 'Check', 'Online', 'discount'],
            method : 0,
            modalShow: false,
        }
    },
    methods : {
        addPayment : function() { 
            this.axios.post('/api/v1/add/payment', { family_id: this.familyId, amount : this.amount, method : this.method} )
            .then(res => {     
                this.$emit('payment')      
                this.$router.push( { path: '/list' } )
            })
            .catch( e => alert(e) )    
        }
    }
}
</script>
