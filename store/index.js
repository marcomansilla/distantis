export const strict = false;
import Vue from 'vue';
import axios from 'axios';
import Cookies from 'universal-cookie';

export const state = ()=>({
	auth:{
		is_logged:false,
		jwt_token:''
	}
});

export const mutations = {
	setAuth(state, payload){
		state.auth.is_logged=payload.is_logged;
		state.auth.jwt_token=payload.jwt_token;
	},
	test(){
		console.log('TESTING NUXTSERVERINIT');
	}
};

export const actions = {
	nuxtServerInit({ commit }, { req }){
		const cookies = new Cookies(req.headers.cookie);
		if (cookies.get('is_logged')==='true'){
			commit('setAuth', {is_logged:true, jwt_token:cookies.get('jwt_token')});
		}
	}
};

export const getters = {
	auth(state){
		return state.auth;
	}

};
