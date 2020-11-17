import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
