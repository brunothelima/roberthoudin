<template>
  <div class="panel">
    <div class="panel__wrapper" v-if="ready">
  		<swiper ref="slider" :options="sliderOptions">
  			<swiper-slide class="panel__bird"> <v-svg :src="require('@/assets/img/bird-1.svg')" /></swiper-slide>
  			<swiper-slide v-for="(group, gIndex) in images" :key="gIndex">
  	  		<ul>
  	  			<li v-for="(image, iIndex) in group" :key="iIndex" 
              @click="$emit('zoom', `/roberthoudin/gallery/${image}`)">
              <div 
                :data-background="`/roberthoudin/gallery/${image}`" 
                class="swiper-slide swiper-lazy image">
              </div>
  	  				<div class="swiper-lazy-preloader"></div>
  	  			</li>
  	  		</ul>
  			</swiper-slide>
  		</swiper>
    </div>
    <v-container>
      <div class="panel__scrollbar" ref="scrollbar"></div>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';
import Container from '@/components/Container';
import SvgLoader from '@/components/SvgLoader';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  name: 'GalleryPanel', 
  components: {
    'v-svg': SvgLoader,
    'v-container': Container,
		swiperSlide,
    swiper,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
  	return {
      ready: false,
			sliderOptions: {
			  slidesPerView: 'auto',
			  freeMode: true,
			  preloadImages: false,
        spaceBetween: 8,
			  lazy: true,
			  watchSlidesVisibility: true,
			  mousewheel: {
			  	sensitivity: 0.5
			  },
			  scrollbar: {
			  	el: '.panel__scrollbar',
			  	hide: false,
			  	draggable: true,
			  	reverse: true,
			  },
			},
  	};
  },
  mounted() {
	  Vue.set(this.sliderOptions.scrollbar, 'el', this.$refs.scrollbar);
	  setTimeout(() => {
	    this.ready = true;
	  }, 100);
	},
};
</script>

<style lang="scss">
.panel {
  overflow: hidden;
  &__wrapper {
  	position: relative;
  	box-sizing: border-box;
  	padding-left: calc((100vw - #{$brakepoint-large - $gutter * 2}) / 2);
  	@media screen and (max-width: #{$brakepoint-large}) {
  		padding-left: calc((100vw - #{$brakepoint-medium}) / 2);
  	}  	
  	@media screen and (max-width: #{$brakepoint-medium}) {
  		padding: 0 $gutter;
  	}
  }
  &__bird {
  	width: 0 !important;
  	position: relative;
	  svg {
	  	position: absolute;
	  	left: 0;
	  	top: 0;
	  	bottom: 0;
	  	transform: scale(1.4) translateX(-150%);
	  	margin: auto;
	  	cursor: grab;
	  	&:active {
	  		cursor: grabbing;
	  	}
	  }
  } 
  &__scrollbar {
    height: 6px;
    background-color: rgba($color-light, 0.24);
    border-radius: 0;
    .swiper-scrollbar-drag {
      background-color: transparent;
      border: 0;
      background-image: linear-gradient(-90deg, rgba($color-light, 0) 5%, $color-light 50%, rgba($color-light, 0) 100%);
      border-radius: 0;
      cursor: grab;
      &:active {
        cursor: grabbing;
      }
    }
  }
  .swiper-container {
  	margin: 0 0 $gutter * 4;
    overflow: visible;
    width: 100%;
  }
  .swiper-wrapper {
  	overflow: visible;
    > .swiper-slide {
      width: 33.33%;
      height: 70vh;
      @media screen and (max-width: #{$brakepoint-large}) {
       height: 60vh;
       width: 50%;
      }
      @media screen and (max-width: #{$brakepoint-medium}) {
    	 width: 100%;
      }
    	&:nth-child(odd) ul {
  			li:nth-child(1) {
  				grid-row: 1 / 3;
  				grid-column: 1 / 3;
  			}
  			li:nth-child(2) {
  				grid-row: 3 / 4;
  				grid-column: 1 / 2;
  			}
  			li:nth-child(3) {
  				grid-row: 3 / 4;
  				grid-column: 2 / 3;
  			}
  			li:nth-child(4) {
  				grid-row: 4 / 5;
  				grid-column: 1 / 3;
  			}  	
  		}
  		&:nth-child(even) ul {
  			li:nth-child(1) {
  				grid-row: 1 / 2;
  				grid-column: 1 / 3;
  			}
  			li:nth-child(2) {
  				grid-row: 2 / 3;
  				grid-column: 1 / 2;
  			}
  			li:nth-child(3) {
  				grid-row: 2 / 3;
  				grid-column: 2 / 3;
  			}
  			li:nth-child(4) {
  				grid-row: 3 / 5;
  				grid-column: 1 / 3;
  			}  	
  		}
    }
  } 
  ul {
  	display: grid;
  	grid-template-rows: repeat(4, 1fr);
  	grid-template-columns: repeat(2, 1fr);
    grid-gap: $gutter;
    box-sizing: border-box;
  	width: 100%;
  	height: 100%;
  	list-style: none;
  	li {
      overflow: hidden;
      position: relative;
      .image {
        display: block;
        width: 100%;
        height: 100%;
    		background-position: center;
    		background-size: cover;
        cursor: zoom-in;
        transition: all $transition-duration ease-out;
        background-color: #000;
        &:hover {
          transform: scale(1.1) ;
          filter: grayscale(100%);
        }
      }
      .swiper-lazy-preloader:after {
        background-image: url('../../assets/img/loader.svg');
        background-repeat: none;
      }
  	}
  }
}
</style>