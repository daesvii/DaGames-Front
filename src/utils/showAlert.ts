import Swal from 'sweetalert2';

export const showAlert = async (title: string, text: string, icon: 'success' | 'error') => {
  return await Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'OK',
  });
};
