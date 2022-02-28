<template>
  <div>
    <BaseImage
      :img-src="listImage[curImage].src_1"
      @next-image="nextImage()"
      imageCaption="caption"
    ></BaseImage>
    <figure
      @click="openModal()"
      data-embed-type="gallery"
      data-img-src="https://www.gamespot.com/a/uploads/original/1585/15855271/3941294-ss_df1ac5e02d8db6a02a66a4bea9e2e0ff083d8a01.600x338.jpg,https://www.gamespot.com/a/uploads/original/1585/15855271/3941295-ss_4d9bd8d16f4306bb64fa3d68df7928372d3dde91.600x338.jpg,https://www.gamespot.com/a/uploads/original/1585/15855271/3941296-ss_955817273e7cc1dbf6d73ace3be2ac7f6d18d2b8.600x338.jpg,https://www.gamespot.com/a/uploads/original/1585/15855271/3941297-ss_0c511936d8d734bf49108f979231702e8eefe186.600x338.jpg,https://www.gamespot.com/a/uploads/original/1585/15855271/3941298-ss_0b880e06e91915550e318227da7c4afb41bffad5.600x338.jpg,https://www.gamespot.com/a/uploads/original/1585/15855271/3941299-ss_c84787fb55bafeb37b876ce2c40941b28bffdd2e.600x338.jpg"
      data-ref-id="1300-3941294,1300-3941295,1300-3941296,1300-3941297,1300-3941298,1300-3941299"
      data-resize-urls="https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941294-ss_df1ac5e02d8db6a02a66a4bea9e2e0ff083d8a01.600x338.jpg,https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941295-ss_4d9bd8d16f4306bb64fa3d68df7928372d3dde91.600x338.jpg,https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941296-ss_955817273e7cc1dbf6d73ace3be2ac7f6d18d2b8.600x338.jpg,https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941297-ss_0c511936d8d734bf49108f979231702e8eefe186.600x338.jpg,https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941298-ss_0b880e06e91915550e318227da7c4afb41bffad5.600x338.jpg,https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941299-ss_c84787fb55bafeb37b876ce2c40941b28bffdd2e.600x338.jpg"
    >
      <div class="image-gallery__label">Gallery {{ curImage }}</div>

      <div class="image-gallery__list hide-scrollbar">
        <a v-for="(item, index) in listImage" :key="index">
          <img
            :src="item.src_resize"
            :alt="item.alt"
            :data-full-srcset="`${item.src_1} 600w, ${item.src_resize} 480w`"
          />
        </a>
      </div>
    </figure>
    <BaseModal :openModal="isModalOpen" @close-modal="closeModal">
      <h1>tessst</h1>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import BaseImage from '@/components/common/BaseImage.vue';
import BaseModal from '@/components/common/BaseModal.vue';

const isModalOpen = ref(false)

const listImage = reactive([
  {
    src_1: 'https://www.gamespot.com/a/uploads/original/1585/15855271/3941294-ss_df1ac5e02d8db6a02a66a4bea9e2e0ff083d8a01.600x338.jpg',
    src_resize: 'https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941294-ss_df1ac5e02d8db6a02a66a4bea9e2e0ff083d8a01.600x338.jpg',
    alt: 'Gallery image 1'
  },
  {
    src_1: 'https://www.gamespot.com/a/uploads/original/1585/15855271/3941295-ss_4d9bd8d16f4306bb64fa3d68df7928372d3dde91.600x338.jpg',
    src_resize: 'https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941295-ss_4d9bd8d16f4306bb64fa3d68df7928372d3dde91.600x338.jpg',
    alt: 'Gallery image 2'
  },
  {
    src_1: 'https://www.gamespot.com/a/uploads/original/1585/15855271/3941296-ss_955817273e7cc1dbf6d73ace3be2ac7f6d18d2b8.600x338.jpg',
    src_resize: 'https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941296-ss_955817273e7cc1dbf6d73ace3be2ac7f6d18d2b8.600x338.jpg',
    alt: 'Gallery image 3'
  },
  {
    src_1: 'https://www.gamespot.com/a/uploads/original/1585/15855271/3941297-ss_0c511936d8d734bf49108f979231702e8eefe186.600x338.jpg',
    src_resize: 'https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941297-ss_0c511936d8d734bf49108f979231702e8eefe186.600x338.jpg',
    alt: 'Gallery image 4'
  },
  {
    src_1: 'https://www.gamespot.com/a/uploads/original/1585/15855271/3941298-ss_0b880e06e91915550e318227da7c4afb41bffad5.600x338.jpg',
    src_resize: 'https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941298-ss_0b880e06e91915550e318227da7c4afb41bffad5.600x338.jpg',
    alt: 'Gallery image 5'
  },
  {
    src_1: 'https://www.gamespot.com/a/uploads/original/1585/15855271/3941299-ss_c84787fb55bafeb37b876ce2c40941b28bffdd2e.600x338.jpg',
    src_resize: 'https://www.gamespot.com/a/uploads/square_avatar/1585/15855271/3941299-ss_c84787fb55bafeb37b876ce2c40941b28bffdd2e.600x338.jpg',
    alt: 'Gallery image 6'
  },
])

const curImage = ref(0)

// methods
const openModal = () => {
  console.log(isModalOpen.value);

  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const nextImage = () => {
  curImage.value = (curImage.value < listImage.length) ? curImage.value + 1 : 0 
}

</script>

<style lang="scss" scoped>
.image-gallery__list {
  img {
    max-width: 100px;
  }
}
</style>