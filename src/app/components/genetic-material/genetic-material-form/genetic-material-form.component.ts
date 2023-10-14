import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneticMaterial } from 'src/app/@core/models/GeneticMaterial';
import { Specie } from 'src/app/@core/models/Specie.model';

@Component({
  selector: 'app-genetic-material-form',
  templateUrl: './genetic-material-form.component.html',
  styleUrls: ['./genetic-material-form.component.scss']
})

export class GeneticMaterialFormComponent implements OnInit{
  public element: GeneticMaterial
  public isChange: boolean;
  public selectedSpecie: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<GeneticMaterialFormComponent>,
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

    if (this.data.specie) {
      this.selectedSpecie = this.data.specie.id;
    }

  }

}
