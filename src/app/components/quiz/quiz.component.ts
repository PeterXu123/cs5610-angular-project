import {Component, OnInit} from '@angular/core';
import {QuestionsServiceClient} from '../../services/question.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions = [];
  quizId = '';

  constructor(private svc: QuestionsServiceClient,
              private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(qs => {

          this.questions = qs;
        });
    });

  }

  changeAnswer = (answer: string, index: number) => {
    this.questions[index].answer = answer;

  }

  submitQuiz = () => {
    console.log(this.questions);
    fetch(`https://cs5610-2020-fall-hw9-server.herokuapp.com/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      this.router.navigate(['../'], { relativeTo: this.route });
      return response.json();
    })
      .then(result => console.log(result));

  }

}
