<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <SidebarVue></SidebarVue>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        Data Restoran
                        <hr />
                        <div class="container">
                            <router-link :to="{ name: 'addrestaurant' }" class="btn btn-success">Tambah
                                restoran</router-link>
                        </div>
                        <div class="container mt-4">
                            <table class="table table-striped">
                                <thead>
                                    <th>No.</th>
                                    <th>Nama Restoran</th>
                                    <th>Alamat</th>
                                    <th>Kategori</th>
                                    <th>Aksi</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(restaurant, index) in restaurants" :key="index">
                                        <td>{{ ++index }}.</td>
                                        <td>{{ restaurant.name }}</td>
                                        <td>{{ restaurant.address }}</td>
                                        <td>{{ restaurant.category}}</td>
                                        <td>
                                            <router-link :to="{ name: 'editrestaurant', params: { id: restaurant.id } }"
                                                class="btn btn-sm btn-warning mr-1">EDIT</router-link>
                                            <button @click.prevent="restaurantDelete(restaurant.id)"
                                                class="btn btn-sm btn-danger ml-1">DELETE</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBarVue from '@/components/SideBar.vue'
    import axios from 'axios'
    import {
        ref
    } from '@vue/reactivity'
    import {
        onMounted
    } from '@vue/runtime-core'
    export default {

        components: {
            'SidebarVue': SideBarVue
        },

        setup() {

            let restaurants = ref([])

            onMounted(() => {
                axios.get('http://localhost:8000/api/restaurant')
                    .then(response => {

                        restaurants.value = response.data.data

                    }).catch(error => {
                        console.log(error.response.data)
                    })
            })

            function restaurantDelete(id) {

                axios.delete(`http://localhost:8000/api/restaurant/${id}`)
                    .then(() => {

                        restaurants.value.splice(restaurants.value.indexOf(id), 1);

                    }).catch(error => {
                        console.log(error.response.data)
                    })

            }

            return {
                restaurants,
                restaurantDelete
            }
        }


    }
</script>