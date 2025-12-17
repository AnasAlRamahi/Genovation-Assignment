import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { DesktopLayout } from "./layout/desktop-layout/desktop-layout";
import { LayoutService } from './layout/layout.service';
import { MobileTabletLayout } from "./layout/mobile-tablet-layout/mobile-tablet-layout";

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, MenuModule, BadgeModule, AvatarModule, MobileTabletLayout, DesktopLayout],
  templateUrl: './app.html',
  styles: ``
})
export class App {
  protected readonly title = signal('dashboard-assignment');
  protected readonly layoutService = inject(LayoutService);
}
