<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <v-container grid-list-sm fluid justify-start class="gallery">
          <v-layout row wrap>
            <v-flex
              xs4
              d-flex
              v-for="image in getImages" :key="image._id"
            >
              <GalleryItem
                :source="image.image"
                :imageId="image._id"
              />
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import GalleryItem from '../components/Gallery/GalleryItem'
import api from '../service/api'

export default {
  name: 'Gallery',
  components: {
    GalleryItem
  },
  data () {
    return {
      images: []
    }
  },
  mounted () {
    this.$emit('setTitle', 'Gallery')
    api().get('gallery').then(res => {
      this.images = res.data
    })
  },
  computed: {
    getImages: function () {
      return this.images
    }
  }
}
</script>

<style scoped>
  .gallery {
    padding: 0px;
  }
</style>
