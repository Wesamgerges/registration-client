<template>
     <div class="card mb-5">
        <div class="card-header text-white bg-secondary">
            <h5> {{ child.first_name + " " + child.last_name}}</h5>
        </div>
        <div class="card-body">                       
            <div class="row justify-content-md-center">               
                <div class="col col-md-2"> {{ child.dob.toLocaleString().split('T')[0]}} </div>
                <div class="col col-md-2"> {{ Grades[child.grade] }}</div>
                <div class="col col-md-2"> {{ T_Shirt_Sizes[child.t_shirt_size] }} </div>
                <div class="col col-md-2"> {{ child.allergies }} </div>
                <div class="col col-md-2"> <button v-show="true" class="btn btn-danger" @click="remove">Delete</button> </div>
                <div class="col col-md-2"> <router-link class="btn btn-primary" :to="{ name: 'editChild' , params:{ id: child.id, familyId: child.family_id} }">Edit</router-link> </div>
               
            </div>
            <div class="row justify-content-md-center">                        
                <div class="col col-md-4" >
                    <span class="badge badge-primary" v-if="child.camp1">Camp1</span>
                    <span class="badge badge-danger"  v-if="child.camp2">Camp2</span>
                    <span class="badge badge-success" v-if="child.nady">Nady</span>
                </div>
            </div>                                      
        </div>
    </div> 
</template>

<script>
export default {
    name : "Child",
    props : [ "child" , "index", 'Grades', 'T_Shirt_Sizes'],    
    methods: {
        remove() {
            var c = confirm("Are sure you want to delete the child?");
            if(c) {
                this.axios.delete( '/api/v1/child/' + this.child.id )
                .then(res => {                     
                    this.$emit('childRemoved');
                //  this.$router.push({path: "/show/family/" + this.familyId})    
                })
                .catch(e => alert(e) )
            }             
        },
        
    }
}
</script>
