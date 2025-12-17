import { inject, Injectable } from "@angular/core";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private breakpointObserver = inject(BreakpointObserver);

  isSmallScreen$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
    map((results: any) => results.matches),
    shareReplay()
  );

  isCollapsed$ = new BehaviorSubject<boolean>(false);

  toggleCollapsed() {
    this.isCollapsed$.next((!this.isCollapsed$.getValue()));
  }
}