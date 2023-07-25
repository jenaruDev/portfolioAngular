import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-experimentos',
  template: `
    <h1 class="mt-5">Extract Text from PDF, TXT, DOC, and DOCX</h1>
    <form class="mt-5">
      <input type="file" (change)="onFileSelected($event)">
    </form>
    <div><button class="mt-5 mx-4" (click)="uploadFile()">Extrae Texto</button><div *ngIf="loading" class="loading-indicator">Cargando...</div></div>
    <textarea class="mt-5" name="respuestaPython" rows="20" cols="90"[value]="respuestaPython"></textarea>


  `
})
export class ExperimentosComponent {
  respuestaPython: string = "Aqui saldrá tu texto";

  selectedFile: File;
  loading: boolean = false; // Variable para controlar el indicador de carga

  constructor(private apiService: ApiService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      this.loading = true; // Mostrar el indicador de carga

      this.apiService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          // Procesar la respuesta del servidor aquí
          console.log(response);
          this.respuestaPython = response.text; // Asignar la respuesta al atributo "respuestaPython"
          this.loading = false; // Ocultar el indicador de carga en caso de error

        },
        (error) => {
         // Capturar el error y mostrarlo en la consola
        console.error('Error al enviar el archivo:', error);
        this.loading = false; // Ocultar el indicador de carga en caso de error

        }
      );
    } else {
      console.log('Ningún archivo seleccionado.');
    }

  }
}
