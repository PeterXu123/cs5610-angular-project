import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {
  @Input('question') q = {_id: '', title: '', question: '', answer: '', correct: ''};;
  answer;

  grading = false;
  faCheck = faCheck;
  faTimes = faTimes;
  choices = [];

  grade = () => {
    this.grading = true;
  };

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
    this.choices = ['true', 'false'];
  }

}
