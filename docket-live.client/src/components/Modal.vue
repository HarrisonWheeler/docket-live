<template>
<div class="modal fade" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="modal-title" class="modal-title" id="modalTitle">Modal title</slot>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <slot name="modal-body"></slot>
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

</style>
