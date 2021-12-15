<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <h1 class="mt-5 title text-light">Docket.Live</h1>
    <div class="home-card bg-white rounded elevation-3 bg-primary h-50 d-flex align-items-center justify-content-center flex-column">
     <button class="btn btn-success login" @click="login">
      <b>LOGIN</b> </button>


    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AuthService } from "../services/AuthService"
export default {
  name: 'Home',
  setup(){
    return{
       user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@media (min-width: 600px) {
  .home{
    display: grid;
    height: 80vh;
    place-content: center;
    text-align: center;
    user-select: none;
    .home-card{
      width: 50vw;
          box-shadow: 0px 8px 0px #196895;
          border-radius: 8px;

      > img{
        height: 200px;
        max-width: 200px;
        width: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }

}


h1{
  font-family: 'Baloo Bhaijaan 2', cursive;
  text-shadow: 0px 4px 0px #ABC1CD;
  font-style: normal;
font-weight: normal;
font-size: 100px;
line-height: 157px;

}



.login{
box-shadow: 0px 4px 0px #509C7C;
border-radius: 8px;
border: 1px solid rgba(248, 248, 248, 0.24);
box-sizing: border-box;
border-radius: 5px;
width: 323px;
height: 89px;

}
</style>
