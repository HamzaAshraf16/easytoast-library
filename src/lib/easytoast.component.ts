import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-easytoast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-backdrop" [style.display]="show ? 'flex' : 'none'">
      <div
        class="toast"
        [ngClass]="{
          'toast-success': type === 'success',
          'toast-warning': type === 'warning',
          'toast-error': type === 'error',
          'rtl': isRtl
        }"
      >
        <div class="toast-header">
          <div class="header-content">
            <i [ngClass]="getIconClass()"></i>
            <strong>{{ title }}</strong>
          </div>
        </div>
        <div class="toast-body">
          {{ message }}
          <div class="action-buttons" *ngIf="okActionText || closeActionText">
            <button
              *ngIf="okActionText"
              class="action-btn ok-btn"
              (click)="okAction.emit()"
            >
              {{ okActionText }}
            </button>
            <button
              *ngIf="closeActionText"
              class="action-btn close-btn"
              (click)="closeAction.emit()"
            >
              {{ closeActionText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .toast-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1050;
      }
      .toast {
        width: 90%;
        max-width: 700px;
        min-width: 300px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        animation: fadeIn 0.3s ease;
        overflow: hidden;
      }
      .toast-success {
        background-color: #e6f4ea;
        border: 1px solid #34c759;
        color: #1a3c24;
      }
      .toast-warning {
        background-color: #fff4e5;
        border: 1px solid #ff9500;
        color: #5c4033;
      }
      .toast-error {
        background-color: #fce4e4;
        border: 1px solid #ff3b30;
        color: #5c1e1e;
      }
      .toast-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 1rem;
        background-color: rgba(255, 255, 255, 0.1);
        font-weight: 600;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      .header-content {
        display: flex;
        align-items: center;
      }
      .toast-header i {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      }
      .toast-body {
        padding: 1rem;
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .close {
        background: none;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        color: inherit;
        opacity: 0.7;
        transition: opacity 0.2s;
      }
      .close:hover {
        opacity: 1;
      }
      .action-buttons {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
      }
      .action-btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
        font-size: 0.9rem;
      }
      .ok-btn {
        background-color: #007bff;
        color: white;
      }
      .ok-btn:hover {
        background-color: #0056b3;
      }
      .close-btn {
        background-color: #6c757d;
        color: white;
      }
      .close-btn:hover {
        background-color: #5a6268;
      }
      .rtl {
        direction: rtl;
      }
      .rtl .toast-header i {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      }
      .rtl .action-buttons {
        justify-content: center;
      }
      .rtl .close {
        order: -1;
      }
      .icon-success::before {
        content: '✔';
        color: #34c759;
      }
      .icon-warning::before {
        content: '⚠';
        color: #ff9500;
      }
      .icon-error::before {
        content: '✖';
        color: #ff3b30;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      @media (max-width: 600px) {
        .toast {
          width: 95%;
          min-width: 250px;
        }
        .toast-header {
          padding: 0.5rem 0.75rem;
        }
        .toast-body {
          padding: 0.75rem;
          font-size: 0.9rem;
        }
        .close {
          font-size: 1rem;
        }
        .action-btn {
          padding: 0.4rem 0.8rem;
          font-size: 0.8rem;
        }
        .toast-header i {
          margin-right: 0.4rem;
          margin-left: 0.4rem;
        }
      }
      @media (max-width: 400px) {
        .toast {
          width: 98%;
          min-width: 200px;
        }
        .toast-body {
          font-size: 0.85rem;
        }
        .action-buttons {
          flex-direction: column;
          align-items: center;
        }
        .action-btn {
          width: 100%;
          text-align: center;
        }
      }
    `,
  ],
})
export class EasytoastComponent {
  @Input() message: string = '';
  @Input() title: string = '';
  @Input() type: 'success' | 'warning' | 'error' = 'success';
  @Input() isRtl: boolean = false;
  @Input() okActionText: string = '';
  @Input() closeActionText: string = '';
  @Output() okAction = new EventEmitter<void>();
  @Output() closeAction = new EventEmitter<void>();
  show: boolean = true;

  getIconClass() {
    return {
      'icon-success': this.type === 'success',
      'icon-warning': this.type === 'warning',
      'icon-error': this.type === 'error',
    };
  }

  
}