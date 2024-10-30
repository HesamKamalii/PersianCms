import React, { Children, useContext } from "react";
import { Modal, Button } from "flowbite-react";
import projectContext from "../Context/projectContext";

export default function EditModal({ onSubmit, children }) {
  const contextData = useContext(projectContext);

  return (
    <Modal
      dismissible
      show={contextData.openEditModal}
      onClose={() => contextData.setOpenEditModal(false)}
    >
      <span className="p-3 font-Vazir-Bold-Font">ویرایش محصول</span>
      <Modal.Body >
        <h1>اطلاعات جدید را وارد کنید</h1>

        {children}
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-center">
        <Button
          className="btn ml-4  focus:outline-none focus:ring-0 "
          onClick={() => onSubmit()}
        >
          ثبت تغییرات
        </Button>
        <Button
          className="btn"
          color="gray"
          onClick={() => contextData.setOpenEditModal(false)}
        >
          لغو
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
