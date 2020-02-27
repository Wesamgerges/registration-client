<template>
    <form  >
        <div class="row justify-content-md-center">
            <div class="col-md-12 m-3 text-center h1"> I am the </div>
        </div>       
        <b-form-group class="row justify-content-md-center btn-group-toggle m-3">
            <b-form-radio-group
                id="parentsType"
                v-model="parentType"
                :options="types"
                buttons
                button-variant="outline-primary"
                size="lg m-4 col-md-11"
                >
            </b-form-radio-group>
        </b-form-group> 
    </form>
</template>

<script>

export default {
    name: 'Type',
    mounted: function() {
        this.$emit('can-continue', {value: true});
    },
    data() {
        return {
            parentType: 'father',          
            types: [
                { text: 'Father', value: 'father' },
                { text: 'Mother', value: 'mother' },         
            ],
        }
    },
    methods:{
        
    },
    activated() {
        this.$emit('can-continue', {value: true});
    },
    watch: {
        parentType: function(val) {          
            console.log("changed", val)
            this.$parent.$parent.type = this.parentType;
            this.$emit('can-continue', {value: true});
             
        }
    }
}
</script>
<style >
    label.btn {
    border-radius: 0.3rem !important; 
    }
</style>
