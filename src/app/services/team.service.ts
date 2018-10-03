//import axios from 'axios';

export namespace TeamService {
    export function getTeams() {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);

        const teams = [{
            id: "team1",
            name: "Team Falcon",
            numberOfMembers: 0
        },
        {
            id: "team2",
            name: "Team Roadster",
            numberOfMembers: 0
        }];

        return teams;
    }

    export function getTeamsByChallengeId(id: string) {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);

        const teams = [{
            id: "team1",
            name: "Team Falcon",
            numberOfMembers: 0
        },
        {
            id: "team2",
            name: "Team Roadster",
            numberOfMembers: 0
        }];        

        return teams;
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