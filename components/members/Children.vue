<template>
  <div>
    <loading v-if="isLoading"></loading>
    <div v-else>
      <ul class="nav nav-tabs">
        <li class="nav-item" v-for="(g, index) in Grades" :key="index" >
            <a class="nav-link" @click="getChildren(index)" :class="{active : index == grade}" href="#" >{{g}}</a>
        </li>
      </ul>   
    <div class="row justify-content-md-end mt-3">
      <div class="col-md-5 font-weight-bold" >Total Children in {{Grades[grade]}} : {{children.total}}</div>
    </div>
      <table class="table table-hover mt-1">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">T-Shirt</th>
          <th scope="col">Allergies</th>
          <th scope="col">Camp1</th>
          <th scope="col">Camp2</th>
          <th scope="col">Nady</th>      
        </tr>
      </thead>
      <tbody >
        <tr v-for="child in children.children" :key="child.id">
          <th scope="row" >{{child.id}}</th>      
          <td>{{child.first_name + " " + child.last_name }}</td>
          <td>{{T_Shirt_Sizes[child.t_shirt_size]}}</td>
          <td>{{child.allergies}}</td>
          <td><i class="fa fa-check text-success" aria-hidden="true" v-if="child.camp1"></i></td>
          <td><i class="fa fa-check text-success" aria-hidden="true" v-if="child.camp2"></i></td>
          <td><i class="fa fa-check text-success" aria-hidden="true" v-if="child.nady"></i></td>      
        </tr>  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="font-weight-bold">{{camp1}}</td>
            <td class="font-weight-bold">{{camp2}}</td>
            <td class="font-weight-bold">{{nady}}</td>
        </tr> 
      </tbody>
    </table>
    <div class="row mt-3">
      <div class="col md-2 font-weight-bold" v-for="(total, t) in children.t_shirt_sizes" :key="t">
        {{children.T_Shirt_Sizes[t]}}: {{total}}
      </div>
    </div>    
  </div>
</div>
</template>

<script>
import loading from '../Loading'

export default {
    name: "List",
   props : {
        authUser : {},
    },
    components : {
      loading
    },
    data: function() {
        return {
            children : [],
            Grades : {},
            T_Shirt_Sizes : {},  
            grade : "pk",
            camp1 : 0,
            camp2 : 0,
            nady : 0,
            isLoading: true,
        }
    },
    created() {         
      this.getChildren(this.grade)
    },
   watch: {
      authUser: function (val) {
        if(val.role != 'admin') {
          this.$router.push({path: "/show/family/" + val.family_id});
        }
      }
    },
    methods: {
        getChildren: function(grade) {
            this.grade = grade;

            this.axios.get( '/api/v1/children/' + grade )
            .then( res => {    
                this.isLoading = false;
                this.children = res.data;
                this.Grades = res.data.Grades;      
                this.T_Shirt_Sizes = res.data.T_Shirt_Sizes; 
                this.camp1 = res.data.camp1;
                this.camp2 = res.data.camp2;
                this.nady = res.data.nady;
            } )
            .catch( e => console.log(e) )
        }
    }
}
</script>
