import { Injectable } from "@angular/core";

interface Item {
  label: string;
  iconPath: string,
  route?: string,
  toActivateRoute: string,
  addButton?: boolean;
  items?: Item[];
}

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  items: Item[] = [
    {
      label: 'Dashboard',
      iconPath: 'assets/svg/chart-donut.svg',
      route: '/',
      toActivateRoute: '/',
    },
    {
      label: 'Report',
      iconPath: 'assets/svg/clipboard-text.svg',
      route: '/report',
      toActivateRoute: '/reportc',
    },
    {
      label: 'Organization',
      iconPath: 'assets/svg/gear.svg',
      toActivateRoute: '/add-user',
      items: [
        {
          label: 'Users',
          iconPath: 'assets/svg/users.svg',
          addButton: true,
          toActivateRoute: '/add-user',
        },
      ]
    }
  ];
}