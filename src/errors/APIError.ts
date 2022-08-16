export default class APIError extends Error {
  constructor(
    public response: any,
    public body: any
  ) {
    super();

    this.name = 'APIError';
    this.response = response;
    this.body = body;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
