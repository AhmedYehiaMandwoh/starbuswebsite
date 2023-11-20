import axios from 'axios';

class Auth {
    constructor () {
        this.token = window.localStorage.getItem('access_token');
        let userData = window.localStorage.getItem('user');
        this.user = userData ? JSON.parse(userData) : null;
        if (this.token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
        }
    }
    check () {
        return !! this.token;
    }
    logout () {
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('user');
        this.user = null;
    }
   

}
export default new Auth();
