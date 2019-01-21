
import api from '@/api'
const state = {
	currentTab : 'Abc',
	employeeList: []
}

const mutations = {
	CURRENT_TAB : (state, name) => {
		state.currentTab = name
	},
	EMPLOYEE_LIST: (state, value) => {
		state.employeeList = value
	}
}

const actions = {
	setCurrentName ({commit}, name){
		commit('CURRENT_TAB',name)
	},
	getEmployeeList({commit}, id){
		api.getDataViaApi('select1?id=' + id,
	(response) => {
		commit('EMPLOYEE_LIST',response.body)
	},
	(error) => {
		console.log(error)
		commit('EMPLOYEE_LIST',[])
	}
	)
}

}

const getters = {
	currentTab: (state) =>{
		return state.currentTab
	},
	getEmployeeRespone: (state) => {
		return state.employeeList
	}

}

export default {
	state,
	mutations,
	actions,
	getters
}
