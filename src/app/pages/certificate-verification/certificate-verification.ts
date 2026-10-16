import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';

interface Certificate {
  name: string;
  teamName: string;
  issuedDate: string;
  certificateId: string;
}

@Component({
  selector: 'app-certificate-verification',
  standalone: true,
  imports: [QRCodeComponent],
  templateUrl: './certificate-verification.html',
  styleUrl: './certificate-verification.css'
})
export class CertificateVerificationComponent implements OnInit {

  certificate: Certificate | null = null;
  notFound = false;
  qrUrl = '';

  private certificates: Record<string, Certificate> = {

    'SB-SIH-CERT-2026-X7K4P9': {
      name: 'Muskan Chaurasiya',
      teamName: 'Saksham Bharat',
      issuedDate: '16 October 2026',
      certificateId: 'SB-SIH-CERT-2026-X7K4P9'
    },

    'SB-SIH-CERT-2026-M8Q2LA': {
      name: 'Ayush Gupta',
      teamName: 'Saksham Bharat',
      issuedDate: '16 October 2026',
      certificateId: 'SB-SIH-CERT-2026-M8Q2LA'
    },

    'SB-SIH-CERT-2026-R5N7KD': {
      name: 'Maulik Kesarwani',
      teamName: 'Saksham Bharat',
      issuedDate: '16 October 2026',
      certificateId: 'SB-SIH-CERT-2026-R5N7KD'
    },

    'SB-SIH-CERT-2026-T9W3PX': {
      name: 'Shiva Kumar Tiwari',
      teamName: 'Saksham Bharat',
      issuedDate: '16 October 2026',
      certificateId: 'SB-SIH-CERT-2026-T9W3PX'
    },

    'SB-SIH-CERT-2026-H6C8ZM': {
      name: 'Ayushi Shukla',
      teamName: 'Saksham Bharat',
      issuedDate: '16 October 2026',
      certificateId: 'SB-SIH-CERT-2026-H6C8ZM'
    }

  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const uid = params.get('uid');

      this.certificate = null;
      this.notFound = false;
      this.qrUrl = '';

      if (uid && this.certificates[uid]) {

        this.certificate = this.certificates[uid];

        this.qrUrl =
          `${window.location.origin}/verify/${uid}`;

      } else {

        this.notFound = true;

      }

    });

  }
}