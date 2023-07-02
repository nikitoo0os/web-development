import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/interfaces/dto/LoginDTO';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {

  username!: string;
  password!: string;

  data!: LoginDTO;

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService
      .loginUser({ username: this.username, password: this.password })
      .then((data:any) => {
        console.log('Успешная авторизация', data);
        this.data = data;
        console.log(this.data)
        localStorage.setItem('username', this.data.user.username);
        localStorage.setItem('id',String(this.data.athlete.id));
        this.router.navigate(['/exercise']);
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
  }


}
