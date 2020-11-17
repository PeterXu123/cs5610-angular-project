import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch('https://cs5610-2020-fall-hw8-server.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://cs5610-2020-fall-hw8-server.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
