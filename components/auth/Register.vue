<template>
    <section class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-8 is-offset-2">
                <wizard 
                    :steps="registrationSteps" 
                    @completed-step="completeStep"
                    @stepper-finished="finish"                                                    
                >                     
                </wizard>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import wizard from 'vue-stepper';
// This components will have the content for each stepper step.
import type from './parent/Type';
import father from './parent/Father';
import mother from './parent/Mother';
import waiver from './Waiver';
import save from './family/Save';

    export default {
        name: "Register",
        props:[
            "user"
        ],
        components: {
            wizard,
        },
        mounted() {
            console.log(this.user)
        },
        data(){
            return {
                family: {
                    father: {},
                    mother: {},
                    waiver: null,                    
                },
                type: "father",
                email: "dkjslfd",
                password: "dfsd",
               
                registrationSteps: [                  
                    {
                        icon: 'wc',
                        name: 'type',
                        title: 'Type',                      
                        component: type,
                        completed: true

                    },
                    {
                        icon: 'person',
                        name: 'father',
                        title: 'Father',                      
                        component: father,
                    },
                    {
                        icon: 'person',
                        name: 'mother',
                        title: 'Mother',                      
                        component: mother,
                    },                    
                    {
                        icon: 'mail',
                        name: 'waiver',
                        title: 'waiver',                       
                        component: waiver,
                    },
                      {
                        icon: 'mail',
                        name: 'save',
                        title: 'Save',                      
                        component: save,
                    },
                ]
            }
        },
        methods: {
            // Executed when @completed-step event is triggered
            completeStep(payload) {
                if(payload.name == 'type') {
                    // this.family[this.type].email = this.email;
                    // this.family[this.type].password = this.password;
                    Object.assign(this.family[this.type], this.user)
                }               
            },

            // Executed when @stepper-finished event is triggered
            finish(payload) {
               this.$router.push({path: `/show/family/${this.familyId}` })
            }
        }
    }
</script>