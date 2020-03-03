<template>
    <div class="container">
        <form-wizard @on-complete="onComplete"
            color="blue"
            error-color="#a94442"
            title=""
            subtitle="">
            <tab-content v-for="tab in tabs" 
                :key="tab.id"
                :title="tab.title"
                :icon="tab.icon"
                :before-change="()=>validateStep(tab.ref)">
                <vue-form-generator 
                    :model="model" 
                    :schema="schema[tab.id]"
                    :options="formOptions"
                    :ref="tab.ref">                               
                </vue-form-generator>
            </tab-content>
            <tab-content title="Waiver"
                         icon="ti-check"
                          :before-change="waiverfn">
                <waiver></waiver>
              
                    <vue-form-generator 
                    :model="model" 
                    :schema="schema[2]"
                    :options="formOptions"
                    ref="waiver"
                   
                >
                
                </vue-form-generator>
                
            </tab-content>

            <tab-content title="Last step"
                         icon="ti-check">
              <h4>Your json is ready!</h4>
              <pre>{{model}}</pre>
            </tab-content>
        </form-wizard>
    </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import VueFormGenerator from 'vue-form-generator'
import waiver from '~/components/Waiver'

import father from "~/models/father"
import mother from "~/models/mother"
export default {
    auth: false,
    layout: "plain",
    components: {
        FormWizard,
        "vue-form-generator": VueFormGenerator.component,
        TabContent,
         waiver,
    },
    data() {
        return {
            tabs: [
                {
                id: 0,
                title: "Father",
                icon: "ti-user",        
                model: "model",
                options: "formOptions",
                ref: "father",
          
            }, 
            {
                id: 1,
                title: "Mother",
                icon: "ti-user",
                model: "model",
                options: "formOptions",
                ref: "mother"
           
            }
            ],
            model: {
                father: {
                    firstName:  '',
                    lastName:   '',
                    phone:      '',
                    email:      '',
                },
                mother: {
                    firstName:  '',
                    lastName:   '',
                    phone:      '',
                    email:      '',
                },
                agree: false,
                waiver: null,              
            },
            formOptions: {
                validationErrorClass:   "has-error",
                validationSuccessClass: "has-success",
                validateAfterChanged:   true
            }, 
            
            
            schema : [father, mother, {
                fields : [{
                    type: "checkbox",
                    label: "I Agree",
                    model: "agree",
                    default: true,                   
                    required: true,
                    align: 'right',
                    // validator: (v)=>{  
                    //     if (v) {
                    //         return []
                    //     } else {
                    //         return ['Enter your primary phone number']
                    //     } 
                    // },
                    styleClasses: 'agree col-sm-12',
                    options: "formOptions",
                }]}
            ]
        }
    
    },
    methods: {
        waiverfn() {
            if(this.model.agree) {
                this.model.waiver = new Date() 
            }
            return this.model.agree
        },
        validateStep(name) {   
            var refToValidate = this.$refs[name][0];
            return refToValidate.validate();
        },
        onComplete: function() {
            alert('Yay. Done!!!');
        },
    }
}
</script>

<style>
.agree {
    margin-left: 45%;
    zoom: 200%;

}

</style>