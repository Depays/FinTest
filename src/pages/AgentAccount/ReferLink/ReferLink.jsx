import React from "react";

import icons from "../../../resources/icons";

const ReferLink = ({ userRefLink }) => {
  return (
    <div className="referLinkWindow">
      <div className="referLinkContent">
        <details open>
          <summary className="refLinkTitle">Build a team and earn!</summary>
          <div className="detailsMainAccount">
            <div className="detailsContent">
              <div className="detailsText">
                <p>
                  Company shares 25% of the profits with you for your active
                  participation in the development and building of the
                  structure. Invite new clients to the company and get bonuses
                  in the form of real money. Copy the link and share with your
                  friends! Create up to 5 unique links and track which one is
                  more efficient.
                </p>
              </div>
              <div className="refLink">
                <div className="refLinkDiv">
                  <span className="refLinkText">{userRefLink}</span>
                </div>
                <button className="button">
                  <img src={icons.btnCopy} alt="" />
                  Copy
                </button>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default ReferLink;
