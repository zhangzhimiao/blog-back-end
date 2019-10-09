import axios from 'axios';

export class Service {
  instance = axios.create({
    baseURL: 'http://localhost:3000/entity',
    timeout: 1000,
  });
  getPerson(personId: string) {
    return this.instance.post('person/detail', {
      data: {
        personId,
      },
    });
  }
  getColumn(columnId: string) {
    return this.instance.post('column/detail', {
      data: {
        columnId,
      },
    });
  }
  getArticle(articleId: string) {
    return this.instance.get(`article/detail${articleId}`);
  }
}

export const service = new Service();
