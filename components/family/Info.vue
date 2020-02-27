<template>
    <div class="card mb-5">
            <div class="card-header text-white bg-primary">
                <div class="row justify-content-md-end">
                    <div class="col col-md-10 family-header">
                        Family Information
                    </div>
                    <div class="col col-md-2">
                        <div class="round round-lg white ">
                            <span class="">${{due}}</span>
                        </div> 
                    </div>                   
                </div>
            </div>
            <div class="card-body">          
                <div class="row justify-content-md-start">                          
                    <div class="col col-md-10"> {{ address }} </div>
                    <div class="col col-md-2"> <router-link class="btn btn-primary" :to="'/edit/family/' + family.id">Edit</router-link></div>
                </div>
                <div class="row justify-content-md-start">                          
                    <div class="col col-md-12"> {{ emergencyContact }} </div>
                </div>
                <div class="row justify-content-md-end">                          
                    <div class="col col-md-6" >
                        <span class="badge badge-primary" v-if="family.camp1_early_drop_off">Camp 1 Early drop off</span>                           
                        <span class="badge badge-primary" v-if="family.camp1_late_pickup">Camp 1 Late Pickup</span>
                    </div>                       
                    <div class="col col-md-6">
                        <span class="badge badge-danger" v-if="family.camp2_early_drop_off">Camp 2 Early drop off</span>
                        <span class="badge badge-danger" v-if="family.camp2_late_pickup">Camp 2 Late Pickup</span>
                    </div>                      
                </div>
            </div>            
        </div>
        
</template>

<script>
export default {
    name : "Info",
    props : [ 'family' ],
     computed : {
         due : function() {
             return this.family.total - this.family.paid;
         },
        address : function() {      
            return ""
            + (this.family.address_line1 ? this.family.address_line1 : "")
            + ( this.family.address_line2 ? " " + this.family.address_line2 : "" )
            + ( this.family.city  ? " "  + this.family.city : "")
            + ( this.family.state ? ", " + this.family.state.toUpperCase() : "") 
            + ( this.family.zip ? ". " + this.family.zip : "" )
        },
        emergencyContact : function() {
            return ""
            + ( this.family.ec_first_name ? this.family.ec_first_name : "")
            + (  this.family.ec_last_name  ? " " + this.family.ec_last_name : "")
            + ( this.family.ec_phone ? " (" + this.family.ec_phone + ") " : "" )
            + ( this.family.ec_relationship ? " - " + this.family.ec_relationship : "");
        }
    },
}
</script>

