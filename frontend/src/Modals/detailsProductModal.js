import {  Modal } from "flowbite-react";
import React , {useContext} from "react";
import { IoCloseOutline } from "react-icons/io5";
import projectContext from "../Context/projectContext";



export default function DetailsProductModal() {
    const contextData = useContext(projectContext)

  return (
    <>
      <Modal dismissible show={contextData.openDetailsModal} onClose={() => contextData.setOpenDetailsModal(false)} >
      <div className="flex gap-3 p-3 w-full items-center ">
      <IoCloseOutline  onClick={() => contextData.setOpenDetailsModal(false)} className="text-gray-500 hover:text-gray-700 scale-[1.5]">
      </IoCloseOutline>
      <span className='p-3 font-Vazir-Bold-Font'>جزئیات محصول</span>
    </div>
        <Modal.Body >
          <div className="space-y-6">
           <table className="w-full border-separate border-spacing-y-2.5">
            <thead>
                <tr className="text-center [&>th]:font-Vazir-Bold-Font">
                    <th>رنگ‌</th>
                    <th>تعداد رنگ ها</th>
                    <th>ضمانت و خدمات پس از فروش</th>
                    <th>محبوبیت</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                    <td>{contextData.productInfos.colorName}</td>
                    <td>{contextData.productInfos.colors}</td>
                    <td>1 سال گارانتی</td>
                    <td>{contextData.productInfos.popularity}%</td>
                </tr>
            </tbody>
           </table>
          </div>
        </Modal.Body>

      </Modal>
    </>
  );
}
