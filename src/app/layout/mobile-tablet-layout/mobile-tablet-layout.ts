import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { MenuItem } from 'primeng/api';
import { Avatar, AvatarPassThrough } from "primeng/avatar";
import { ButtonModule } from 'primeng/button';
import { DrawerModule, DrawerPassThrough } from 'primeng/drawer';
import { Menubar } from 'primeng/menubar';
import { PanelMenu, PanelMenuPassThrough } from 'primeng/panelmenu';
import { filter } from 'rxjs';
import { RoutesService } from '../routes.service';
import { dashboardAvatarPt, drawerPt, menuAvatarIconPt, menuButtonAvatarPt, panelMenuPt, userAvatarPt } from '../styledComponents';

@Component({
  selector: 'app-mobile-tablet-layout',
  imports: [RouterOutlet, Avatar, Menubar, ButtonModule, DrawerModule, PanelMenu, RouterLinkWithHref],
  templateUrl: './mobile-tablet-layout.html',
  styles: ``,
  encapsulation: ViewEncapsulation.None,
})
export class MobileTabletLayout {
  routesService: RoutesService = inject(RoutesService);

  activeRoute = signal<string>('');

  items: MenuItem[] = [];
  routesVisible: boolean = false;
  selectedItem = {
    label: 'Dashboard',
    iconPath: 'assets/svg/chart-donut.svg',
  };

  userAvatarPt: AvatarPassThrough = userAvatarPt;
  dashboardAvatarPt: AvatarPassThrough = dashboardAvatarPt;
  menuAvatarIconPt: AvatarPassThrough = menuAvatarIconPt;
  menuButtonAvatarPt: AvatarPassThrough = menuButtonAvatarPt;
  drawerPt: DrawerPassThrough = drawerPt;
  panelMenuPt: PanelMenuPassThrough = panelMenuPt;

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

  selectItem(item: any) {
    if (!item?.items?.length) {
      this.selectedItem = item;
      this.routesVisible = false;
    }
  }
}
