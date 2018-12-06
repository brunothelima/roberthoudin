<template>
  <component :is="tag" class="container">
      <slot/>
  </component>
</template>

<script>
export default {
  name: 'Container',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  width: $brakepoint-large;
  margin: auto;
  padding: 0 $gutter * 2;
  @media screen and (max-width: #{$brakepoint-large}) {
    width: $brakepoint-medium;
  }
  @media screen and (max-width: #{$brakepoint-medium}) {
    width: auto;
  }
}
</style>
