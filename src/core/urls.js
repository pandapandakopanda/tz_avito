const BASE_URL = 'api/v1'

const users = {
  users: () => `${BASE_URL}/users`,
  user: (id) => `${BASE_URL}/users/${id}`,
}

const token = `${BASE_URL}/api-token-auth`


const urls = {
  users, token
}
export default urls