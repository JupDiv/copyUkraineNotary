'use client';

import { useState } from 'react';
import Modal from '../Modal/Modal';
import ImageCallBack from '../ImageCallback/ImageCallBack';

export default function CreateMail() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen ? (
        <Modal statusToggle={isModalOpen} setIsToggle={setIsModalOpen} />
      ) : (
        <ImageCallBack toggleModal={setIsModalOpen} />
      )}
    </>
  );
}
