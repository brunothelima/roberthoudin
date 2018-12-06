<template>
  <component :is="tag" :href="href" :to="to" class="btn">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'GalleryLink', 
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  }
};
</script>

<style lang="scss">
.btn {
  height: 60px;
  padding: 0 $gutter * 4;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: $color-light;
  text-decoration: none;
  transition: transform $transition-duration / 2 ease-out,
    background-color $transition-duration / 2 ease-out,
    color $transition-duration /2 ease-out;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Wremena';
  color: $color-dark;
  line-height: 100%;
  // span {
  // }
  .svg {
    margin-right: $gutter * 2;
    svg {
      height: 20px;
      width: 30px;
      path {
        transition: fill $transition-duration / 2 ease-out;
      }
    }
  } 
  &:hover {
    background-color: $color-dark;
    transform: translateY(-1vw, -1vh);
    color: $color-light;
    .svg svg {
      path {
        fill: $color-light;
      }
    }
  }
}
</style>