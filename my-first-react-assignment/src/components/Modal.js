import { MdClose } from "react-icons/md";

const Modal = ({ close, children }) => {
  return (
    <div className="content">
      <MdClose onClick={close} />
      {children}
    </div>
  );
};

export default Modal;
