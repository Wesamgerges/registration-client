<template>
<div>
    <form-wizard @on-complete="onComplete"
                shape="circle"
                color="#e74c3c">
      <tab-content title="Personal details"
                  
                   icon="ti-user">
                   <father></father>
      </tab-content>
      <tab-content title="Additional Info"
                   
                   icon="ti-settings">
                   <mother></mother>
      </tab-content>
      <tab-content title="Last step"
                   route="/third"
                   icon="ti-check">
      </tab-content>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      
    </form-wizard>
 </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import father from '~/components/parent/Father';
import mother from '~/components/parent/Father';

export default {
    auth: false,
    layout: "plain",
    components: {
        FormWizard,
        TabContent,
        father,
        mother
    },
    methods: {
        onComplete: function(){
            alert('Yay. Done!');
        },
        test: function(){
        }
    }
}
</script>

<style>

</style>