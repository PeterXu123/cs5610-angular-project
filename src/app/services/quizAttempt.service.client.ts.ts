import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class QuizAttemptService {

  findQuizAttempt = (qid) => {
    return fetch(`https://cs5610-2020-fall-hw9-server.herokuapp.com/api/quizzes/${qid}/attempts`)
      .then(response => response.json());
  }
}
