<template>
  <section :class="['home', {'home--active': introIsVisited}]">
  	<transition name="intro">
  		<v-intro v-if="!introIsVisited"/>
  	</transition>
  	<v-container class="home__grid" v-if="introIsVisited">
      <div class="home__img">
        <v-btn class="gallery-link" tag="router-link" to="/galeria">
          <v-svg :src="require('@/assets/img/camera.svg')" />
          VER GALERIA
        </v-btn>
        <picture>
          <source media="(min-width: 1024px)" srcset="@/assets/img/home-img.png">
          <img src="@/assets/img/home-img-2.png" alt="Flowers" style="width:auto;">
        </picture>
      </div>
  		<div class="home__info">
  			<!-- <h3>Eletroperformance</h3> -->
        <h1>Robert Houdin <br>Pra lá de <br>Marrakech <v-svg :src="require('@/assets/img/home-title-birds.svg')" /></h1>
  			<p>Andar sobre águas, desaparecer com elefantes, restaurar polegares... Parece que os mágicos são capazes de tudo. Mas, e acabar com uma guerra? Seria possível vencer uma batalha num passe de mágica? Andar sobre águas, desaparecer com elefantes, restaurar polegares... Parece que os mágicos são capazes de tudo. Mas, e acabar com uma guerra? Seria possível vencer uma batalha num passe de mágica?</p>
        <router-link to="/sobre">+ SAIBA MAIS</router-link>
  			<div class="home__logos">
  				<div class="realization">
  					<p>Realização:</p>
            <br>
  					<img src="@/assets/img/realization.png" alt="Realização">
  				</div>
  				<div class="support">
  					<p>Apoio:</p>
  					<img src="@/assets/img/support.png" alt="Apoio">
  				</div>
  			</div>
  		</div>
  	</v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Intro from '@/components/Intro.vue'
import Container from '@/components/Container.vue'
import SvgLoader from '@/components/SvgLoader';
import Btn from '@/components/Btn';

export default {
  name: 'Home', 
  components: {
    'v-intro': Intro,
    'v-container': Container,
    'v-svg': SvgLoader,
    'v-btn': Btn,
  },
	computed: {
	  ...mapGetters({
	    introIsVisited: 'intro/isVisited',
	  }),
	},
};
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(-44deg, #FFFFFF 50%, #{$color-light} 100%);
	.home__img,
	.home__info {
		opacity: 0;
	}
  &__grid {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media screen and (max-width: #{$brakepoint-large}) {
      display: block;
    }
  }
  &__img {
    position: relative;
    display: block;
    // box-shadow: 0 $gutter * 2 30px rgba($color-dark, .2);
    filter: drop-shadow(0px 16px 24px rgba(0,0,0,0.35));
    @media screen and (max-width: #{$brakepoint-large}) {
      margin-bottom: $gutter * 4;
      filter: none;
    }
    .gallery-link {
      position: absolute;
      z-index: 2;
      opacity: 0;
      left: 0; bottom: 0; top: 0;
      margin: auto;
      transform: translateX(-1vw);
    }
    img {
      display: block;
      max-width: 100%;
      margin: auto;
      clip-path: polygon(0 25%, 100% 0, 100% 100%, 0 75%);
      transition: filter $transition-duration / 2 ease-out;
      backface-visibility: hidden;
      @media screen and (max-width: #{$brakepoint-large}) {
        clip-path: unset;
      }
    }
  }
  &__info {
  	h1 {
  		display: inline-block;
  		position: relative;
  		margin: 0;
  		color: $color-dark;
  		padding-bottom: $gutter * 2;
  		.svg {
  			position: absolute;
  			bottom: 0;
  			width: 20vw;
  			max-width: 134px;
  		}
  	}
  	h3 {
  		margin-bottom: $gutter * 4;
  		font-size: 22px;
  	}
  	> p {
  		margin-bottom: $gutter * 2;
  		font-weight: lighter;
  		line-height: 200%;
  	}
    a {
      display: inline-block;
      margin-bottom: $gutter * 6;
      font-weight: bold;
      text-decoration: underline;
      color: $color-dark;
      @media screen and (max-width: #{$brakepoint-medium}) {
        margin-bottom: $gutter * 8;
      }
    }
    svg {
      max-width: 20vw;
    }
  }
  &__logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    p {
      margin-bottom: $gutter * 2;
      font-weight: bold;
    }
    > div {
      @media screen and (max-width: #{$brakepoint-large}) {
        margin-bottom: $gutter * 4;
      }
    }
  }
  &--active {
    .home__img {
      animation: img-in 1s $cubic-in $transition-duration forwards;
      a {
        opacity: 0;
        animation: img-in 1s $cubic-in ($transition-duration + 1s) forwards;
      }
    }
    .home__info {
      animation: info-in 1s $cubic-in $transition-duration forwards;
    }
  }
	@keyframes img-in {
	  from {
	    opacity: 0;
	    transform: translateX(-1vw);
	  }
	  to {
	    opacity: 1;
	    transform: translateX(0);
	  }
	}
  @keyframes info-in {
    from {
      opacity: 0;
      transform: translateX(1vw);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .intro-leave-active {
    opacity: 1;
    animation: intro-out 600ms $cubic-out forwards;
  }
}
@keyframes intro-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>