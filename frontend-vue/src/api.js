const baseUrl = 'https://powerful-plateau-63061.herokuapp.com/api'

const getUser = async () => {
  try {
    const response = await fetch(`${baseUrl}/user`)
    const user = response.json()
    return user
  } catch (err) {
    console.error(err)
  }
}

export default getUser
