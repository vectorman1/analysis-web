import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

export class CorsInterceptor implements HttpInterceptor {
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		req.headers.set('Access-Control-Allow-Origin', environment.baseUrl);
		return next.handle(req);
	}
}
