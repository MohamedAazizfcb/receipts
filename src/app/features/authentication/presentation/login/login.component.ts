// src/app/features/authentication/ui/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginPresenter } from './login.presenter';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../../../../core/services/logger.service';
import { IconComponent } from "../../../../shared/components/icon/icon.component";
import { ToastrService } from '../../../../shared/features/toastr/services/toastr.service';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  providers: [LoginPresenter],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private presenter: LoginPresenter,
    private logService: LoggerService,
    private toastrService: ToastrService,
  ) 
  {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.toastrService.success("DDDDDDDDDDDDDDDDDDDDDDDDDDDDdddd");

    if (this.loginForm.valid) {
      this.logService.info(`user ${this.loginForm.value.username} is trying to login`);
      this.presenter.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(response => {
          this.logService.info(`user ${this.loginForm.value.username} is loggedin successfully`);
        });
    }
  }
}
