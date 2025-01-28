import React from "react";
import "./ModalGenerateCode.css";

const ModalGenerateCode = ({ bonuses }) => {
  return (
    <>
      <div>
        <div>
          <h3 className="modalWindowTitle">Generate referrer code</h3>
        </div>
        <div className="modalWindowContent">
          {/* <div style={{ paddingBottom: "25px" }} className="bonusesWindowText">
            <span className="bonusesWindowTextUpper">
              Received bonuses for all time
            </span>
            <span className="bonusesWindowTextLow">{bonuses} $</span>
          </div> */}
          <div>
            <div className="formContent">
              <form
                style={{ maxWidth: "none" }}
                className="formWindow"
                action=""
              >
                <input
                  className="inputAmount"
                  placeholder="Specify the recommender code"
                  type="text"
                />
              </form>
            </div>
            <button className="button">Create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalGenerateCode;
