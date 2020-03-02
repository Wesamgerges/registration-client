<template>
   <EditParent v-model="parent"></EditParent>
</template>

<script>
import EditParent from '~/components/parent/Edit'

export default {
    auth: false,
    layout: 'plain',
    components: {
        EditParent,
    },
     data() {
        return {
            parent: {}
        }
    },
    mounted() {
        // this.parent = this.$parent.$parent.family.mother;
    },
    watch: {
        parent(){
            // this.$parent.$parent.family.mother = this.parent
        },
    }
}
</script>