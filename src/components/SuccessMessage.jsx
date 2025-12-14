import CheckIcon from "../icons/CheckIcon";
import WrongIcon from "../icons/WrongIcon";

const SuccessMessage = ({ alertMessage }) => {
  // This is a small mapper to fix our dynamic colors with alert message types
  const variants = {
    success: "alert-success",
    error: "alert-error",
    warning: "alert-warning",
    info: "alert-info",
  };

  return (
    <div>
      <div
        role="alert"
        className={`alert ${variants[alertMessage.type]} alert-outline gap-0 mb-5`}
      >
        {alertMessage.status === 0 ? <CheckIcon /> : <WrongIcon />}

        <span className="ml-1">{alertMessage.message}</span>
      </div>
    </div>
  );
};

export default SuccessMessage;
