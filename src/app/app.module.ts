import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {environment} from "../environments/environment";
import  {DataDbService} from "./services/data-db.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
