import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { WebApiService } from './services/web-api.service';
import { CommonFunctionModule } from './common/common-function.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    CommonFunctionModule,
    SharedModule
  ],
  providers: [WebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
