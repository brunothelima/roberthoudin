<template>
  <header :class="['header', `header--${skin}`, {'header--visible': isVisible}]">
    <router-link to="/" class="center">
      <v-svg :src="require('@/assets/img/logo.svg')" />
    </router-link>
    <div class="right">
      <router-link to="/imprensa">SOBRE</router-link>
      <router-link to="/galeria">GALERIA</router-link>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SvgLoader from '@/components/SvgLoader';

export default {
  name: 'Header',
  components: {
    'v-svg': SvgLoader,
  },
  computed: {
    ...mapState({
      skin: state => state.header.skin,
    }),
    ...mapGetters({
      isVisible: 'header/isVisible',
    }),
  },
};
</script>

<style lang="scss" scoped>
$component: '.header';
#{$component} {
  position: absolute;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  z-index: 9;
  box-sizing: border-box;
  width: 100%;
  height: $header-height;
  top: 0;
  left: 0;
  padding: 0 $gutter * 2;
  .center {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    justify-self: left; 
    @media screen and (max-width: #{$brakepoint-large}) {
      grid-column: 1 / 2;
      justify-self: left; 
    }
    .svg {
      display: block;
      /deep/ svg {
        height: $header-height - $gutter * 4;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-self: right;
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    > * {
      margin: 0 $gutter;
      @media screen and (max-width: #{$brakepoint-medium}) {
        margin: 0 $gutter;
      }
    }
    a {
      &.router-link-exact-active {
        opacity: 0.6;
      }
    }
  }
  hr {
    display: inline-block;
    height: $gutter * 4;
    width: 1px;
    background-color: $color-dark;
  }
  a {
    text-decoration: none;
    color: $color-dark;
    font-family: 'Wremena';
    font-weight: bold;
    transition: opacity $transition-duration ease-out,
      color $transition-duration ease-out;
    &:hover {
      opacity: 0.6;
    }
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: $color-dark;
    box-shadow: 0 2px 4px rgba(black, .1);
    transition: background-color $transition-duration ease-out;
    @media screen and (max-width: #{$brakepoint-large}) {
      height: 22px;
      width: 22px;
    }
    /deep/ svg {
      display: block;
      height: 16px;
      width: 16px;
      @media screen and (max-width: #{$brakepoint-large}) {
        height: 12px;
        width: 12px;
      }
    }
  }
  /deep/ svg path,
  /deep/ svg tspan  {
    transition: fill $transition-duration ease-out;
  }

  &--dark { 
    .social, hr {
      background-color: $color-light;
    }
    a {
      color: $color-light;
    }
    .center {
      /deep/ svg path {
        fill: $color-light;
      } 
    }
    .right {
      /deep/ svg path {
        fill: $color-dark;
      }
    }
    /deep/ svg tspan  {
      fill: $color-dark;
    }
  }
}
</style>
