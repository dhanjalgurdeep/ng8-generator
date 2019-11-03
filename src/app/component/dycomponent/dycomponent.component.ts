import { Directive, Component ,Input ,OnInit, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-dycomponent',
  templateUrl: './dycomponent.component.html'
})
export class DycomponentComponent implements OnInit, AfterViewInit {
  @Input() templateName: string;
  @Input() serviceURL: string;
  constructor() {
    //console.log(this.templateName);
    //console.log(this.serviceURL);
   }

  ngOnInit() {
    console.log(this.templateName);
    console.log(this.serviceURL);
  }
  ngAfterViewInit(): void {
   //console.log(this.templateName);
   //console.log(this.serviceURL);
     }	

}
