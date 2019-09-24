import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { l } from '@angular/core/src/render3';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    constructor(private router: Router, ) { }
    Logout() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
        event.preventDefault();
    }
}
