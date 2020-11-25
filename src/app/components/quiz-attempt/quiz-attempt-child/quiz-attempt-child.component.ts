import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-quiz-attempt-child',
  templateUrl: './quiz-attempt-child.component.html',
  styleUrls: ['./quiz-attempt-child.component.css']
})
export class QuizAttemptChildComponent implements OnInit {
  @Input() attempt;
  faCheck = faCheck;
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
