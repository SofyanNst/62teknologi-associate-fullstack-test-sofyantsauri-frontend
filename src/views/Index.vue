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

    <section id="category">
        <div class="container category">
            <div class="row">
                <div class="col-md text-center">
                    <h2 class="mt-5 fw-bolder">Kategori</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-2 item-category text-center mt-3 mb-5 mx-2" v-for="(category, index) in categories" :key="index">
                    <p class="fs-4 mt-3">{{ category.name }}</p>
                </div>
            </div>
        </div>
    </section>

    <section id="item">
        <div class="container title">
            <div class="row mb-3 mt-2">
                <div class="col-md-7">
                    <h2>Daftar rumah makan</h2>
                </div>
                <div class="col-md-5">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Cari restoran" v-model="query">
                        <button class="btn btn-warning" type="button" id="button-addon2">Cari</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container item-restaurant">
            <div class="row justify-content-center">
                <div class="col-md-3 mt-2 mb-3" v-for="(restaurant, index) in restaurants" :key="index">
                    <div class="card text-center">
                        <img src="../assets/rm.png" class="card-img-top img-fluid">
                        <div class="card-body">
                            <h5 class="card-title">{{ restaurant.name }}</h5>
                            <p class="card-text">{{ restaurant.address }}</p>
                            <router-link :to="{ name: 'detailrestaurant', params: { id: restaurant.id } }"
                                                class="btn btn-sm btn-warning mr-1">Detail</router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section id="footer">
        <div class="container-fluid footer">
            <div class="container ">
                <div class="row">
                    <div class="col-md-1 mt-5">
                        <img src="../assets/logo.png" class="img-fluid">
                    </div>
                    <div class="col-md-2 mt-5">
                        <h1 class="fw-bolder">Restoran <br> Sederhana</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {
    setup() {

        let categories = ref([])
        let restaurants = ref([])

        onMounted(() => {

            axios.get('http://localhost:8000/api/category')
            .then(response => {

              categories.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            }),

            axios.get('http://localhost:8000/api/restaurant')
            .then(response => {

              restaurants.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        return {
            categories, restaurants,
        }

    }

}
</script>
