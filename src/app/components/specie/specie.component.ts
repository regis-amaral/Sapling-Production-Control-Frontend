import { SpecieService } from 'src/app/@core/services/specie-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SpecieFormComponent } from './specie-form/specie-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Specie } from 'src/app/@core/models/Specie.model';
import { NotifierService } from 'angular-notifier';

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
  private readonly notifier: NotifierService;

  constructor(
    public dialog: MatDialog,
    public specieService: SpecieService,
    public notifierService: NotifierService
    ) {
      this.notifier = notifierService;
    }

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
              this.notifier.notify('success', 'Espécie atualizada!');
            })
        }else{                                      // CREATE NEW ELEMENT
          this.specieService.create(body)
            .subscribe((id: number) => {
              body.id = id;
              this.dataSource.set(body.id, body);
              this.table.renderRows();
              this.notifier.notify('success', 'Espécie criada!');
            })
        }
      }
    });
  }

  deleteElement(id: number): void{
    this.specieService.delete(id).subscribe({
      next: () => {this.dataSource.delete(id)},
      error: (data) => {
        this.notifier.notify('error', data.error);
      },
      complete: () =>{
        this.notifier.notify('success', 'Espécie deletada!');
      }
    });
  }

  editElement(element: Specie): void{
    this.openDialog(element);
  }
}
