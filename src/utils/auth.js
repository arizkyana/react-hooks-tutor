function Auth() {

  this.setToken = (token) => {
    localStorage.setItem('token', token);
  }

  this.getToken = () => {
    return localStorage.getItem('token');
  }

  this.logout = () => {
    localStorage.removeItem('token');
  }

}

export default new Auth();