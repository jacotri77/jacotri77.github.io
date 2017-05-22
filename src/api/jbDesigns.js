import axios from 'axios'
import store from '../store'

export function postForm(form) {
	console.log('from api', form)
	axios.post('http://localhost:3001/forms',form).then(res=>{
		store.dispatch({
			type: 'POST_FORM',
			forms: form,
			
		})
	})
}