import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule, AvatarPassThrough } from 'primeng/avatar';
import { PanelMenuModule, PanelMenuPassThrough } from 'primeng/panelmenu';
import { filter, Observable } from 'rxjs';
import { LayoutService } from '../layout.service';
import { RoutesService } from '../routes.service';
import { menuAvatarIconPt, panelMenuCollapsedPt, panelMenuPt, userAvatarPt } from '../styledComponents';

@Component({
  selector: 'app-desktop-layout',
  imports: [RouterOutlet, AsyncPipe, AvatarModule, PanelMenuModule, RouterLink],
  templateUrl: './desktop-layout.html',
  styles: `
  .side-panel-transition {
    transition: width 0.5s ease-in-out;
  }
  .side-panel-content-transition {
    transition: height 0.5s ease-out;
  }
  .side-menu-profile-transition {
    transition: height 0.5s ease-out;
  }
  `,
})
export class DesktopLayout {
  cd: ChangeDetectorRef = inject(ChangeDetectorRef);
  layoutService: LayoutService = inject(LayoutService);
  routesService: RoutesService = inject(RoutesService);

  activeRoute = signal<string>('');
  
  items: MenuItem[] = [];
  collapsed: Observable<boolean> = this.layoutService.isCollapsed$.asObservable();
  selectedItem = {
    label: 'Dashboard',
    iconPath: 'assets/svg/chart-donut.svg',
  };

  userAvatarPt: AvatarPassThrough = userAvatarPt;
  panelMenuPt: AvatarPassThrough = panelMenuPt;
  menuAvatarIconPt: AvatarPassThrough = menuAvatarIconPt;
  panelMenuCollapsedPt: PanelMenuPassThrough = panelMenuCollapsedPt;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.activeRoute.set(event.url);
    });
  }

  ngOnInit() {
    this.items = this.routesService.items;
  }

  handleToggle() {
    this.layoutService.toggleCollapsed()
    this.cd.detectChanges()
  }
}
