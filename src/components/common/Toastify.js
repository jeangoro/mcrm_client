import { toast } from "react-toastify";
import { Spinner } from "reactstrap";

export const mcrmToastSuccess = (message) =>
  toast.success(message, {
    toastId: "mcrm-toast",
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
export const mcrmToastWarning = (message) =>
  toast.warning(message, {
    toastId: "mcrm-toast",
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
export const mcrmToastError = (message) =>
  toast.error(message, {
    toastId: "mcrm-toast",
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const mcrmToastLoading = (message) =>
  toast(
    () => (
      <div>
        <Spinner size="sm">Loading...</Spinner>
        <span> {message}</span>
      </div>
    ),
    {
      toastId: "mcrm-toast",
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    }
  );
export const mcrmToastUpdateSuccess = (message) =>
  toast.update("mcrm-toast", {
    render: message,
    type: toast.TYPE.SUCCESS,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const mcrmToastUpdateError = (message) =>
  toast.update("mcrm-toast", {
    render: message,
    type: toast.TYPE.ERROR,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
