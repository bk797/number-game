import { Component, OnInit } from '@angular/core';
import { PrepServiceService } from '../prep-service/prep-service.service';

@Component({
  selector: 'app-prep-output-component',
  templateUrl: './prep-output-component.component.html',
  styleUrls: ['./prep-output-component.component.css']
})
export class PrepOutputComponentComponent implements OnInit {

  values: number;

  constructor(private ps: PrepServiceService) {
   }

  ngOnInit() {
    this.ps.getValues().subscribe(value => {
      this.values = value;
      console.log(this.values);
    });
  }

}
