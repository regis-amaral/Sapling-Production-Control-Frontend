import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-specie',
  templateUrl: './create-specie.component.html',
  styleUrls: ['./create-specie.component.scss']
})
export class CreateSpecieComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.createForm()
  }

  private createForm(){
    this.formGroup = this.fb.group({
      id: '',
      name: ''
    });
  }
}


