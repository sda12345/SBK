import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm = this.fb.group({
        userName: new FormControl(''),
        password: new FormControl('')
    });
    constructor(private fb: FormBuilder) {

    }
}