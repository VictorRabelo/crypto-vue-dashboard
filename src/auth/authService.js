let token = null

export function login(username, password) {
  // Dummy login logic
  token = 'dummy-token'
  return Promise.resolve(token)
}

export function logout() {
  token = null
}

export function isAuthenticated() {
  return !!token
}
