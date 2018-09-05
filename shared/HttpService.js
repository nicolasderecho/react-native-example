import * as axios from 'axios';
import { extend } from 'lodash';

class HttpService {

  constructor(){
    this.server = axios;
  }

  defaultHeaders(){
    return { 'Accept': 'application/json', 'Content-Type': 'text/plain' } ;
  }

  request(options) {
    return this.server.request({
      method: options.method || 'GET',
      url: options.url,
      params: options.params || {},
      data: options.data || {},
      headers: extend({}, this.defaultHeaders(), options.headers || {})
    })
      .catch( (error) => {
        console.error("Error");
      });
  }

}

export { HttpService }