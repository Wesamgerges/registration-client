<template>
    <div class="card" >
        <div class="text-center card-header"> Child Info </div>
        <form class="card-body" @submit.prevent="save">
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="first_name">First name</label>
                    <input type="text" class="form-control" id="first_name" name="first_name" v-model="child.first_name" required>        
                </div>
                <div class="col-md-6 mb-3">
                    <label for="last_name">Last name</label>
                    <input type="text" class="form-control" id="last_name" name="last_name" v-model="child.last_name" required>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                <label for="validationDefault03">Grade</label>
                <select class="form-control" id="grade" name="grade" v-model="child.grade" required>
                    <option :value="index" v-for="(grade, index) in Grades" :key="index">{{grade}}</option>             
                </select>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="dob">Date Of Birth</label>
                    <datepicker :calendar-button=true calendar-button-icon="fa fa-calendar" input-class="form-control" :typeable=true :bootstrap-styling=true id="dob" v-model="child.dob" name="dob" required></datepicker>                
                </div>        
            </div>

            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="t_shirt_size">T-Shirt Size</label>
                    <select class="form-control" id="t_shirt_size" name="t_shirt_size" v-model="child.t_shirt_size" required>                        
                        <option :value="index" v-for="(size, index) in T_Shirt_Sizes" :key="index">{{size}}</option>
                    </select>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="allergies">Allergies</label>
                    <input type="text" class="form-control" id="allergies" v-model="child.allergies" >                              
                </div>
            </div>

        <!-- Camps and Nady -->
        <div class="form-group">
            <div class="form-check form-check-inline">
                <input class="form-check-input" :disabled="!fiveYears" type="checkbox" id="camp1" name="camp1" value="1" v-model="child.camp1">
                <label class="form-check-label" for="camp1">Camp week 1 (7/8 - 7/12)</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" :disabled="!fiveYears" type="checkbox" id="camp2" name="camp2" value="2" v-model="child.camp2">
                <label class="form-check-label" for="camp2">Camp week 2 (8/5 - 8/9)</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" :disabled="!fourYears" type="checkbox" id="nady" name="nady" value="3" v-model="child.nady">
                <label class="form-check-label" for="nady">Nady Evenings (6/26 - 7/31)</label>
            </div>         
        </div>
       <div class="row justify-content-md-end">
            <div class="col-md-3 mt-2">
                <button class="btn btn-primary " type="submit" name="add" value="add" >Save</button>       
                <router-link class="btn btn-secondary" :to="'/show/family/' + child.family_id">Cancel</router-link>       
            </div>
        </div>
        </form>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
    name : "Child",
    components : {
        Datepicker
    },
    props : [],
    data() {
        return {
            child : {},
            Grades : {},
            T_Shirt_Sizes : {},  
            childId : "",              
        }
    },
    created() {   
        this.childId = (this.$route.params.id ? this.$route.params.id : "");
        this.familyId = this.$route.params.familyId;

        this.axios.get('/api/v1/child/' + this.familyId + "/" + this.childId )
        .then(res => {  
            this.child = res.data.child
            this.Grades = res.data.Grades;      
            this.T_Shirt_Sizes = res.data.T_Shirt_Sizes; 
        })
        .catch(e => alert(e) )            
    },
    methods : {
        save : function() {
            var method = 'post';
            var params = {}
            if(this.childId) {
                method = 'put';
                params = { id: this.childId }
            }
            axios({
                method : method ,
                url : '/api/v1/child/' + this.childId, 
                data : this.child,
            })
            .then(res => {                     
                this.$router.push({path: "/show/family/" + this.familyId})    
            })
            .catch(e => alert(e) )
        },      
    },

    computed : {
        fourYears : function() {
            return (new Date('October 1, 2015 23:59:59')) >= (new Date(this.child.dob))
        },
        fiveYears : function() {
           return (new Date('October 1, 2014 23:59:59')) >= (new Date(this.child.dob))
        }
    }
}
</script>
