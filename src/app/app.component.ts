import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    animations: [slideInAnimation]

})
export class AppComponent {

    public title = 'beyond';

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
