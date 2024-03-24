import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  @Input() searchControl!: FormControl;

  public clearValue(): void {
    this.searchControl.reset();
  }
}
