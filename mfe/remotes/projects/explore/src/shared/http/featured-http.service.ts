import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { MFE_ENV } from "../env";

@Injectable()
export class FeaturedHttpService {
    #env = inject(MFE_ENV);
    #http = inject(HttpClient);
    
    public teasers$(): Observable<any> {
        return this.#http
            .get(`${this.#env.api}/featured/teasers`)
            .pipe(catchError(e => {console.warn(e); return []}));
    }

    public recommendations$(sku: string[]): Observable<any> {
        return this.#http
            .post(`${this.#env.api}/featured/recommendations`, {sku})
            .pipe(catchError(e => {console.warn(e); return []}));
    }
}