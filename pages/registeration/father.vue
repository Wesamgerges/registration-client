<template>
    <EditParent :clickedNext="clickedNext" v-model="parent"></EditParent>
</template>

<script>
import EditParent from '~/components/parent/Edit'
export default {
    auth: false,
    layout: 'plain',
    props: ['clickedNext', 'currentStep'],
    components: {
        EditParent,
    },   
    data() {
        return {
            parent: {}
        }
    },
    mounted() {
        // this.parent = this.$parent.$parent.family.father;
    },
    watch: {
        parent(){
            // this.$parent.$parent.family.father = this.parent
        },
        clickedNext(val) {
            console.log(val);
            this.$parent.wzfather = this.parent
        }

    }
}
</script>