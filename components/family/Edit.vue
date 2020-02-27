<template>
    <form  class="mb-5">           
    <div class="card">
        <div class="card-header text-white bg-primary"><h5>Family Information </h5> </div>
        <div class="card-body">
            <div class="row justify-content-md-start">
                <div class="col-md-8 mb-4">
                    <label for="address_line1">Address line1: </label>
                    <input type="text" class="form-control" id="address_line1" name="address_line1" v-model="family.address_line1" >        
                </div>
            </div>
            <div class="row justify-content-md-start">
                <div class="col-md-8 mb-4">
                    <label for="address_line2">Address line2: </label>
                    <input type="text" class="form-control" id="address_line2" name="address_line2" v-model="family.address_line2" >        
                </div>
            </div>
            <div class="row justify-content-md-start">
                <div class="col-md-4 mb-2">
                    <label for="city">City </label>
                    <input type="text" class="form-control" id="city" name="city" v-model="family.city" >        
                </div>
                <div class="col-md-4 mb-2">                                    
                    <label for="state">State </label>
                    <select class="form-control" id="state" name="state" v-model="family.state">                                        
                        <option :value="index" v-for="(state, index) in states" :key="index">{{state}}</option>                                                  
                    </select>                                 
                </div>
                <div class="col-md-4 mb-2">
                    <label for="zip">Zip Code </label>
                    <input type="text" class="form-control" id="zip" name="zip" v-model="family.zip" >        
                </div>
            </div>                            

          
        
            </div>
        </div>

        <div class="card mt-5">
            <div class="card-header text-white bg-primary"><h5>Emergency Contact </h5> </div>
            <div class="card-body">                       
                <div class="row justify-content-md-start">
                    <div class="col-md-3 mb-2">
                        <label for="ec_first_name">First Name </label>
                        <input type="text" class="form-control" id="ec_first_name" name="ec_first_name" v-model="family.ec_first_name" >        
                    </div>
                    <div class="col-md-3 mb-2">
                        <label for="ec_last_name">Last Name </label>
                        <input type="text" class="form-control" id="ec_last_name" name="ec_last_name" v-model="family.ec_last_name" >        
                    </div>
                    <div class="col-md-3 mb-2">
                        <label for="ec_phone">Phone </label>
                        <input type="text" class="form-control" id="ec_phone" name="ec_phone" v-model="family.ec_phone" >        
                    </div>
                    <div class="col-md-3 mb-2">
                        <label for="ec_relationship">Relationship </label>
                        <input type="text" class="form-control" id="ec_relationship" name="ec_relationship" v-model="family.ec_relationship" >        
                    </div>
                </div>
            </div>
        </div>     
        
    <div class="card mt-5">
        <div class="card-header text-white bg-primary"><h5>Camp Additional Information</h5> </div>
        <div class="card-body">
              <div class="row justify-content-md-start">
                <div class="col col-md-6">
                    <div class="form-check form-check-inline">                   
                    <input class="form-check-input" type="checkbox" id="camp1_early_drop_off" name="camp1_early_drop_off" v-model="family.camp1_early_drop_off">
                    <label class="form-check-label" for="camp1_early_drop_off">Camp 1 Early drop off (7am to 9am)</label>
                    </div>
                </div>
                 <div class="col col-md-6">
                    <div class="form-check form-check-inline ">                       
                        <input class="form-check-input" type="checkbox" id="camp2_early_drop_off" name="camp2_early_drop_off" v-model="family.camp2_early_drop_off">
                        <label class="form-check-label" for="camp2_early_drop_off">Camp 2 Early drop off (7am to 9am) </label>
                    </div>
                </div>
            </div>

            <div class="row justify-content-md-start">               
                <div class="col col-md-6">   
                    <div class="form-check form-check-inline">                                                 
                        <input class="form-check-input" type="checkbox" id="camp1_late_pickup" name="camp1_late_pickup" v-model="family.camp1_late_pickup">
                        <label class="form-check-label" for="camp1_late_pickup">Camp 1 Late Pickup (4pm to 6pm) </label>
                    </div>
                </div>
                
                <div class="col col-md-6">
                    <div class="form-check form-check-inline">                        
                        <input class="form-check-input" type="checkbox" id="camp2_late_pickup" name="camp2_late_pickup" v-model="family.camp2_late_pickup" >
                        <label class="form-check-label" for="camp2_late_pickup">Camp 2 Late Pickup (4pm to 6pm) </label>
                    </div>
                </div>

            </div>
        </div>
    </div>


       <div class="row justify-content-md-end">
            <div class="col-md-3 mt-2">
                <button class="btn btn-primary " type="submit" name="add" value="add" @click.prevent="save()">Save</button>       
                <router-link class="btn btn-secondary" :to="'/show/family/' + family.id">Cancel</router-link>       
            </div>
       </div>
   </form>
</template>

<script>
export default {
    name : "Edit",
    data : function() {
        return {
            family : {},
            states : {}
        }
    },
    props : [
    ],
    beforeCreate() {         
        this.axios.get('/api/v1/family/' + this.$route.params.id)
        .then(res => {           
            this.family = res.data.family; 
            this.states = res.data.States;             
        })
        .catch(e => {
            alert(e);
        })
    },

    methods : {
        save : function() {
            this.axios.put('/api/v1/family/' + this.$route.params.id, this.family)
            .then(res => {           
                this.$router.push({path: "/show/family/" + this.$route.params.id})
            })
            .catch( e => alert(e) )               
        }
    }
}
</script>
