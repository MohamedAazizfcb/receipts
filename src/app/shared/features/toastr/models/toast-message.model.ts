import { ToastrMessageTypeEnum } from "../enums/toastr-message-type.enum";

export interface ToastrMessageModel {
    id: number;
    message: string;
    type: ToastrMessageTypeEnum;
}
  