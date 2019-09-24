import { Component, TemplateRef } from "@angular/core";
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormControl } from '@angular/forms';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    
    modalRef: BsModalRef;    
    config:ModalOptions = {
        backdrop: true,
        ignoreBackdropClick: true,
        class : 'modal-lg'
      };

    constructor(private modalService: BsModalService) { }
    name = new FormControl('');
    Displ() {
        Swal({
            position: 'center',
            type: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    }
    updateName()
    {

    }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(this.config);
    }
}