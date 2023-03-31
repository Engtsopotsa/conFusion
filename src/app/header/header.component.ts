import { Component } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private modalService: NgbModal) {}

  openLoginModal() {
    const modalRef = this.modalService.open(LoginComponent);
    // Do any additional setup of the modal, such as setting options or passing data to the component
  }
}
