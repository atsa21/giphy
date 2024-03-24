import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGifData } from '../interfaces';
import { IFilters } from '../../../shared/interfaces/i-filters.interface';
import { Params } from '@angular/router';

@Injectable()
export class GifService {
  private headers = new HttpHeaders();
  private url = environment.giphi.url;
  private apiKey = '?api_key=' + environment.giphi.key;

  constructor(private http: HttpClient) {}

  getTrendingGif(filters: IFilters): Observable<IGifData> {
    const headers = this.headers;
    const params: Params = filters;

    return this.http.get<IGifData>(`${this.url}/trending${this.apiKey}`, { headers, params });
  }

  getSearchGif(filters: IFilters): Observable<IGifData> {
    const headers = this.headers;
    const params: Params = filters;

    return this.http.get<IGifData>(`${this.url}/search${this.apiKey}`, { headers, params });
  }
}
