import Swal from 'sweetalert2';

export class SweetAlert {
  static giveAlert(textHeadLine: string, textAlert: string) {
    Swal.fire({
      title: textHeadLine,
      text: textAlert,
    });
  }
}
