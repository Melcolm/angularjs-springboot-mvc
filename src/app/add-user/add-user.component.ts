import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user : User;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  addUser(form: NgForm){
    this.user = new User(form.value.id,form.value.name, form.value.age, form.value.email);
    form.reset();
    this.userService.addUser(this.user).subscribe(
                              user => { this.user = user
                                this.router.navigate(['/']);
                              
                            },
                               err => {
                               console.log(err);
                           });
  
                           
                          
  }

}
