<template>
  <header>
    <!-- <Navbar /> -->
  </header>
  <main>
    <router-view />
  </main>
  <footer>

  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),

    }
  }
  }

</script>
<style lang="scss">
@import "./assets/scss/main.scss";
main{
  background-image: url('src/assets/img/background.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
