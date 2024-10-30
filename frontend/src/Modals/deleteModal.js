import React , {useContext}from "react";
import { Button, Modal } from "flowbite-react";
import projectContext from "../Context/projectContext";

// import ReactDOM from "react-dom"
export default function DeleteModal({submitAction , message}) {
    const contextData = useContext(projectContext)

  return  (
    <>
      <Modal  dismissible show={contextData.openDeleteModal} onClose={() => contextData.setOpenDeleteModal(false)}>
        <Modal.Body className="flex items-center justify-center">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {message} 
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex items-center justify-center">
          <Button className="btn ml-4  focus:outline-none focus:ring-0 " onClick={() => submitAction()}>بله</Button>
          <Button className="btn" color="gray" onClick={() => contextData.setOpenDeleteModal(false)}>
            خیر
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
