# Easytoast Angular Library

A reusable, responsive Angular 18 toast component for displaying success, warning, and error modals with customizable messages, titles, and actions. Supports both LTR and RTL layouts.

## Features

- Standalone Angular 18 component for easy integration.
- Three toast types: Success, Warning, Error.
- Responsive design for mobile, tablet, and desktop.
- RTL support for right-to-left languages.
- Customizable action buttons (OK and Close) with event emitters.
- Lightweight and tree-shakable.

## Installation

Install the library via npm:

```bash
npm install @hamzaashraflib/easytoast
```

## Usage

### Prerequisites

- Angular 18 or later.
- Node.js and npm installed.

### Step 1: Import the Component

The `EasytoastComponent` is a standalone component, making it easy to use in Angular 18 projects. You can use it in both **standalone** and **module-based** applications.

#### Standalone Application

In your component (e.g., `app.component.ts`), import `EasytoastComponent` and add it to the `imports` array:

```typescript
import { Component } from '@angular/core';
import { EasytoastComponent } from '@hamzaashraflib/easytoast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EasytoastComponent],
  template: `
    <lib-easytoast
      message="Operation completed successfully!"
      title="Success"
      type="success"
      [isRtl]="false"
      okActionText="OK"
      closeActionText="Close"
      (okAction)="onOk()"
      (closeAction)="onClose()"
    ></lib-easytoast>
  `
})
export class AppComponent {
  onOk() {
    console.log('OK button clicked!');
  }

  onClose() {
    console.log('Close button clicked!');
  }
}
```


### Step 2: Configure the Toast

The `EasytoastComponent` supports several inputs and outputs for customization.

#### Inputs

| Input | Type | Description | Example Value |
| --- | --- | --- | --- |
| `message` | `string` | The main message to display. | `"Operation completed!"` |
| `title` | `string` | The title of the toast. | `"Success"` |
| `type` | `'success' | 'warning' | 'error'` | The type of toast (affects styling). | `"warning"` |
| `isRtl` | `boolean` | Enables right-to-left layout. | `true` |
| `okActionText` | `string` | Text for the OK button (optional). | `"Confirm"` |
| `closeActionText` | `string` | Text for the Close button (optional). | `"Dismiss"` |

#### Outputs

| Output | Description | Example Usage |
| --- | --- | --- |
| `okAction` | Emitted when the OK button is clicked. | `(okAction)="onOk()"` |
| `closeAction` | Emitted when the Close button is clicked. | `(closeAction)="onClose()"` |

### Step 3: Dynamic Example

Here’s an example of using `EasytoastComponent` dynamically to show different toast types based on user actions:

```typescript
import { Component } from '@angular/core';
import { EasytoastComponent } from '@hamzaashraflib/easytoast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EasytoastComponent],
  template: `
    <lib-easytoast
      [message]="message"
      [title]="title"
      [type]="type"
      [isRtl]="isRtl"
      [okActionText]="okActionText"
      [closeActionText]="closeActionText"
      [duration]="number"
      (okAction)="onOk()"
      (closeAction)="onClose()"
    ></lib-easytoast>
    <button (click)="showSuccess()">Show Success</button>
    <button (click)="showWarning()">Show Warning</button>
    <button (click)="showError()">Show Error</button>
  `
})
export class AppComponent {
  message = '';
  title = '';
  type: 'success' | 'warning' | 'error' = 'success';
  isRtl = false;
  okActionText = 'OK';
  closeActionText = 'Close';

  showSuccess() {
    this.message = 'Operation completed!';
    this.title = 'Success';
    this.type = 'success';
  }

  showWarning() {
    this.message = 'Something might be wrong!';
    this.title = 'Warning';
    this.type = 'warning';
  }

  showError() {
    this.message = 'An error occurred!';
    this.title = 'Error';
    this.type = 'error';
  }

  onOk() {
    console.log('OK clicked!');
  }

  onClose() {
    console.log('Close clicked!');
  }
}
```

### Responsive Design

The `EasytoastComponent` is fully responsive:

- **Mobile**: Adapts to 95-98% of screen width on small screens (&lt;600px), with stacked action buttons on very small screens (&lt;400px).
- **Tablet/Desktop**: Uses a fixed max-width of 700px for larger screens.
- **RTL Support**: Enable with `isRtl="true"` for right-to-left languages like Arabic.

### Troubleshooting

- **Component Not Rendering**: Ensure `EasytoastComponent` is imported in the `imports` array (standalone) or module.
- **Styles Missing**: Verify that the library’s styles are included in the compiled package (`node_modules/@hamzaashraflib/easytoast`).
- **TypeScript Errors**: Check that the library’s `package.json` points to the correct module paths.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue on the GitHub repository.

## License

MIT License. See the LICENSE file for details.

## Contact

For questions or support, contact Hamza Ashraf at hamzaashrafmostafa@gmail.com