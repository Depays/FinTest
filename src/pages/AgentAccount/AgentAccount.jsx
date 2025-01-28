import React, { useEffect, useRef, useState } from "react";

import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Modal from "../../components/Modal/Modal";
import ModalTransferBonuses from "../../components/Modal/ModalTransferBonuses/ModalTransferBonuses";
import ModalGenerateCode from "../../components/Modal/ModalGenerateCode/ModalGenerateCode";

import ReferLink from "./ReferLink/ReferLink";

import icons from "../../resources/icons";
import "./AgentAccount.css";

export default function AgentAccount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [peopleCount, setPeopleCount] = useState(0);
  const buttonBonusesRef = useRef(null);
  const buttonGenerateCode = useRef(null);
  const openModal = (content) => {
    if (content) {
      setModalContent(content);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const User = {
    userRefLink: "https://link.page.link/kKAIjmpw",
    bonuses: {
      available: "0.00",
      received: "0.00",
    },
    agent_number: [
      { name: "ele", count: 0, check: false },
      { name: "", count: 0, check: false },
      { name: "", count: 0, check: false },
      { name: "", count: 0, check: false },
      { name: "", count: 0, check: false },
    ],
  };

  useEffect(() => {
    let count = 0;
    User.agent_number.forEach(function (item, i, arr) {
      item.check === true && ++count;
    });
    setPeopleCount(count);
    console.log(peopleCount);
  }, []);
  return (
    <div className="containerDashboardMain">
      <div className="generalBlocks">
        <SideBar />
        <div className="firstContentBlock">
          <Header name={"AGENT ACCOUNT"} isUser={true} />
          <div className="pageContent">
            <div className="statusBlockPlusAgentNumber">
              <div className="statusWindows">
                <ReferLink userRefLink={User.userRefLink} />
                <div className="statusWindow">
                  <div className="statusTitle">
                    <span className="statusTitleText">Status: Client</span>
                  </div>
                  <div className="statusWindowContent">
                    <div className="requireAndCompany">
                      <div className="listValues">
                        <span className="listTitle">
                          Requirements for status
                        </span>
                        <ul className="listItem">
                          <li>Personal portfolio: 1.000.00 $</li>
                        </ul>
                      </div>
                      <div className="listValues">
                        <span className="listTitle">
                          Company Capital Trust Account Bonuses - UN, VC
                        </span>
                        <ul className="listItem">
                          <li>
                            Bonus client from 1 line: 20% of commission from
                            profit
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div>
                        <span className="listTitle">
                          Freedom Finance account bonuses - BZ, CY, RU
                        </span>
                        <ul className="listItem">
                          <li>
                            Bonus client from 1 line: 20% of commission from
                            profit
                          </li>
                          <li>
                            Bonus client from 2nd line: 10% of commission from
                            profit
                          </li>
                          <li>
                            Bonus client from 3 line: 5% of commission from
                            profit
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="statusWindow">
                  <div className="statusTitle">
                    <span className="statusTitleText">Status: Agent</span>
                  </div>
                  <div className="statusWindowContent">
                    <div className="statusAgentItems">
                      <div className="listValues">
                        <span className="listTitle">
                          Requirements for status
                        </span>
                        <ul className="listItem">
                          <li>Active partners in 1 line: 5 </li>
                          <li>
                            Amount of partner accounts in 1 line: 5,000,00 $
                          </li>
                          <li>Personal portfolio: 500,00 $</li>
                        </ul>
                      </div>
                      <div className="infoText">
                        <span className="greenInfo">
                          An active partner is a client who has one or more
                          accounts with a minimum of $1.000
                        </span>
                      </div>
                    </div>
                    <div className="statusAgentItems">
                      <div className="listValues">
                        <span className="listTitle">
                          Company Capital Trust Account Bonuses - UN, VC
                        </span>
                        <ul className="listItem">
                          <li>
                            Bonus client from 1 line: 20% of commission from
                            profit
                          </li>
                          <li>
                            Agent Bonus: 1% of commission from Pre-IPO purchase.
                            From all lines to the next agent
                          </li>
                        </ul>
                      </div>
                      <div className="infoText">
                        <span className="redInfo">
                          *Agent bonus does not apply to Freedom accounts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="refAndBonusesBlock">
              <div className="bonusesWindows">
                <div className="bonusesWindow">
                  <div className="bonusesWindowContent">
                    <div className="bonusesWindowText">
                      <span className="bonusesWindowTextUpper">
                        Bonuses available
                      </span>
                      <span className="bonusesWindowTextLow">
                        {User.bonuses.available} $
                      </span>
                    </div>
                    <button
                      ref={buttonBonusesRef}
                      onClick={() =>
                        buttonBonusesRef.onClick
                          ? buttonBonusesRef.onClick()
                          : openModal(
                              <ModalTransferBonuses
                                bonuses={User.bonuses.received}
                              />
                            )
                      }
                      className="button"
                    >
                      Transfer to invest account
                    </button>
                  </div>
                </div>
                <div className="bonusesWindow">
                  <div className="bonusesWindowContent">
                    <div className="bonusesWindowText">
                      <span className="bonusesWindowTextUpper">
                        Received bonuses for all time
                      </span>
                      <span className="bonusesWindowTextLow">
                        {User.bonuses.received} $
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agentNumberWindow">
                <div className="agentNumberTitle">
                  <div className="agentNumberTitleText">
                    <span className="bonusesWindowTextUpper">
                      Create your agent number
                    </span>
                    <span className="peopleCount">{peopleCount} out of 5</span>
                  </div>
                  <button
                    ref={buttonGenerateCode}
                    onClick={() =>
                      buttonGenerateCode.onClick
                        ? buttonGenerateCode.onClick()
                        : openModal(<ModalGenerateCode />)
                    }
                    className="agentNumberTitleBtn"
                  >
                    <img src={icons.whitePlus} alt="" />
                  </button>
                </div>
                <ul className="peopleList">
                  {User.agent_number.map((item, index) => (
                    <li className="peopleListItem" key={index}>
                      <span className="peopleListItemTitle">
                        {item.name === "" ? "no_name" : item.name}
                      </span>
                      <div className="peopleListItemContent">
                        <img src={icons.agentAccountPeople} alt="" />
                        <span>{item.count}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
}
