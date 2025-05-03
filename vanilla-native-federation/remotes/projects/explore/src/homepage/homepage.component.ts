import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from "@angular/core";
import { MODULE_LOADER } from "./homepage.config";

@Component({
    selector: "mfe-homepage",
    templateUrl: "./homepage.component.html",
    styleUrl: "./homepage.component.scss",
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageComponent {
    loadRemoteModule = inject(MODULE_LOADER);

    constructor() {
        this.loadRemoteModule("explore", "./header").then(m => m.bootstrap(this.loadRemoteModule));
    }
}