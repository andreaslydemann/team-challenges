//import axios from 'axios';
import { setAuthToken } from '../utils';

export namespace AuthService {
    export function signIn() {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);

        //const {data} = await axios.post(`${BASE_URL}/signIn`, userDetails);
        //login successful if there's a jwt token in the response
        //const token = data.Token;
        //sessionStorage.setItem('token', token);
        //setAuthToken(token);

        const user = {
            id: "u1",
            username: "username1",
            teamId: "team1"
        }

        return user;
    }

    export function register() {
        //const {data} = await axios.post(`${BASE_URL}/signUp`, userDetails).then(handleResponse);
        //const token = data.Token;
        //sessionStorage.setItem('token', token);
        //setAuthToken(token);

        return new Promise((resolve, reject) => {
            resolve({ ok: true, text: () => Promise.resolve() });
        });
    }

    export function signOut() {
        sessionStorage.setItem('token', null);
        setAuthToken(false);
    }

    /*
    function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    signOut();
                    location.reload(true);
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }*/
}