import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Input() totalItems?: number;
  @Input() pageIndex = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  public pageSize = 10;

  public pageChanged(event: any): void {
    this.pageChange.emit(event.pageIndex);
  }
}
