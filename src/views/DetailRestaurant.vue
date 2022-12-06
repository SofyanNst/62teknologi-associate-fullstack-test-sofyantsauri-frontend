<template>
    <section id="cover">
        <div class="container-fluid bg-cover">
            <div class="container">
                <div class="row">
                    <div class="col text-center mt-5 mb-5">
                        <h1>Temukan Restoran <br> Favorit Anda</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="information">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-5 mx-2">
               <img src="../assets/rm.png" class="img-fluid">
            </div>
            <div class="col-md-6 mx-1">
                <h3>{{ restaurant.name }}</h3>
                <h5 class="mb-4">{{ restaurant.address }}</h5>
                <hr>
                <p class="lh-lg detail-restaurant">{{ restaurant.detail }}</p>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default{

    setup() {

        const restaurant = reactive({
            name: '',
            category: '',
            address: '',
            detail: '',
        })

        const validation = ref([])

        const router = useRouter()

        const route = useRoute()

        onMounted(() => {

            axios.get(`http://localhost:8000/api/restaurant/${route.params.id}`)
            .then(response => {

              restaurant.name    = response.data.data.name  
              restaurant.category  = response.data.data.category  
              restaurant.address  = response.data.data.address  
              restaurant.detail  = response.data.data.detail  

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        return {
            restaurant,
            validation,
            router,
        }
    }
}
</script>