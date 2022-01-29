import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebApiService } from '../services/web-api.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionsModule } from '../sections/sections.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [NavbarComponent,FooterComponent],
  imports: [CommonModule,RouterModule,SectionsModule,NgbModule],
  exports: [NavbarComponent,FooterComponent],
  providers: [WebApiService]
})
export class SharedModule { }
