import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private loginService: LoginService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSwitchMode(code: string, id: string): void {
    this.loginService.VerifyUser(code, id).subscribe(resData => {
      if (resData == "Valid") {
        this.isAuthenticated = true;
        this.messageService.sendMessage(this.isAuthenticated);
        this.router.navigate(["dashboard"]);
      }
      else {
        alert("Invalid User");
      }
    });
  };
}
