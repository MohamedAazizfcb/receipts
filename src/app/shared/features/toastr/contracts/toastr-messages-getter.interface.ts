import { BehaviorSubject } from "rxjs";
import { ToastrMessageModel } from "../models/toast-message.model";

export interface IToastrMessagesProvider {
    getMessages(): BehaviorSubject<ToastrMessageModel[]>;
}