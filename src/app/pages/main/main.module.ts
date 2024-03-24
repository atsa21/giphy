import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SearchInputModule } from './components/search-input/search-input.module';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from './components/card/card.module';
import { GifService } from './services/gif.service';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';
import { PaginatorModule } from 'src/app/shared/components/paginator/paginator/paginator.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SearchInputModule,
    CardModule,
    LoaderModule,
    PaginatorModule,
  ],
  providers: [GifService],
})

export class MainModule {}
