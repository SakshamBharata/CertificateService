import { Routes } from '@angular/router';
import { CertificateVerificationComponent } from './pages/certificate-verification/certificate-verification';

export const routes: Routes = [
  {
    path: 'verify/:uid',
    component: CertificateVerificationComponent
  }
];