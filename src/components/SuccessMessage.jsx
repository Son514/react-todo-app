import CheckIcon from "../icons/CheckIcon";
import WrongIcon from "../icons/WrongIcon";

const SuccessMessage = ({ alertMessage }) => {
  return (
    <div>
      <div
        role="alert"
        className={`alert alert-${alertMessage.type} alert-outline gap-0 mb-5`}
      >
        {alertMessage.status === 0 ? <CheckIcon /> : <WrongIcon />}

        <span className="ml-1">{alertMessage.message}</span>
      </div>
    </div>
  );
};

export default SuccessMessage;
