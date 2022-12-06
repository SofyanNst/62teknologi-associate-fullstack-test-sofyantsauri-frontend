<template>
    <div>
        <div class="container-fluid mt-5">
            <div class="row">
                <SidebarVue></SidebarVue>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            Tambah restoran
                            <hr />
                            <form @submit.prevent="store">
                                <div class="form-group">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">Nama Restoran</label>
                                    <input class="form-control" type="text" placeholder="Nama Restoran"
                                        v-model="restaurant.name">

                                    <div v-if="validation.name" class="mt-2 alert alert-danger">
                                        {{ validation.name[0] }}
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">kategori</label>
                                    <input class="form-control" type="text" placeholder="Kategori"
                                        v-model="restaurant.category">

                                    <div v-if="validation.category" class="mt-2 alert alert-danger">
                                        {{ validation.category[0] }}
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">Alamat</label>
                                    <input class="form-control" type="text" placeholder="Alamat"
                                        v-model="restaurant.address">

                                    <div v-if="validation.address" class="mt-2 alert alert-danger">
                                        {{ validation.address[0] }}
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Detail Restoran</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        v-model="restaurant.detail"></textarea>

                                    <div v-if="validation.detail" class="mt-2 alert alert-danger">
                                        {{ validation.detail[0] }}
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary mt-3">Simpan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBarVue from '@/components/SideBar.vue'
    import {
        reactive,
        ref
    } from 'vue'
    import {
        useRouter
    } from 'vue-router'
    import axios from 'axios'

    export default {

        components: {
            'SidebarVue': SideBarVue
        },

        setup() {

            const restaurant = reactive({
                name: '',
                category: '',
                address: '',
                detail: '',
            })

            const validation = ref([])

            const router = useRouter()

            function store() {

                let name = restaurant.name
                let category = restaurant.category
                let address = restaurant.address
                let detail = restaurant.detail

                axios.post('http://localhost:8000/api/restaurant', {
                    name: name,
                    category: category,
                    address: address,
                    detail: detail,
                }).then(response => {

                    if (response.data.success) {

                        return router.push({
                            name: 'restaurant'
                        })
                    }

                }).catch(error => {

                    validation.value = error.response.data
                })

            }

            return {
                restaurant,
                validation,
                router,
                store
            }

        }

    }
</script>