import APIError from "../../errors/APIError";

class HttpClient {
  constructor(private baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(path: string) {
    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }
}

export default HttpClient;