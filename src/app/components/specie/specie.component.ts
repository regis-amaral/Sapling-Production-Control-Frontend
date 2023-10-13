import { SpecieService } from 'src/app/@core/services/specie-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SpecieFormComponent } from './specie-form/specie-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Specie } from 'src/app/@core/models/Specie.model';



// const ELEMENT_DATA: Specie[] = [
//   {id: 1, name: 'Hydrogen'},
//   {id: 2, name: 'Helium'},
//   {id: 3, name: 'Lithium'},
//   {id: 4, name: 'Beryllium'},
//   {id: 5, name: 'Boron'},
//   {id: 6, name: 'Carbon'},
//   {id: 7, name: 'Nitrogen'},
//   {id: 8, name: 'Oxygen'},
//   {id: 9, name: 'Fluorine'},
//   {id: 10, name: 'Neon'},
// ];

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss']
})
export class SpecieComponent implements OnInit {
  @ViewChild(MatTable)
  public table: MatTable<any>;
  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource = new Map<number, Specie>();

  constructor(
    public dialog: MatDialog,
    public specieService: SpecieService
    ) {}

  ngOnInit(): void {
    this.specieService
      .getSpecies()
      .subscribe((data: Specie []) => {
        data.forEach(specie => {
          this.dataSource.set(specie.id, specie);
        });
        // programar
      });
  }

  openDialog(element: Specie): void{
    const dialogRef = this.dialog.open(SpecieFormComponent, {
      data: element === null ? {
        id: null,
        name: "",
      } : {
        id: element.id,
        name: element.name,
      }
    });

    dialogRef.afterClosed().subscribe(body => {
      if(body !== undefined){
        if (this.dataSource.has(body.id)) {         // EDIT ELEMENT
          this.specieService.edit(body)
            .subscribe((id: number) => {
              body.id = id;
              this.dataSource.set(body.id, body);
              this.table.renderRows();
            })
        }else{                                      // CREATE NEW ELEMENT
          this.specieService.create(body)
            .subscribe((id: number) => {
              body.id = id;
              this.dataSource.set(body.id, body);
              this.table.renderRows();
            })
        }
      }
    });
  }

  deleteElement(id: number): void{
    this.specieService.delete(id).subscribe(() => {
      this.dataSource.delete(id);
    });
  }

  editElement(element: Specie): void{
    this.openDialog(element);
  }
}
