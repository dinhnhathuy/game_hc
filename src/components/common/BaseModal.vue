<template>
  <transition name="modal-fade">
    <div v-if="openModal" class="modal-wrapper" :class="[modalWrapperClass]">
      <div class="modal-overlay" @click="$emit('close-modal')"></div>
      <div class="modal-content" :class="[modalClass]" :style="modalCustomStyles">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  modalStyles: {
    type: Object,
    default: () => ({
      'margin-top': '10%'
    })
  },
  modalClass: {
    type: String,
    default: ''
  },
  modalWrapperClass: {
    type: String,
    default: ''
  },
  openModal: {
    type: Boolean,
    default: true
  }
})

const modalCustomStyles = computed(() => ({
  height: props.modalStyles.height || 'fit-content',
  width: props.modalStyles.width || '500px',
  ...props.modalStyles
}))
</script>

<style lang="scss" scoped>
.modal-wrapper,
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modal-wrapper {
  display: flex;
  justify-content: center;
  z-index: 2;
  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modal-content {
    text-align: center;
    background-color: white;
    padding: 60px 0;
    border-radius: 20px;
    z-index: 5;
  }
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
