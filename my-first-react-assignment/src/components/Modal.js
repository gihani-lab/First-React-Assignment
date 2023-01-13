import { FcCloseUpMode } from "react-icons/fc";

const Modal = ({ close, children }) => {
  return (
    <div className="content">
      <FcCloseUpMode onClick={close} />
      {children}
    </div>
  );
};

export default Modal;
