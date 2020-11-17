import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input('question') q = {_id: '', title: '', question: '', choices: [], correct: '', answer: ''};
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: ''};
  grading = false;
  answer;
  faCheck = faCheck;
  faTimes = faTimes;

  grade = () => {
    this.grading = true;
  }
  retry = () => {
    this.grading = false;
    this.answer = '';
  }

  getColor = (as: string) => {
    if (this.grading) {
      if (as === this.q.correct) {
        return '#86d986';
      }
      if (as === this.answer && as !== this.q.correct) {
        return '#ecaeae';
      }
    }
  };

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.q);
  }

}
