<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <a class="navbar-brand my-3" href="#"><img src="./assets/small-icon.png" width="34" height="34"> Restoran Sederhana</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link :to="{name: 'default'}" class="nav-link" href="#">Beranda</router-link>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" href="#">Register</a>
              </li> -->
              <li class="nav-item">
                <router-link :to="{name: 'login'}" class="nav-link" href="#">Login</router-link>
              </li>
            </ul>
          </div>
        </div>
    </nav>

    

  <router-view />
</template>

<script>

export default {
}
</script>

<style>
  @import '../src/assets/css/style.css';
</style>