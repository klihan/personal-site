import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goHome() {
    this.router.navigate(['/']);
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  }

  public goAbout() {
    this.router.navigate(['/about']);
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }

  public goDev() {
    this.router.navigate(['/dev']);
    document.getElementById('dev').scrollIntoView({ behavior: 'smooth' });
  }

  public goProjects() {
    this.router.navigate(['/projects']);
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  }

  public goContact() {
    this.router.navigate(['/contact']);
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

  public goEdu() {
    this.router.navigate(['/edu']);
    document.getElementById('edu').scrollIntoView({ behavior: 'smooth' });
  }

  public switchLanguage() {
    // window.document.locale = 'EN';
  }
}
