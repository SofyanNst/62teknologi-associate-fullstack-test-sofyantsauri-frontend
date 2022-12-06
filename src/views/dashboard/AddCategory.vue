<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <SidebarVue></SidebarVue>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        Tambah kategori
                        <hr />
                        <div class="container">
                            <form @submit.prevent="store">

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

            const category = reactive({
                name: '',
            })

            const validation = ref([])

            const router = useRouter()

            function store() {

                let name = category.name

                axios.post('http://localhost:8000/api/category', {
                    name: name,
                }).then(response => {

                    if (response.data.success) {

                        return router.push({
                            name: 'category'
                        })
                    }

                }).catch(error => {

                    validation.value = error.response.data
                })

            }

            return {
                category,
                validation,
                router,
                store
            }

        }

    }
</script>