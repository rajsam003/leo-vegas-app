import axios from "axios";

import {API_URL} from './constants';

export default class ApiService {
    constructor() {
      this.instance = axios.create();
    }
  
    get({ url }) {
      const serviceUrl = this.getServiceUrl({ url });

      return this.instance({
        method: "get",
        url: serviceUrl,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.status === 200) {
            return response.data;
          } else {
            console.error(
              `Url: ${response.request.url}, Status: ${response.status} ${response.statusText}`
            );
          }
        })
        .catch(error => {
          console.error(`Url: ${serviceUrl}, Method: "GET", Error: ${error}`);
          return Promise.reject(error.data);
        });
    }
  
    getServiceUrl() {
      return API_URL;
    }
  }