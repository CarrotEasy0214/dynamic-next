import { useState, useCallback } from "react";

import Modal from "../../Hook/Modal";

function TTest() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <div>
      <div>여긴 배경화면 입니다</div>
      <div className="font-bold mb-4" onClick={onClickToggleModal}>
        Help & Info
      </div>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <div>
            <div className="mt-4">Product Comparisons</div>
            <div className="mt-4">Product Support</div>
            <div className="my-4">Shopping Info</div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default TTest;
