//import axios from 'axios';

export namespace RatingService {
    export function getRatings() {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);

        const ratings = [{
            id: "ra1",
            scorePercentage: 10,
            comment: "Not bad",
            submissionId: "su1"
        }]

        return ratings;
    }

    export function getRatingsByTeamId(teamId: string) {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);

        const ratings = [{
            id: "ra1",
            scorePercentage: 10,
            comment: "Not bad",
            submissionId: "su1"
        }];

        return ratings;
    }

    export function getRatingsByChallengeId(challengeId: string) {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);
        
        const ratings = [{
            id: "ra1",
            scorePercentage: 10,
            comment: "Not bad",
            submissionId: "su1"
        }];

        return ratings;
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