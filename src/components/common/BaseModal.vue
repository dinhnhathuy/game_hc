<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal-content">
        <slot>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3)
  }

  .modal-content {
    text-align: center;
    background-color: white;
    height: 500px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.5s ease;
  }

</style>
