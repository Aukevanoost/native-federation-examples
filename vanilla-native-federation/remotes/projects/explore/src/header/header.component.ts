import { Component } from "@angular/core";
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
    selector: "mfe-header",
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
    imports: [NavigationComponent]
})
export class HeaderComponent {

}