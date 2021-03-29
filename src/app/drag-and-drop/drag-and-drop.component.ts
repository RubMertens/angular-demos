import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { mergeMap, map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements AfterViewInit {

  @ViewChild('box')
  box?: ElementRef<HTMLDivElement>;

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.box);
    const mouseDown$ = fromEvent<MouseEvent>(this.box!.nativeElement, 'mousedown');
    const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');
    const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');

    const drag = mouseDown$
      .pipe(
        mergeMap(down => {
          this.box?.nativeElement.classList.add('dragging');
          const { left: startLeft, top: startTop } = this.box!.nativeElement.getBoundingClientRect();

          return mouseMove$
            .pipe(
              map(move => {
                return {
                  top: move.clientY - (down.clientY - startTop),
                  left: move.clientX - (down.clientX - startLeft)
                };
              }),

              takeUntil(mouseUp$.pipe(tap(() => this.box?.nativeElement.classList.remove('dragging'))))
            )
            ;
        }),

      );

    drag.subscribe({
      next: ({ top, left }) => {
        console.log(top, left);
        this.box!.nativeElement.style.top = `${top}px`;
        this.box!.nativeElement.style.left = `${left}px`;
      }
    });
  }



}
