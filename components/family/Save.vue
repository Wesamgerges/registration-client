<template>
    <div class="container mt-5">
        <loading v-if="loading"></loading>
        <div v-else>
            <div class="row justify-content-center">
                <div v-if="isSaved === true" class="h3 text-success">
                    <span class='fa fa-check-circle'></span>
                        Your information 
                        has been saved successfully!
                </div>
                <div v-if="isSaved === false" class="h3 text-danger">
                    <span class='fa times-circle'></span>Something went wrong while saving your information.
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import loading from '../Loading'

export default {
    name: "Save",
    components : {
      loading
    },
    props : {
    },
    data: function() {
        return {
          loading: true,
          message: "",
          isSaved: null,
        }
    },
    activated() {
        this.saveFamily()
    },
    methods: {
        saveFamily() {           
            this.axios.post('api/v1/family/', {family: this.$parent.$parent.family} )
            .then(res => {     
                this.isSaved = true;
                this.loading = false;    
                console.log(this.isSaved) 
                this.$parent.$parent.familyId = res.data.familyId;
                this.$emit('can-continue', {value: true});                                          
            }).catch(e => {
                this.isSave = false;
                console.log(e)
            })


            // var self = this;
            // setTimeout(() => {
            //     // console.log("family: ", self.$parent.$parent.family);
            //     // this.message = "<span class='fa fa-check-circle'></span>Your information has been saved successfully!!"
            //     // this.loading = false;
            //     // this.$emit('can-continue', {value: true});
            // }, 1000)
        }
    }
}
</script>

<style>

</style>
