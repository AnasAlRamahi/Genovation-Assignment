import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule, AvatarPassThrough } from 'primeng/avatar';
import { PanelMenuModule, PanelMenuPassThrough } from 'primeng/panelmenu';
import { Observable } from 'rxjs';
import { LayoutService } from '../layout.service';
import { menuAvatarIconPt, panelMenuCollapsedPt, panelMenuPt, userAvatarPt } from '../mobile-tablet-layout/styledComponents';

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

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        iconPath: 'assets/svg/chart-donut.svg',
        route: '/dashboard',
      },
      {
        label: 'Report',
        iconPath: 'assets/svg/clipboard-text.svg',
        route: '/dashboard',
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

  handleToggle() {
    this.layoutService.toggleCollapsed()
    this.cd.detectChanges()
  }

  selectItem(item: any) {
    if (!item?.items?.length) {
      this.selectedItem = item;
    }
  }
}
