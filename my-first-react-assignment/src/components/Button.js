import { useState } from "react";
import Modal from "./Modal";

const Button = () => {
  const [status, setStatus] = useState(false);
  return (
    <div className="button">
      {status && (
        <Modal close={() => setStatus(false)}>
          <div>
            <> Don't forget to offer me a job</>
          </div>
        </Modal>
      )}
      <button className="btn" onClick={() => setStatus(true)}>
        Hello, please click me
      </button>
    </div>
  );
};

export default Button;
