import API from './config';

const getUser = () => {
  return fetch(`${API}/user`, { method: 'GET' })
    .then(response => {
      console.log((response))
      return response.json()
    }).catch(err => console.log(err))
}

export default getUser;