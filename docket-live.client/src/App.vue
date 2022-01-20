<template>
  <header>
  </header>
  <main class="wrap">
    <router-view />
  <!-- <div class="position-absolute">
    <canvas id="bubble0" class="bubble"></canvas>
    <canvas id="bubble1" class="bubble"></canvas>
  </div> -->
  </main>
  <footer>

  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import {initBubbles} from './services/BubblesService'
export default {
  name: 'App',
  setup() {
    onMounted(() => {
      // initBubbles()
    })
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

body {
  margin: 0;
}

// .wrap {
//   overflow: hidden;
//   position: relative;
//   z-index: 0;
//   height: 100vh;
//   background: #536974;
//   align-items: center;
//   justify-content: center;
// }

.bubble {
  position: fixed;
  top:0;
  width: 100%;
  height: 100%;
}

</style>
