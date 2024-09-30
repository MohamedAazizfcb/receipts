import { Component, Inject, inject, OnInit } from '@angular/core';
import { ToastrMessageModel } from '../models/toast-message.model';
import { ToastrService } from '../services/toastr.service';
import { toastrAnimations } from '../../../animations/toastr.animations';
import { CommonModule } from '@angular/common';
import { ToastrMessageTypeEnum } from '../enums/toastr-message-type.enum';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-toastr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.scss',
  animations: toastrAnimations
})
export class ToastrComponent implements OnInit {
  messages: ToastrMessageModel[] = [];
  toastrService = inject(ToastrService);

  ngOnInit() {
    this.toastrService.getMessages().subscribe(
      messages => {
        this.messages = messages;
      },
    );
  }

  getMessageClass= (type: ToastrMessageTypeEnum): string=> {
    switch (type) {
        case ToastrMessageTypeEnum.success:
            return 'toastr-success';
        case ToastrMessageTypeEnum.error:
            return 'toastr-error';
        case ToastrMessageTypeEnum.info:
            return 'toastr-info';
        case ToastrMessageTypeEnum.warning:
            return 'toastr-warning';
        default:
            return '';
    }
}
}