import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { NotificationService } from "./services/notification.service";



@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: unknown): void {
        if (error instanceof HttpErrorResponse) {
            return;
        }
        console.error("An error occurred:", error);

        const notificationService = this.injector.get(NotificationService);

        notificationService.notifyError("An unexpected error occurred. Please try again later.");
    }





}
