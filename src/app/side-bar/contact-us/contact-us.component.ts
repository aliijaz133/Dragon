import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
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
