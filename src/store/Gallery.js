import Vue from 'vue';

const state = {
	images: [],
};

const getters = {
	count: state => state.images.length * 4,
};

const mutations = {
	setImages(state, images) {
		Vue.set(state, 'images', images);
	},
};

const actions = {
	getImages({commit}) {
		let endpoint = '/roberthoudin/get_images.php';
		return new Promise((resolve, reject) => {
			fetch(endpoint, {
				method: 'GET',
			}).then(resp => resp.json()).then(resp => {
				try {
					commit('setImages', resp);
					resolve(resp);
				} catch (err) {
				  reject(new Error(err));
				}
			});
		})
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}