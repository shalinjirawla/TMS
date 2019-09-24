import { Component, ChangeDetectorRef, TemplateRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { RegistrationModel } from 'app/shared/model/RegistrationModel';
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RegistrationService } from 'app/shared/service-proxy/registrationService.service';
import swal from "sweetalert2";
const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  @ViewChild('template') template: TemplateRef<any>;
  UserRegistrationForm: FormGroup;
  SM: RegistrationModel;
  regmodel:RegistrationModel[];
  rows: any[];
  dataTable: any;
  Title: string;
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: "modal-lg"
  };
  constructor(private fb: FormBuilder,
    private service: RegistrationService,
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.LoadForm();
  }
  LoadForm() {
    this.Title = "Add New User";
    this.UserRegistrationForm = this.fb.group({
      Id: [0],
      FirstName: [''],
      LastName: [''],
      UserName: [''],
      Password: [''],
      EmailId: [''],
      Mobile: [''],
      Gender: [''],
      UserType: [''],
      Address: [''],


    });
    this.ListOfRegistrationUsers();
  }
  SaveDetail(Data: RegistrationModel) {
    if (Data != null) {
      this.service.SaveRegistrationDetails(Data).subscribe((res: any) => {
        this.rows = res;
        if (res) {
          swal({
            position: 'center',
            type: 'success',
            title: 'Registration Successfully Saved...!',
            showConfirmButton: false,
            timer: 1500
          });
          this.ListOfRegistrationUsers();
          this.hidePopUp();
          this.Resetform();
        }
      })
    }
  }
  ListOfRegistrationUsers() {
    this.service.UserList().subscribe((responce: RegistrationModel) => {
      this.SM = responce;
      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    });

  }
  ShowData(id:number) {
if(id!=null && id!=undefined)
{
this.service.GetUserDetail(id).subscribe((res:any)=>{
  this.regmodel=res;
  if(res!=null && res!=undefined)
  {  
   this.UserRegistrationForm.patchValue({
    Id: res.Id,
    FirstName: res.FirstName,
    LastName: res.LastName,
    UserName: res.UserName,
    Password: res.Password,
    EmailId: res.EmailId,
    Mobile:res.Mobile,
    Gender: res.Gender,
    UserType: res.UserType,
    Address: res.Address,
  });
  this.ShowPopUp();
  }
})
}
  }
  DeleteUser(id:number) {
    if (id != null && id != undefined) {
      swalWithBootstrapButtons({
        title: 'Are you sure?',
        text: "you won't be revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          this.service.DeleteUserDetails(id).subscribe((res: any) => {
            if (res) {
              swal({
                position: 'center',
                type: 'info',
                title: 'User Successfully Deleted..!',
                timer: 1500
              })
              this.ListOfRegistrationUsers();
            }
          })
        } else {
          swal({
            position: 'center',
            type: 'warning',
            title: 'Registration Details Saved..!',
           
          })
        }
       
      })
     
    }
    
  }
  Resetform()
  {
    this.UserRegistrationForm = this.fb.group({
      Id: [0],
      FirstName: [''],
      LastName: [''],
      UserName: [''],
      Password: [''],
      EmailId: [''],
      Mobile: [''],
      Gender: [''],
      UserType: [''],
      Address: [''],
    });
  }
  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }
  hidePopUp() {
    this.modalRef.hide();
  }
  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }

}
