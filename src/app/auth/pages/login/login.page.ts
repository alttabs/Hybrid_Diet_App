import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  configs = {
    isSignIn: true,
    action: 'Login',
    actionChange: 'Criar Conta'
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

// instancia formulario
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

// valida campos formularios
  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  } 

  get name(): FormControl {
    return <FormControl>this.authForm.get('name');
  }

  get email(): FormControl {
    return <FormControl>this.authForm.get('email');
  }

  get password(): FormControl {
    return<FormControl>this.authForm.get('password');
  }

  // alternancia login page form
  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const{ isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Login' : 'Criar';
    this.configs.actionChange = isSignIn ? 'Criar Conta' : 'Ja tenho Conta';
    !isSignIn
    ? this.authForm.addControl('name', this.nameControl)
    : this.authForm.removeControl('name');
  }

  onSubmit(): void {
    console.log('AuthForm: ', this.authForm.value);
  }
}
