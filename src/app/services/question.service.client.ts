import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://cs5610-2020-fall-hw8-server.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
