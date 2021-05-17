import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [`
  .currencyinput {
    border: 1px inset #ccc;
    
    
}
  
  `],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {



       this.activateRoute.params
      .pipe(
        switchMap((param) => this.paisService.getPaisPorAlpha(param.id)),
        tap(console.log)
      )
      .subscribe((pais) => (this.pais = pais));
    

/*   
    this.activateRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.paisService.getPaisPorAlpha(id).subscribe((pais) => {
        this.pais = pais
        console.log(pais);
      });
    }); 
*/
 
  }
}
