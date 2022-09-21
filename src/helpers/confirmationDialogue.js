import swal from "sweetalert";

export const confirmationDialogue = async ({message, asyncFunction}) => {
  const allow = await swal({
    icon: "warning",
    title: "Are you sure?",
    text: message,
    closeOnClickOutside: false,
    closeOnEsc: false,
    buttons: {
      cancel: {
        text: "Cancel",
        value: false,
        visible: true,
        closeModal: true,
        className: "fw-bold bg-danger text-white",
      },
      confirm: {
        text: "Confirm",
        value: true,
        visible: true,
        closeModal: false,
        className: "fw-bold bg-primary",
      },
    },
  });

  if (allow) {
    document.querySelector(".swal-button--cancel").style.display = "none";
    asyncFunction();
  }
  swal.close();

  swal.stopLoading();
};
