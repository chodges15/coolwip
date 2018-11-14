import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Open', cols: 1, rows: 1 },
          { title: 'Done', cols: 1, rows: 1 },
          { title: 'Defects', cols: 1, rows: 1 },
          { title: 'Work in Progress', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Open', cols: 2, rows: 1 },
        { title: 'Done', cols: 1, rows: 1 },
        { title: 'Defects', cols: 1, rows: 2 },
        { title: 'Work in Progress', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
