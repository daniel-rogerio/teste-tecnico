import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading: boolean = false;

  setLoading(loadStatus: boolean): void {
    this.loading = loadStatus;
  }

  getLoading(): boolean {
    return this.loading;
  }
}
