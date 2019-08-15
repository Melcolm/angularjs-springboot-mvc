import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';

const appRoutes: Routes = [
  { path: 'addUser', component: AddUserComponent },
  { path: '', component: ShowUsersComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
