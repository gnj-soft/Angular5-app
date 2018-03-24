import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule, MatSidenavModule, MatSelectModule } from '@angular/material';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { MyserviceService } from './myservice.service';


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
         path: 'new-cmp',
         component: NewCmpComponent
      }
   ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
