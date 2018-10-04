//import axios from 'axios';
import { SubmissionModel} from '../models';

export namespace SubmissionService {
    export function getSubmissions() {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);

        const submissions = [{
            id: "su1",
            status: SubmissionModel.Status.EVALUATED,
            createdAt: new Date(),
            challengeId: "ch1",
            teamId: "team1"
        }];

        return submissions;
    }

    export function getSubmissionsByTeamId(teamId: string) {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);

        const submissions = [{
            id: "su1",
            status: SubmissionModel.Status.EVALUATED,
            createdAt: new Date(),
            challengeId: "ch1",
            teamId: "team1"
        }];

        return submissions;
    }

    export function getSubmissionsByChallengeId(challengeId: string) {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);

        const submissions = [{
            id: "su1",
            status: SubmissionModel.Status.EVALUATED,
            createdAt: new Date(),
            challengeId: "ch1",
            teamId: "team1"
        }];

        return submissions;
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