import Request from './Request';

export default class URLService {
  shorten(url) {
    const req = new Request('https://api-ssl.bitly.com/v4/bitlinks', 'post');
    return req.send({
      long_url: url
    });
  }
}