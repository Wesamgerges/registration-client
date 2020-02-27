<template>
<form class="form-inline row justify-content-md-end">
  <div class="form-group ">    
    <input type="text" class="form-control col-sm-4" v-model="amount" />
 
  <PayPal
        :amount="amount"
        currency="USD"
        :client="creditials"
        :button-style="myStyle"
       
        env="sandbox"
        @payment-authorized="auth"
        @payment-completed="complete"
        @payment-cancelled="cancel"  
        class="pt-3"    
    >
    </PayPal>  
  </div>
</form>
</template>

<script>
import PayPal from 'vue-paypal-checkout';

export default {
  name: "Pay",
  props: [
    'familyId'
  ],
  data() {
    return {
      creditials: {
        sandbox: 'AQNwlQIqem9wvbJ5LwxQ0FHpD0R4NJIUUG-THBClGu87-vs--iNl9AjFXn3Q1enyzdXWwdmg1ge3Kb_q',
        production: '<production client id>'
      },
      myStyle: {
        label: 'checkout',
        size:  'medium',
        shape: 'rect',
        color: 'gold'
    },
      items: [],    
      amount: "0",
    }
  },
  components: {
    PayPal
  },
  methods: {
    auth(e){     
    },
    complete(data){      
      this.addPayment(data.transactions[0].amount.total);
      
    },
    cancel(e){
    },
    addPayment( amount) {
      this.axios.post('/api/v1/add/payment', { family_id: this.familyId, amount : amount, method : 4} )
      .then(res => {                  
          this.$router.push( {path: `/show/family/${this.familyId}` } )
      })
      .catch( e => alert(e) )    
    }
  },
  mounted() {
    this.axios.get(`/api/v1/family/getPayment/${this.familyId}`)
      .then(res => {         
          this.items = res.data.arr; 
          this.amount = res.data.due + "";            
      })
      .catch(e => alert(e))
  }
}
</script>

