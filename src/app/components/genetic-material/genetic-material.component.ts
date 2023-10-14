import { GeneticMaterialService } from 'src/app/@core/services/genetic-material-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneticMaterialFormComponent } from './genetic-material-form/genetic-material-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { GeneticMaterial } from 'src/app/@core/models/GeneticMaterial';
import { NotifierService } from 'angular-notifier';
import { Specie } from 'src/app/@core/models/Specie.model';
import { SpecieService } from 'src/app/@core/services/specie-service';

@Component({
  selector: 'app-genetic-material',
  templateUrl: './genetic-material.component.html',
  styleUrls: ['./genetic-material.component.scss'],
})
export class GeneticMaterialComponent implements OnInit {
  @ViewChild(MatTable)
  public table: MatTable<any>;
  public displayedColumns: string[] = ['id', 'name', 'specie_name', 'actions'];
  public dataSource = new Map<number, GeneticMaterial>();
  public species: Specie[] = [];
  private readonly notifier: NotifierService;

  constructor(
    public dialog: MatDialog,
    public geneticMaterialService: GeneticMaterialService,
    public specieService: SpecieService,
    public notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.geneticMaterialService
      .getAll()
      .subscribe((data: GeneticMaterial[]) => {
        data.forEach((geneticMaterial) => {
          this.dataSource.set(geneticMaterial.id, geneticMaterial);
        });
        //
      });

    this.specieService
      .getAll()
      .subscribe((data: Specie []) => {
        data.forEach(specie => {
          this.species.push(specie);
        });
        //
      });
  }

  openDialog(element: any): void {
    console.log(element)
    const dialogRef = this.dialog.open(GeneticMaterialFormComponent, {
      data: {
        id: element === null ? null : element.id,
        name: element === null ? null : element.name,
        specie: element === null ? <Specie>{id: null, name: null} : element.specie,
        species: this.species
      }
    });

    dialogRef.afterClosed().subscribe((body) => {
      if (body !== undefined) {
        console.log(body)
        if (this.dataSource.has(body.id)) {
          // EDIT ELEMENT
          this.geneticMaterialService.edit(body).subscribe({
            next: (id: number) => {
              body.id = id;
              body.specie = this.species.find(specie => specie.id === body.specie.id);
              this.dataSource.set(body.id, body);
              this.table.renderRows();
              this.notifier.notify('success', 'Material Genético atualizado!');
            },
            error: (data) => {
              this.notifier.notify('error', data.error);
            }
          });
        } else {
          // CREATE NEW ELEMENT
          this.geneticMaterialService.create(body).subscribe({
            next: (id: number) => {
              body.id = id;
              body.specie = this.species.find(specie => specie.id === body.specie.id);
              this.dataSource.set(body.id, body);
              this.table.renderRows();
              this.notifier.notify('success', 'Material Genético criado!');
            },
            error: (data) => {
              this.notifier.notify('error', data.error);
            }
          });
        }
      }
    });
  }

  deleteElement(id: number): void {
    this.geneticMaterialService.delete(id).subscribe({
      next: () => {
        this.dataSource.delete(id);
      },
      error: (data) => {
        this.notifier.notify('error', data.error);
      }
    });
  }

  editElement(element: GeneticMaterial): void {
    this.openDialog(element);
  }
}
