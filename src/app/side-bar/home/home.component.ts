import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const pageTitle = this.getPageTitle(this.activatedRoute);
        this.titleService.setTitle(pageTitle);
      });
  }

  private getPageTitle(route: ActivatedRoute): string {
    const pageTitle = route.snapshot.data['title'];
    if (!pageTitle) {
      return 'Default Title';
    }
    return pageTitle;
  }
}
