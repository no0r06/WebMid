type ToastType = "success" | "error" | "warning";

export const toastService = {
  show: (message: string, type: ToastType = "success") => {
    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.style.padding = "10px 15px";
    toast.style.borderRadius = "8px";
    toast.style.color = "white";
    toast.style.zIndex = "9999";

    if (type === "success") toast.style.background = "green";
    if (type === "error") toast.style.background = "red";
    if (type === "warning") toast.style.background = "orange";

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2000);
  },
};