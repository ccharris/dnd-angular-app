import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
 
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule, 
  MatTableModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatAutocompleteModule
 } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ClassesComponent } from './components/classes/classes.component';
import { DndIndexComponent } from './components/dnd-index/dnd-index.component';
import { DndService } from './services/dnd.service';
import { ClassesDetailsComponent } from './components/classes-details/classes-details.component';
import { SubclassDetailsComponent } from './components/subclass-details/subclass-details.component';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceDetailsComponent } from './components/race-details/race-details.component';
import { SubRaceDetailsComponent } from './components/sub-race-details/sub-race-details.component';
import { MonsterListComponent } from './components/monster-list/monster-list.component';
import { MonsterDetailsComponent } from './components/monster-details/monster-details.component'
import { PagerService } from './services/page.service';
import { firebaseConfig } from '../../firebase.js';
import { SpellIndexComponent } from './components/spell-index/spell-index.component';
import { SpellDetailsComponent } from './components/spell-details/spell-details.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'classes', children: [
    {path: '', component: ClassesComponent},
    {path: 'details/:id', component: ClassesDetailsComponent}
  ]},
  { path: 'races', children: [
    {path: '', component: RaceListComponent},
    {path: 'details/:id', component: RaceDetailsComponent}
  ]},
  { path: 'monsters', children: [
    {path: '', component: MonsterListComponent},
    {path: 'details/:id', component: MonsterDetailsComponent}
  ]},
  { path: 'spells', children: [
    {path: '', component: SpellIndexComponent},
    {path: 'details/:id', component: SpellDetailsComponent}
  ]},
  { path: '**', component: DndIndexComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    ClassesComponent,
    DndIndexComponent,
    ClassesDetailsComponent,
    SubclassDetailsComponent,
    RaceListComponent,
    RaceDetailsComponent,
    SubRaceDetailsComponent,
    MonsterListComponent,
    MonsterDetailsComponent,
    SpellIndexComponent,
    SpellDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatAutocompleteModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    DndService,
    AuthGuard, 
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
