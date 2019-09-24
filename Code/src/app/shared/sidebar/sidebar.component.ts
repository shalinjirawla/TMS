import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';
import swal from "sweetalert2";

const swalWithBootstrapButtons = Swal.mixin({
    confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
    cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
    buttonsStyling: true,
    customClass: "mycustomBTNclass"
});
declare var $: any;
let TypeUser = '';
TypeUser = localStorage.getItem("Type");
let sessionType = '';
sessionType = sessionStorage.getItem("Type");
let item: any[];
@Component({
    // moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styles: [`
        a:hover {
            text-decoration:none!important;
        }`]
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    public UserItem: any[];
    constructor(private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        let AdminItem: any = [];
        let UserItem: any = [];

        sessionType = sessionStorage.getItem("OriginalType");
        TypeUser = localStorage.getItem("Type");
        console.log(this.menuItems);

        if (this.menuItems != null && this.menuItems != undefined) {

            if (TypeUser != null && TypeUser != undefined && TypeUser != '' && TypeUser == 'Admin') {

                this.menuItems = this.menuItems;
            } else if (TypeUser != null && TypeUser != undefined && TypeUser != '' && TypeUser == 'User') {

                for (var i = 0; i < this.menuItems.length; i++) {

                    if (i == 2) {
                        this.menuItems[i].AccessAllow = false;
                        // this.menuItems=this.menuItems.
                    }
                }

            } else {

            }
            if (TypeUser != null && TypeUser != undefined && TypeUser != '' && TypeUser == 'User') {

                let urlvalue = window.location.href;
                var geturlname = urlvalue.split('/');
                urlvalue = '/' + geturlname[3];
                var urlvalueinmenu = '';
                var originalurl;
                var AccessPages = false;
                for (var i = 0; i < this.menuItems.length; i++) {
                    originalurl = this.menuItems[i]['path'];
                    if (this.menuItems[i].AccessAllow) {
                        if (urlvalue == originalurl) {
                            AccessPages = true;
                            break;
                        }
                    } else {
                        // AccessPages = false;
                        // urlvalueinmenu = null; 

                    }

                }
            }

            if (urlvalueinmenu != null && urlvalueinmenu != undefined && urlvalueinmenu != '') {

            } else {
                if (this.menuItems.length <= 3 && urlvalueinmenu.length <= 0) {
                    if (!AccessPages) {
                        this.router.navigateByUrl("/home");
                        swal({
                            position: 'center',
                            type: 'warning',
                            title: 'Are you Not Able to Access this Page....!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            }
        }




    }

}
