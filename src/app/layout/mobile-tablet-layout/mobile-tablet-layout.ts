import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { MenuItem } from 'primeng/api';
import { Avatar, AvatarPassThrough } from "primeng/avatar";
import { ButtonModule } from 'primeng/button';
import { DrawerModule, DrawerPassThrough } from 'primeng/drawer';
import { Menubar } from 'primeng/menubar';
import { PanelMenu, PanelMenuPassThrough } from 'primeng/panelmenu';
import { dashboardAvatarPt, drawerPt, menuAvatarIconPt, menuButtonAvatarPt, panelMenuPt, userAvatarPt } from './styledComponents';

@Component({
  selector: 'app-mobile-tablet-layout',
  imports: [RouterOutlet, Avatar, Menubar, ButtonModule, DrawerModule, PanelMenu, RouterLinkWithHref],
  templateUrl: './mobile-tablet-layout.html',
  styles: ``,
  encapsulation: ViewEncapsulation.None,
})
export class MobileTabletLayout {
  items: MenuItem[] = [];
  selectedItem = {
    label: 'Dashboard',
    iconPath: 'assets/svg/chart-donut.svg',
  };
  routesVisible: boolean = false;

  userAvatarPt: AvatarPassThrough = userAvatarPt;
  dashboardAvatarPt: AvatarPassThrough = dashboardAvatarPt;
  menuAvatarIconPt: AvatarPassThrough = menuAvatarIconPt;
  menuButtonAvatarPt: AvatarPassThrough = menuButtonAvatarPt;
  drawerPt: DrawerPassThrough = drawerPt;
  panelMenuPt: PanelMenuPassThrough = panelMenuPt;

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        iconPath: 'assets/svg/chart-donut.svg',
      },
      {
        label: 'Report',
        iconPath: 'assets/svg/clipboard-text.svg',
      },
      {
        label: 'Organization',
        iconPath: 'assets/svg/gear.svg',
        items: [
          {
            label: 'Users',
            iconPath: 'assets/svg/users.svg',
            addButton: true,
          },
        ]
      }
    ];
  }

  selectItem(item: any) {
    if (!item?.items?.length) {
      this.selectedItem = item;
      this.routesVisible = false;
    }
  }
}
