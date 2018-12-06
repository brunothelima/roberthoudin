import Vue from 'vue'
import Vuex from 'vuex'
import Intro from './Intro.js'
import Header from './Header.js'
import Gallery from './Gallery.js'

Vue.use(Vuex);

export default new Vuex.Store({
	namespaced: true,
	modules: {
		intro: Intro,
		header: Header,
		gallery: Gallery,
	},
});
