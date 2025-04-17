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
  private toastSubject = new BehaviorSubject<ToastConfig | null>(null);
  toastState = this.toastSubject.asObservable();

  show(config: ToastConfig) {
    this.toastSubject.next(config);
    if (config.duration) {
      setTimeout(() => this.hide(), config.duration);
    }
  }

  hide() {
    this.toastSubject.next(null);
  }
}