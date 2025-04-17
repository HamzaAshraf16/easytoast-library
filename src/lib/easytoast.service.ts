import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastConfig {
  message: string;
  title?: string;
  type: 'success' | 'warning' | 'error';
  duration?: number;
  isRtl?: boolean;
  okActionText?: string;
  closeActionText?: string;
}

@Injectable({
  providedIn: 'root',
})
export class EasytoastService {
  //بيخزن حاله التويست علشان يظهرها او لا
  //using BehaviorSubject to follow state if change
  private toastSubject = new BehaviorSubject<ToastConfig | null>(null);
  toastState = this.toastSubject.asObservable();

  show(config: ToastConfig) {
    this.toastSubject.next(config);
    if (config.duration) {
      setTimeout(() => this.hide(), config.duration);
    }
  }

  //make state null to disappear toast
  hide() {
    this.toastSubject.next(null);
  }
}
