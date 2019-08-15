import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  users: User[]
  user: User;
  edit: boolean;
  
 
   constructor(private userService: UserService, private router: Router) {}
 
   ngOnInit() {
     this.loadUsers();
   }
 
   loadUsers() {
 
      this.userService.getUsers()
                        .subscribe(
                            users => this.users = users,
                             err => {
 
                                 console.log(err);
                             });
 }
 
 deleteUser(id:string) {
   
        this.userService.deleteUser(id)
                          .subscribe(
                              user => {
                             console.log(user);
                             window.location.reload();
                             },
                               err => {
                                   console.log(err);
                               });
                                         
                               
   }

   editUser(user: User){
    this.user = user;
    this.edit=true; 
  }

  onEditUser(form: NgForm){
      this.user = new User(form.value.id,form.value.name, form.value.age, form.value.email);
      this.userService.addUser(this.user).subscribe(
                                user => {this.user = user;
                                  window.location.reload();
                                },
                                err => {
                                 console.log(err);
                             });
                           //  window.location.reload();  
                              
  
  }


   
}
