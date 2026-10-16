import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificateVerification } from './certificate-verification';

describe('CertificateVerification', () => {
  let component: CertificateVerification;
  let fixture: ComponentFixture<CertificateVerification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateVerification],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateVerification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
