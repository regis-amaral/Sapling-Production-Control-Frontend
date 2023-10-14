import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Specie } from 'src/app/@core/models/Specie.model';

@Component({
  selector: 'app-specie-form',
  templateUrl: './specie-form.component.html',
  styleUrls: ['./specie-form.component.scss']
})

export class SpecieFormComponent implements OnInit{
  public element: Specie
  public isChange: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Specie,
    public dialogRef: MatDialogRef<SpecieFormComponent>,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if(this.data.id !== null){
      this.isChange = true;
    }else{
      this.isChange = false;
    }
  }

}
