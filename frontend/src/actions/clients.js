import axios from 'axios'
import { GET_CLIENTS, DELETE_CLIENTS, ADD_CLIENTS } from './types'

export const getClients = () => dispatch => {
	axios.get('/api/clients/')
		.then(res => {
			dispatch({
				type: GET_CLIENTS,
				payload: res.data
			})
		})
}

export const deleteClient = (id) => dispatch => {
	axios.delete(`/api/clients/${id}/`)
		.then(res => {
			dispatch({
				type: GET_CLIENTS,
				payload: id
			})
		})
}

export const addClient = (client) => dispatch => {
	axios.post('/api/clients/', client)
		.then(res => {
			dispatch({
				type: ADD_CLIENTS,
				payload: res.data
			})
		})
}