import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();
            title = 'input toDo title';

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }
  constructor() { }

  ngOnInit() {
  }

}
