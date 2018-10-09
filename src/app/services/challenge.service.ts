//import axios from 'axios';

export namespace ChallengeService {
//const BASE_URL = "https://team-challenges.com/api"

    export function getChallenges() {
        //return axios.get(`${BASE_URL}/getChallenges`).then(handleResponse);

        const challenges = [{
            id: "ch1",
            name: 'Challenge 1',
            description: 'This is a challenge',
            createdAt: new Date()
          },
          {
            id: "ch2",
            name: 'Challenge 2',
            description: 'This is a challenge',
            createdAt: new Date()
          }, {
            id: "ch3",
            name: 'Challenge 3',
            description: 'This is a challenge',
            createdAt: new Date()
          }];

        return challenges;
    }

    export function getChallenge(id: string) {
        //return axios.post(`${BASE_URL}/submitFile`, data).then(handleResponse);

        const challenge = {
            id: "ch1",
            name: 'Challenge 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
              'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
              'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            createdAt: new Date()
          }; 

        return challenge;
    }

    /*
    function handleResponse(response: any) {
        return response.text().then((text: string) => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    //logout();
                    location.reload(true);
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }*/
}