import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderService } from './services/loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => { 
  // console.log('Teste')
  // return next(req)
  let totalRequests: number = 0;
  const loadingService: LoaderService = inject(LoaderService);

  totalRequests++;
  loadingService.setLoading(true);

  return next(req).pipe(
    finalize(() => {
      totalRequests--;
      if (totalRequests == 0) {
        loadingService.setLoading(false);
      }
    })
  );
};
