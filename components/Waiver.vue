<template>
    <div class="text-center m-5">
        <div class="h2"> Summer Camp 2019 <br/>Waiver </div>
        I hereby give permission to my child/children to participate in the summer camp and the trips organized by St. Mary & St. Mercurius Coptic Orthodox Church of Belleville, New Jersey [the Church].
        <br/><br/>

        As the parent/guardian of the child/children, I fully realize that there are risks inherent in the child's participation in this activity and I assume all such risks. Accordingly, I intending to be legally bound, hereby release and hold harmless the Church, its clergy, servants, agents and volunteers from any and all liability as a result of the student's participation in the activity, or any injury, loss, damage or incident occurring during my child’s participation in the activity regardless of any negligence on the part of Church, its clergy, servants, agents and volunteers.
        <br/> <br/>

        Furthermore, I also grant the Church, its clergy, servants, agents and volunteers full authority to take whatever action it considers warranted under the circumstances for the student's health and safety. Specifically, in case of a situation requiring medical treatment, I authorize the Church, its clergy, servants, agents and volunteers, at its discretion and at my expense, to place the above-named child in a hospital for medical services and treatment, or if no hospital is available, to obtain medical service and treatment from a doctor. In obtaining, authorizing, and supervising such medical service and treatment, the Church, its clergy, servants, agents and volunteers shall have the discretion to act in the same manner and with the same authority as I could act if present. This authorization is given with the understanding that if a situation arises requiring medical treatment, the Church, its clergy, servants, agents and volunteers will immediately attempt to notify the student's parent/guardian or emergency contact person named below and will continue in its efforts to notify the parent/guardian or emergency contact person until it has succeeded in doing so.
    </div>
</template>

<script>

export default {
    name : 'Waiver',
     props : {
        authUser : {},
    },

    data() {
        return {
        }
    },
    watch: {
        agree(val) {
            // this.$parent.$parent.family.waiver = val ? new Date() : null;           
            // this.$emit('can-continue', { value: val } ); 
        }
    },    
    methods: {
        //    validateStep(name) {   
        //     var refToValidate = this.$refs[name][0];
        //     return refToValidate.validate();
        // },
    }
}
</script>
