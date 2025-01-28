import React, { useState } from 'react';
import './OperationStatistic.css';
import Indicator from '../../../components/Indicator/Indicator';
import icons from '../../../resources/icons';
import Modal from '../../../components/Modal/Modal';
import ModalPlusDeposit from '../../../components/Modal/ModalPlusDeposit/ModalPlusDeposit';

export default function OperationStatistic({ changeContent }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const buttons = [
    {
      icon: icons.addCircle,
      name: 'Deposit',
      content: <ModalPlusDeposit onContentChange={setModalContent} withdraw={false} />
    },
    {
      icon: icons.minusCircle,
      name: 'Withdraw',
      content: <ModalPlusDeposit onContentChange={setModalContent} withdraw={true} />
    },
    {
      icon: '',
      name: 'Operations',
      content: null,
      // При нажатии на "Operations" меняем контент в родительском компоненте
      onClick: () => changeContent('operations'),
    },
    {
      icon: '',
      name: 'Fond statement',
      content: <ModalPlusDeposit withdraw={false} fondStatement={true} />,
    },
  ];

  const openModal = (content) => {
    if (content) {
      setModalContent(content);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='statisticContainer'>
      <div className='stats'>
        <Indicator icon={icons.greenIndicator} name={'Replenished USD'} price={0} symbol={'%'} />
        <Indicator icon={icons.redIndicator} name={'Withdrawn USD'} price={0} symbol={'$'} />
        <Indicator icon={''} name={'Total fond deposit'} price={0} symbol={'$'} isRight={true} />
      </div>
      <div className='buttons'>
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`funcButton ${index === 0 ? 'active' : ''}`}
            style={{
              backgroundColor: index === 0 ? '#F6AC12' : 'transparent',
              border: index === 0 ? 'none' : '1.51px solid #E2E1DD',
            }}
            onClick={() => button.onClick ? button.onClick() : openModal(button.content)}
          >
            <div className='dataBtn'>
              {button.icon && <img src={button.icon} alt={button.name} />}
              <p className='dataBtnName'>{button.name}</p>
            </div>
          </button>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
}
