import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setParams: {
                //method:'geo.gettopartists',
                //country:'spain',
                api_key: '0fc4872687dfd173e433e8b045f39243',
                format: 'json'
            }
        });
        return next.handle(req);

    }
}

