import { Component } from '@angular/core';
import { SharedModule } from '../../common/shared/shared.module';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  login(form:NgForm){
  }
}

