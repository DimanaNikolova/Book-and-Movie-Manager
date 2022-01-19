import { toast } from 'react-toastify';

export const toastInfo = (message) => {
    toast.info(message, {
        theme: 'colored',
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 2000,
    });
};

export const toastError = (message) => {
    toast.error(message, {
        theme: 'colored',
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 2000,
    });
};
