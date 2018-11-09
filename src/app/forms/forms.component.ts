import { Component, OnInit, ViewChild } from '@angular/core';
import { FormFields } from "./forms.component.interface"

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  model: FormFields = {
    fullName: "",
    designation: "",
    company: "",
    promotion: "",
    result: 1,
    feedBack: "",
  }
  @ViewChild("f") ref: any;

  rating: number[] = [1, 2, 3, 4, 5]


  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.ref.valid) {
      console.log("hi")
      this.ref.reset();
    }
  }
}
