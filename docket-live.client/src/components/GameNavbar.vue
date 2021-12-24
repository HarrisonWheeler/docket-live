<template>
  <div class="row my-2">
    <div class="col-md-6 col-4 d-flex align-items-center">
    <i class="mdi mdi-eye nav-icon mdi-24px"></i>
    <i class="mdi mdi-arrow-right-thin nav-icon ms-5"></i>

    </div>

    <div class="col-md-6 col-8 d-flex align-items-center justify-content-end">
      <button class="btn nav-btn me-5 w-25 d-none d-md-block">Cancel Poll</button>
      <button class="btn nav-btn me-5 w-50 d-block d-md-none">Cancel Poll</button>
      <i class="mdi mdi-music-note-eighth nav-icon mdi-36px" @click="toggleAudio" v-if="!muted"></i>
      <i class="mdi mdi-volume-mute nav-icon mdi-36px" @click="toggleAudio" v-else></i>
    <audio loop  id="theme">
    <source src="../assets/audio/Docket-live-theme.mp3"></audio>
    </div>
  </div>
</template>


<script>
import { onMounted, ref } from "@vue/runtime-core"
export default {
  setup(){
    const muted = ref(false)
    onMounted(() => {
      setTimeout(() => {
        const song = document.getElementById('theme')
        song.play()
      }, 2000)
    })
    return {
      muted,
      toggleAudio(){
        muted.value = !muted.value
        const music = document.getElementById('theme')
        muted.value ? music.pause() : music.play()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.nav-icon{
  color: #ABC1CD;
}

.nav-btn{
  border: 2px solid #ABC1CD;
box-sizing: border-box;
border-radius: 50px;
color: #ABC1CD;
}
</style>
