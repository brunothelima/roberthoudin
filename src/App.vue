<template>
	<div class="robert-houdin">
		<!-- <audio autoplay oncanplaythrough="this.play();" style="opacity: 0;">
			<source src="@/assets/soundtrack.mp3" type="audio/mpeg">
		</audio> -->
		<v-header />
		<transition name="page" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App', 
  components: {
    'v-header': Header,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import './assets/fonts/_fonts';

* {
	padding: 0;
	margin: 0;
	border: none;
}
body {
	font-family: 'Open Sans';
	color: $color-dark;
	// line-height: 200%;
}
h1 {
	font-family: 'Wremena';
	font-size: 7vh;
	line-height: 120%;
	font-weight: bold;
}
.robert-houdin {
	box-sizing: border-box;
}
.page {
  &-enter,
  &-leave {
    z-index: 2;
  }
  &-enter-active {  
    animation: page-transition $transition-duration $cubic-in forwards;
  }
  &-leave-active {
    animation: page-transition $transition-duration $cubic-out forwards reverse;
  }
}
section {
	padding-top: $header-height + $gutter * 2;
	box-sizing: border-box;
  min-height: 100vh;
}
@keyframes page-transition {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>