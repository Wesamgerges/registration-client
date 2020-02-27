<template>
  <div class="container mt-5">
    <loading v-if="loading"></loading>
    <div v-else>
    <div class="row">
      <div class="d-flex justify-content-start ml-5 mb-3 font-weight-bold" v-for="(total, grade) in families.grades" :key="grade">
        {{families.Grades[grade]}}: {{total}}
      </div>
    </div>
  
    <div class="row justify-content-md-end">
      <div class="col-md-2 text-right font-weight-bold" >Total: {{families.totalChildren}}</div>
    </div>
    <table class="table table-hover mt-1">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Father</th>
        <th scope="col">Mother</th>
        <th scope="col">Due</th>
        <th scope="col">Paid</th>
        <th scope="col">Childern</th>
        <th>Payment</th>
        <th></th>
      </tr>
    </thead>
    <tbody v-for="family in families.families" :key="family.id">
      <tr>
        <th scope="row" >{{family.id}}</th>      
        <td>{{family.father.name}}</td>
        <!-- <td>{{family.mother.name}}</td> -->
        <td>${{family.total - family.paid}}</td>
        <td>${{family.paid}}</td>
        <td>{{family.children.join(', ')}}</td>
        <td><payment v-if="family.total > 10" :familyId="family.id" v-on:payment="getFamily"></payment></td>
        <td><router-link class="btn btn-primary" :to="'/show/family/' + family.id">View</router-link></td>
      </tr>   
    </tbody>
    <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td class="font-weight-bold">${{families.total - families.paid}}</td>
      <td class="font-weight-bold">${{families.paid}}</td>      
      <td></td>      
      <td class="font-weight-bold">Total: ${{families.total}}</td>
      <td></td>
    </tr>
  </tfoot>
  </table>
  <hr/>
  <div class="row mt-3">
    <div class="col-md-2 font-weight-bold" v-for="(total, t) in families.t_shirt_sizes" :key="t">
      {{families.T_Shirt_Sizes[t]}}: {{total}}
    </div>
    <div class="col-md-2"></div>
      <button name="add" class="btn btn-primary col-md-2 h5" @click="createFamily">Add Family </button>     
    </div>
  </div>
</div>
</template>

<script>
import payment from './Payment'
import loading from '../Loading'

export default {
    name: "List",
    components : {
      payment,
      loading
    },
    props : {
        authUser : {},
    },
    data: function() {
        return {
          families : {},
          loading: true,
        }
    },
    created() {  
      console.log("authUser222", this.$store.authUser)
      this.getFamily();      
    },
    watch: {
      authUser: function (val) {
        if(val.role != 'admin') {
          this.$router.push({path: "/show/family/" + val.family_id});
        }
      }
    },
    methods : {
      getFamily : function () {
        this.axios.get('/api/v1/families')
        .then(res => {    
            this.loading = false;            
            this.families = res.data; 
            this.families.Grades.kg = 'kg';
            
        })
        .catch(e => console.log(e) )
      },

      createFamily : function () {
        this.axios.post('/api/v1/family')
        .then(res => {    
          this.$router.push({path: "/show/family/" + res.data.familyId})           
        })
        .catch(e => console.log(e) )
      }
    }
}
</script>
