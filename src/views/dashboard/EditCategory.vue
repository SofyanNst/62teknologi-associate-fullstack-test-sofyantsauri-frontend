<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <SidebarVue></SidebarVue>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        Ubah kategori
                        <hr />
                        <div class="container">
                            <form @submit.prevent="update">

                                <div class="form-group">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">Nama kategori</label>
                                    <input class="form-control" type="text" placeholder="Nama kategori"
                                        v-model="category.name">

                                    <div v-if="validation.name" class="mt-2 alert alert-danger">
                                        {{ validation.name[0] }}
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
        ref,
        onMounted
    } from 'vue'
    import {
        useRouter,
        useRoute
    } from 'vue-router'
    import axios from 'axios'

    export default {

        components: {
            'SidebarVue': SideBarVue
        },

        setup() {

            const category = reactive({
                name: '',
            })

            const validation = ref([])

            const router = useRouter()

            const route = useRoute()

            onMounted(() => {

                axios.get(`http://localhost:8000/api/category/${route.params.id}`)
                    .then(response => {

                        category.name = response.data.data.name

                    }).catch(error => {
                        console.log(error.response.data)
                    })

            })

            function update() {

                let name = category.name

                axios.put(`http://localhost:8000/api/category/${route.params.id}`, {
                    name: name,

                }).then(() => {

                    router.push({
                        name: 'category'
                    })

                }).catch(error => {

                    validation.value = error.response.data
                })

            }


            return {
                category,
                validation,
                router,
                update
            }

        }

    }
</script>