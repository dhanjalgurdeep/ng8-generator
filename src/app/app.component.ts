import { Component } from '@angular/core';
import { DygenericService } from './service/dygeneric.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  dataObj: any[];

  public constructor(private _dygenericService: DygenericService) {
    
    this._dygenericService.getGenericService().subscribe(
      dataObj => this.dataObj = dataObj
    );
    
    /*for (let i = 0; i < 4; i++) {
      this.addSlide();
    }*/
  }
}
