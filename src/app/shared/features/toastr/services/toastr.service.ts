import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrMessageModel } from '../models/toast-message.model';
import { IToastrMessagesProvider } from '../contracts/toastr-messages-getter.interface';
import { IToastrService } from '../contracts/toastr.interface';
import { ToastrMessageTypeEnum } from '../enums/toastr-message-type.enum';
import { TOASTR_MESSAGE_DURATION } from '../constants/toastr.const';

@Injectable({ providedIn: 'root' })
export class ToastrService implements IToastrService, IToastrMessagesProvider  {
    private messageStack: ToastrMessageModel[] = [];
    private messages$ = new BehaviorSubject<ToastrMessageModel[]>([]);

    private addMessage= (messageText: string, messageType: ToastrMessageTypeEnum): void=> {
        let toastrMessage = {
            id: Date.now(),
            message: messageText,
            type: messageType,
        }
        this.messageStack.push(toastrMessage);
        this.messages$.next([...this.messageStack]);

        setTimeout(() => {
            this.removeMessage(toastrMessage.id);
        }, TOASTR_MESSAGE_DURATION);
    }
    private removeMessage= (id: number): void=> {
        this.messageStack = this.messageStack.filter(msg => msg.id !== id);
        this.messages$.next([...this.messageStack]);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////

    success= (message: string): void=> {
        this.addMessage(message, ToastrMessageTypeEnum.success);
    }
    error= (message: string): void=> {
        this.addMessage(message, ToastrMessageTypeEnum.error);
    }
    info= (message: string): void=> {
        this.addMessage(message, ToastrMessageTypeEnum.info);
    }
    warning= (message: string): void=> {
        this.addMessage(message, ToastrMessageTypeEnum.warning);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////

    getMessages= (): BehaviorSubject<ToastrMessageModel[]>=> {
        return this.messages$;
    }
}
