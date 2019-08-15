import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from './user.service';
import { User } from './model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(): void {
   
  }

}
