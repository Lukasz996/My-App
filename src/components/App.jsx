import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal, selectModalStatus } from './modalSlice';
import Modal from './modalSlice';



function App() {
  const dispatch = useDispatch();
  const showModal = useSelector(selectModalStatus);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <h1>Witaj na stronie!</h1>
      <p>To jest moja pierwsza strona w aplikacji React z Redux Toolkit.</p>

      <button onClick={handleOpenModal}>Otwórz modal</button>

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2>Modal</h2>
          <p>To jest zawartość modala.</p>
          <button onClick={handleCloseModal}>Zamknij</button>
        </Modal>
      )}
    </div>
  );
}

export default App;