import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineStoreComponent } from './wine-store/wine-store.component';
import { WineAboutComponent } from './wine-about/wine-about.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'wines',
    pathMatch: 'full'
  },
  { path: 'wines',
    component: WineStoreComponent
  },
  { path: 'about',
    component: WineAboutComponent
  },
  { path: 'sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
