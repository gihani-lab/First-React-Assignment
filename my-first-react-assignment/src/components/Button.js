import { useState } from "react";
import Modal from "./Modal";

const Button = () => {
  const [status, setStatus] = useState(false);
  return (
    <div className="button">
      {status && (
        <Modal close={() => setStatus(false)}>
          <div className="rainbow-text">
            <> Don't forget to offer me a job</>
          </div>
        </Modal>
      )}
      <button className="rainbow-text" onClick={() => setStatus(true)}>
        Hello, please click me
      </button>
    </div>
  );
};

export default Button;
