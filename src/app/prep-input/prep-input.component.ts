import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PrepServiceService } from '../prep-service/prep-service.service';

@Component({
  selector: 'app-prep-input',
  templateUrl: './prep-input.component.html',
  styleUrls: ['./prep-input.component.css']
})
export class PrepInputComponent implements OnInit {

  constructor(private ps: PrepServiceService) { }

  ngOnInit() {
  }

  newValue(input: number) {
    this.ps.addValue(input);
  }

}
