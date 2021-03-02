import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    constructor() {}

    get apiBaseUrl(): string {
        return environment.production ? 
            '' : 'http://localhost:7070/api/v1/'
    }
}