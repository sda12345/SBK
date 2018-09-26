import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../modules/login/login.component';

const roots: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
}, {
    path: 'login',
    component: LoginComponent
}];

@NgModule({
    imports: [
        RouterModule.forRoot(roots)
    ],
    exports: [RouterModule]
})
export class RootRoutingModule {

}
