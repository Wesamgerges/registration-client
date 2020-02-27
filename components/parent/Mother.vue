<template>
   <EditParent v-model="parent"></EditParent>
</template>

<script>
import EditParent from './Edit';

export default {
    components: {
        EditParent,
    },
     data() {
        return {
            parent: {}
        }
    },
    mounted() {
        this.parent = this.$parent.$parent.family.mother;
    },
    watch: {
        parent(){
            this.$parent.$parent.family.mother = this.parent
        },
    }
}
</script>