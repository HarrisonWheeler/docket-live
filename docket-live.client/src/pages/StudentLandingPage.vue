<template>
<Navbar />
  <div class="container-fluid">
    <div class="row height justify-content-center align-items-center">
      <div class="col-md-4 col-11 bg-primary custom-card">
        <p class="ms-5 mb-1">Enter Poll Code!</p>
        <div class="d-flex justify-content-center">
        <input type="text" class="code-input w-75 text-center" placeholder="xxxx" maxlength="4">
        </div>
        <div class="d-flex justify-content-center my-3">
        <button class="btn btn-warning button w-50">Join</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.height{
  height: 90vh;
}

.custom-card{
  box-shadow: 0px 6px 0px #196895;
}

.code-input{
  background: #F2F2F2;
border-radius: 5px;
height: 5vh;
}

.button{
box-shadow: 0px 4px 0px #EAA95D;;
border-radius: 8px;
border: 1px solid rgba(248, 248, 248, 0.24);
box-sizing: border-box;
border-radius: 5px;
height: 70px;
}
</style>
