import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Self } from '@angular/core';
import { GifService } from './services/gif.service';
import { IGifData } from './interfaces';
import { FormControl } from '@angular/forms';
import { UnsubscribeService } from 'src/app/shared/services/unsubscribe.service';
import { debounceTime, distinctUntilChanged, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class MainComponent implements OnInit {
  public gifs!: IGifData;
  public searchControl = new FormControl();
  public pageIndex = 0;

  private filters = {
    offset: 0,
    limit: 10,
  }

  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private gifService: GifService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.initPageData();
    this.searchChanged();
  }

  public pageChange(page: number) {
    this.pageIndex = page;
    this.filters.offset = page * 10;
    !this.searchControl.value || this.searchControl.value === '' ? this.initPageData() : this.getSearchGifs();
  }

  private initPageData(): void {
    this.gifService.getTrendingGif(this.filters)
      .pipe(take(1), this.unsubscribeService$.takeUntilDestroy)
      .subscribe((res: IGifData) => this.setGifsData(res))
  }

  private searchChanged(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((searchValue) => {
          this.filters.offset = 0;
          this.pageIndex = 0;

          if (!searchValue || searchValue === '') {
            return this.gifService.getTrendingGif(this.filters);
          }

          const filters = { ...this.filters, q: searchValue};
          return this.gifService.getSearchGif(filters);
        }),
        this.unsubscribeService$.takeUntilDestroy,
      )
      .subscribe((res: IGifData) => this.setGifsData(res));
  }

  private getSearchGifs(): void {
    const filters = { ...this.filters, q: this.searchControl.value};

    this.gifService.getSearchGif(filters)
      .pipe(take(1), this.unsubscribeService$.takeUntilDestroy)
      .subscribe((res: IGifData) => this.setGifsData(res));
  }

  private setGifsData(gifs: IGifData): void {
    this.gifs = gifs;
    this.cdr.detectChanges();
  }
}
