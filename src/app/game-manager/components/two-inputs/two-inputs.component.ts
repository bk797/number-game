import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-two-inputs',
  templateUrl: './two-inputs.component.html',
  styleUrls: ['./two-inputs.component.css']
})
export class TwoInputsComponent implements OnInit {

  @Input() input1: number;
  @Input() input2: number;

  @Output() newInputs = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit() {
  }

  inputUpdate() {
    this.newInputs.emit([this.input1, this.input2]);
  }
}
