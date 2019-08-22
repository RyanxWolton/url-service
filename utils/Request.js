import axios from 'axios';

export default class Request {
  constructor(url, method, headers) {
    this.url = url;
    this.method = method;
    this.headers = {
      'content-type': 'application/json',
      Authorization: `Bearer 2f1ee33620d252b527ff2d6b0235cba7d8db29a0`,
      ...headers
    }
  }

  async send(data) {
    try {
      const response = await axios({
        method: this.method,
        url: this.url,
        headers: this.headers,
        data
      });
      return response;
    } catch(err) {
      console.log(err);
    }
  }
}