import { Component, OnInit } from '@angular/core';
import {QuizzesServiceClient} from '../../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';
import {QuizAttemptService} from '../../services/quizAttempt.service.client.ts';

@Component({
  selector: 'app-quiz-attempt',
  templateUrl: './quiz-attempt.component.html',
  styleUrls: ['./quiz-attempt.component.css']
})
export class QuizAttemptComponent implements OnInit {
  qid;
  attempts;
  score;
  constructor(private service: QuizAttemptService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.qid = params.quizId;
      this.service.findQuizAttempt(this.qid)
        .then(attempts => {
          console.log(attempts)
          this.attempts = attempts;
        });
    });

  }

}
