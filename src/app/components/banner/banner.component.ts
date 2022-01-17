import { Component, OnInit } from '@angular/core';
import { svg } from 'src/app/svg';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banner: SafeHtml | undefined;
  browser: SafeHtml | undefined;
  mobile: SafeHtml | undefined;
  ready: SafeHtml | undefined;
  svg = svg
  constructor(private sanitizer: DomSanitizer) {
    this.banner = sanitizer.bypassSecurityTrustHtml(svg.banner);
    this.browser = sanitizer.bypassSecurityTrustHtml(svg.browser);
    this.mobile = sanitizer.bypassSecurityTrustHtml(svg.mobile);
    this.ready = sanitizer.bypassSecurityTrustHtml(svg.ready);
  }

  ngOnInit(): void {
  }

}
