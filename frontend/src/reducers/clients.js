import { GET_CLIENTS, DELETE_CLIENTS, ADD_CLIENTS } from '../actions/types'

const initialState = {
	clients: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_CLIENTS:
			return {
				...state,
				clients: action.payload
			}
		case ADD_CLIENTS:
			return {
				...state,
				clients: [...state.clients, action.payload]
			}
		case DELETE_CLIENTS:
			return {
				...state,
				clients: state.clients.filter(client => client.id !== action.payload)
			}
		default:
			return state
	}
}