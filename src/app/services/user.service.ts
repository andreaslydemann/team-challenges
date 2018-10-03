//import axios from 'axios';

export namespace UserService {
    export function getUsers() {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);
        
        const teams = [{
            id: "team1",
            name: "Team Falcon",
        }];

        return new Promise(() => setTimeout(teams, 1000));
    }

    export function getUsersByTeamId(id: string) {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);

        const teams = [{
            id: "team1",
            name: "Team Falcon",
        },
        {
            id: "team2",
            name: "Team Roadster",
        }];

        return new Promise(() => setTimeout(teams, 1000));
    }

    /*
    function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout();
                    location.reload(true);
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }*/
}