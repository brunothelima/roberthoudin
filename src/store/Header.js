const state = {
	visible: false,
	skin: 'light',
};

const getters = {
	isVisible: state => state.visible,
};

const mutations = {
	setVisibility(state, payload) {
		state.visible = payload;
	},
	setSkin(state, payload) {
		state.skin = payload;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
}