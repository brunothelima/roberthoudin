<template>
  <transition-group name="intro" class="intro" @mousemove.native="setGradient($event)">
    <div class="intro__step step-1" v-if="currStep === 1" :key="1"><img src="@/assets/img/cia-logo.svg" alt="Compahia Homens de Palha"></div>
    <div class="intro__step step-2" v-if="currStep === 2" :key="2"><img src="@/assets/img/noah-logo.svg" alt="NOAH BR"></div>
    <div class="intro__step step-3" v-if="currStep === 3" :key="3"><p>Apresentam</p></div>
    <div class="intro__step step-4" v-if="currStep === 4" :key="4"></div>
   <!--  <div class="intro__step step-4" v-if="currStep === 4" :key="4">
      <p>Quando se sentir vazio</p>
      <p>Abra o seu coracao</p>
      <p>E deixe que o vento</p>
      <p>O complete.</p>
      <div class="bottom">
        <span class="intro__close" @click="$store.commit('intro/continue')">
          <v-svg :src="require('@/assets/img/bird-1.svg')" />
          <span>Continuar</span>
        </span>
      </div>
    </div> -->
  </transition-group>
</template>

<script>
import { mapState } from 'vuex';
import SvgLoader from '@/components/SvgLoader';

export default {
  name: 'Intro',
  components: {
    'v-svg': SvgLoader,
  },
  computed: {
    ...mapState({
      currStep: state => state.intro.step,
    }),
  },
  methods: {
    setGradient(e) {
      const x = e.pageX - this.$el.offsetLeft;
      const y = e.pageY - this.$el.offsetTop;
      this.$el.style.setProperty('--x', `${x}px`);
      this.$el.style.setProperty('--y', `${y}px`);
    }
  },
  mounted() {
    this.$store.dispatch('intro/initSteps');
  }
}
</script>

<style scoped lang="scss">
.intro {
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  --x: 50%;
  --y: 50%;
  background: url('../assets/img/loader.svg') $color-dark no-repeat center 95%;
  &:before {
    display: block;
    position: absolute;
    z-index: -1;
    content: '';
    top: var(--y);
    left: var(--x);
    width: 100vw;
    height: 100vw;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0.6;
    background-image: radial-gradient(closest-side at 50% 50%, #{lighten($color-dark, 3%)} 20%, #{$color-dark} 100%);
  }
  &__step {
    box-sizing: border-box;
    padding: $gutter * 2;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  .step-3 p,
  .step-4 p {
    font-size: 7vh;
    font-weight: bold;
    color: $color-light;
    font-family: 'Wremena';
  }
  $delay: 2s;
  .step-4 {
    p {
      margin-bottom: $gutter * 2;
      animation: phrase-in 1s $cubic-in forwards;
      transform: translateX(-1vw);
      opacity: 0;
      @media screen and (max-width: #{$brakepoint-medium}) {
        font-size: 6vh;
      }
    }
    p:nth-child(1) {
      animation-delay: $delay;
    }
    p:nth-child(2) {
      animation-delay: $delay * 2;
    }
    p:nth-child(3) {
      animation-delay: $delay * 3;
    }
    p:nth-child(4) {
      animation-delay: $delay * 4;
    }
    @keyframes phrase-in {
      from {
        opacity: 0;
        transform: translateX(-1vw);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
  .bottom {
    position: absolute;
    bottom: $gutter * 4;
    left: 0; right: 0;
    margin: 0;
    text-align: center;
    opacity: 0;
    animation: close-in 1s $delay * 5 $cubic-in forwards;
    text-align: center;
    .intro__close {
      display: inline-block;
      cursor: pointer;
      &:hover .svg {
        transform: translateY(-10px) rotate(90deg); 
      }
    }
    .svg {
      display: block;
      margin: 0 auto $gutter;
      transform: rotate(90deg);
      transition: transform $transition-duration $cubic-in;
    }
    span {
      color: $color-light;
    }
    @keyframes close-in {
      from {
        opacity: 0;
        transform: translateY(1vh);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  &-enter-active {
    opacity: 0;
    animation: step-in 1s $cubic-in 1s forwards;
  }
  &-leave-active {
    opacity: 1;
    animation: step-out 1s $cubic-out forwards;
  }
  @keyframes step-in {
    from {
      opacity: 0;
      transform: translateY(-1vh);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes step-out {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(1vh);
    }
  }
}
</style>
