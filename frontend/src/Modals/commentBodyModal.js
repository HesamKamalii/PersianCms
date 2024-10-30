import React, { useContext, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { IoCloseOutline } from "react-icons/io5";
import projectContext from "../Context/projectContext";

export default function CommnetBodyModal() {
  const contextData = useContext(projectContext);

  return (
    <>
      <Modal
        dismissible
        show={contextData.openCommnetBodyModal}
        onClose={() => contextData.setOpenCommnetBodyModal(false)}
      >
        <div className="flex gap-3 p-3 w-full items-center ">
          <span className="p-3 font-Vazir-Bold-Font">
            محتوای کامنت محصول {contextData.commentsInfos.productID}
          </span>
        </div>
        <Modal.Body>
          <div className="space-y-6">
            <p> {contextData.commentsInfos.body} </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-center">
          <Button
          className="btn ml-4   focus:outline-none focus:ring-0 "
           onClick={() => contextData.setOpenCommnetBodyModal(false)}>
            بستن
          </Button>
 
 
        </Modal.Footer>
      </Modal>
    </>
  );
}
