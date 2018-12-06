<template>
  <section class="gallery">
	  <v-container>
		  <div class="gallery__header">
		  	<h1>Galeria <sup>{{count}}</sup></h1>
		 <!--  	<div class="gallery__filters">
		  		<span>Fotos</span><hr>
		  		<span>Vídeos</span><hr>
		  		<span class="active">Todos</span>
		  	</div> -->
		  </div>
	  </v-container>
	  <gallery-pannel :images="images" @zoom="zoom = $event"/>
    <div class="gallery__zoom" v-if="zoom">
      <div class="mask" @click="zoom = null"></div>
      <div class="close" @click="zoom = null">
        <v-svg :src="require('@/assets/img/close.svg')" />
      </div>
      <img :src="zoom">
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';
import Container from '@/components/Container.vue'
import SvgLoader from '@/components/SvgLoader';
import GalleryPanel from './GalleryPanel';

export default {
  name: 'Home', 
  components: {
    'v-container': Container,
    'v-svg': SvgLoader,
    'gallery-pannel': GalleryPanel,
  },
  computed: {
    ...mapState({
      images: state => state.gallery.images,
    }),
    ...mapGetters({
      count: 'gallery/count',
    }),
  },
  data() {
  	return {
      zoom: null,
  	};
  },
  async created() {
    await this.$store.dispatch('gallery/getImages');
  },
};
</script>

<style lang="scss">
.gallery {
	min-height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(135deg, #{$color-dark} 0%, #000000 100%);
  &__header {
  	display: flex;
  	align-items: center;
  	justify-content: space-between;
  	margin-bottom: $gutter * 2;
  	h1 {
  		justify-self: flex-start;
  		color: $color-light;
  		sup {
  			font-size: 16px;
  			font-family: 'Roboto Slab';
  		}
  	}
  	.gallery__filters {
  		display: flex; 
  		align-items: center;
			hr {
				display: inline-block;
				height: $gutter * 2;
				width: 1px;
				background-color: rgba($color-light, 0.6);
			}
  		span {
  			display: inline-block;
  			color: $color-light;
  			padding: $gutter / 3 $gutter;
  			margin: 0 $gutter;
  			cursor: pointer;
  			transition: opacity $transition-duration ease-out,
  				background-color $transition-duration ease-out;
  			&.active {
  				background-color: $color-light;
  				color: $color-dark;
  				background-image: linear-gradient(-44deg, #FFFFFF 50%, #{$color-light} 100%);
  				cursor: default;
  			}
  			&:hover:not(.active) {
  				opacity: 0.6;
  			}
  		}
  	}
  }
  &__zoom {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    animation: fade-in $transition-duration ease-out forwards;
    .mask {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color-dark, 0.8);
    }
    img {
      position: absolute;
      z-index: 2;
      display: block;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-width: 95%;
      max-height: 95%;
    }
    .close {
      position: absolute;
      display: block;
      z-index: 3;
      left: 0;
      right: 0;
      top: $gutter * 4;
      margin: auto;
      width: 40px;
      height: 40px;
      background-color: white;
      color: $color-light;
      border-radius: 50%;
      cursor: pointer;
      svg {
        display: block;
        max-width: 100%;
        margin: auto;
        polygon {
          fill: $color-dark;
        }
      } 
    }
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
}
</style>