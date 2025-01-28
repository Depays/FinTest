import React from "react";
import "./ModalTransferBonuses.css";

const ModalTransferBonuses = ({ bonuses }) => {
  return (
    <>
      <div>
        <div>
          <h3 className="modalWindowTitle">Transfer of bonuses</h3>
        </div>
        <div className="modalWindowContent">
          <div style={{ paddingBottom: "25px" }} className="bonusesWindowText">
            <span className="bonusesWindowTextUpper">
              Received bonuses for all time
            </span>
            <span className="bonusesWindowTextLow">{bonuses} $</span>
          </div>
          <div>
            <div className="formContent">
              <form className="formWindow" action="">
                <input
                  className="inputAmount"
                  placeholder="Amount, $"
                  type="text"
                />
              </form>
              <button className="allAmountBtn">All amount</button>
            </div>
            <button className="button">Transfer bonuses</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTransferBonuses;
