<template>
    <div>
        <loading v-if="!family.id"></loading>
        <div v-else>
            <pay :familyId="family.id"></pay>
            <info :family="family"></info>
            <parent v-for="parent in parents" :key="parent.id" :parent="parent"></parent>
            
            <div class="row justify-content-md-end mb-5 mr-1">
                <router-link class="btn btn-lg btn-primary col-md-3 h5" :to="{ name: 'addChild',  params: { 'familyId': family.id } }" >Add a child </router-link>
            </div>

            <child v-for="(child, index) in childern" :key="child.id" 
                :child="child" 
                :index="index" 
                :Grades='Grades' 
                :T_Shirt_Sizes='T_Shirt_Sizes'
                v-on:childRemoved="loadFamily">
            </child>        
        </div>   
   </div>
</template>

<script>
import parent from '../parent/View'
import child from '../child/View'
import info from './Info'
import pay from './Pay'
import loading from '../Loading'

export default {
    name : "Show",
    components : {
      parent,
      child,
      info,
      pay,
      loading
    },
    data : function() {
        return {
            family : {},
            Grades : {},
            T_Shirt_Sizes : {},
            childern : {},
            parents : {},
        }
    },
   
    created() {  
      this.loadFamily()
    },
    methods: {
        loadFamily() {
              this.axios.get('/api/v1/family/' + this.$route.params.familyId )
        .then(r => {        
            r = r.data;
            this.family = r.family;     
            this.parents = r.parents;     
            this.childern = r.childern;  
            this.Grades = r.Grades;      
            this.T_Shirt_Sizes = r.T_Shirt_Sizes;   
        })
        .catch(e => {
            console.log(e);
        })
        }
    }
}
</script>
