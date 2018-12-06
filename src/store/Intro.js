const state = {
	step: 0,
	lastStep: 3,
	visited: false,
	time: 3500,
	interval: () => {},
};

const getters = {
	isLastStep: state => state.step === state.lastStep,
	isVisited: state => state.visited === true,
};

const mutations = {
	nextStep(state) {
		state.step = state.step + 1;
	},
	continue(state) {
		state.visited = true;
		document.body.style.overflow = 'auto';
	},
};

const actions = {
	initSteps({commit, state, getters}) {
		document.body.style.overflow = 'hidden';
		state.interval = setInterval(_ => {
      commit('nextStep');
      if (getters.isLastStep) {
        clearInterval(state.interval);
        setTimeout(() => {
      		commit('continue');
        }, state.time);
      }
    }, state.time);
	},
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
}