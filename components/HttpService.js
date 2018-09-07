import * as axios from 'axios';

const API_KEY = '9bbc72f7';
const URL = 'http://www.omdbapi.com';
const defaultParamsWith = (extraOptions) => Object.assign({}, { apikey: API_KEY }, extraOptions);

class HttpService {

  constructor(){
    this.server = axios;
  }

  defaultHeaders(){
    return { 'Accept': 'application/json', 'Content-Type': 'text/plain' } ;
  }

  makeRequest(options) {
    return this.server.request({
      method: options.method || 'GET',
      url: options.url || URL,
      params: options.params || {},
      data: options.data || {},
      headers: options.headers || this.defaultHeaders()
    })
    .catch( (error) => console.error("Error") );
  }

  findInServer(textToSearch) {
    return this.makeRequest({ params: defaultParamsWith({s: textToSearch}) });
  }

  fetchDetails(id) {
    return this.makeRequest({ params: defaultParamsWith({ i: id }) });
  }

}

export { HttpService }