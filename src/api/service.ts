import axios from 'axios';

export class Service {
  instance = axios.create({
    baseURL: 'http://localhost:3000/entity',
    timeout: 1000,
  });
  getPerson(personId: string) {
    return this.instance.post('person/getPerson', {
      data: {
        personId,
      },
    });
  }
}

export const service = new Service();
