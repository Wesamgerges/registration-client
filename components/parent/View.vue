<template>
    <div class="card mb-5">
        <div class="card-header text-white text-capitalize bg-primary"><h5>{{ parent.type ? (parent.type) : "" }}</h5> </div>
        <div class="card-body">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col col-md-3"> {{ parent.first_name + " " + parent.last_name }} </div>
                    <div class="col col-md-5"> {{ parent.email }} </div>
                    <div class="col col-md-3"> {{ parent.phone }} </div>
                    <div class="col col-md-1"><router-link class="btn btn-primary" :to="'/parent/' + parent.id">Edit</router-link></div>
                </div>
            </div>              
        </div>
    </div>        
</template>

<script>
export default {
    name : "Parent",
    props : [ "parent" ],
}
</script>
