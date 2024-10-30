import React, { useContext, useEffect } from "react";
import projectContext from "../../Context/projectContext";
import DeleteModal from "../../Modals/deleteModal";
import DetailsProductModal from "../../Modals/detailsProductModal";
import EditModal from "../../Modals/editModal";
import ErrorBox from "..//ErrorComponent/errorBox";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineInventory2,
} from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";

export default function ProductTable() {
  const contextData = useContext(projectContext);
  const notifySuccess = () => toast.success("محصول با موفقیت حذف شد");

  useEffect(() => {
    contextData.getAllProducts();
  }, []);

  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:8000/api/products/${contextData.productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        contextData.getAllProducts();
        contextData.setOpenDeleteModal(false);
        notifySuccess();
      });
  };

  const updateProductInfos = () => {
    console.log("edit changes");

    const productNewInfos = {
      title: contextData.productNewTitle,
      price: contextData.productNewPrice,
      count: contextData.productNewCount,
      img: contextData.productNewImg,
      popularity: contextData.productNewPopularity,
      sale: contextData.productNewSale,
      colors: contextData.productNewColors,
    };
    fetch(`http://localhost:8000/api/products/${contextData.productID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productNewInfos),
    })
      .then((res) => res.json())
      .then((result) => contextData.getAllProducts());

    contextData.setOpenEditModal(false);
  };
  return (
    <>
      {contextData.allProducts.length ? (
        <div className="p-6">
          <table className="tableStyle">
            <thead>
              <tr className="text-center p-2">
                <th>عکس</th>
                <th>اسم</th>
                <th>قیمت</th>
                <th>موجودی</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {contextData.allProducts.slice()// برای جلوگیری از تغییر مستقیم در `contextData.allProducts`
              .reverse()
              .map((product) => (
                <tr key={product.id} className="tableTd">
                  <td>
                    <img
                      className="tableImg"
                      src="../../Img/laptop-5673901_1280.jpg"
                      alt={product.title}
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price} تومان</td>
                  <td>{product.count}</td>
                  <td>
                    <div className="tableBottunsDiv ">
                      <button
                        className="btn"
                        onClick={() => {
                          contextData.setOpenEditModal(true);
                          contextData.setProductID(product.id);
                          contextData.setProductNewTitle(product.title);
                          contextData.setProductNewPrice(product.price);
                          contextData.setProductNewCount(product.count);
                          contextData.setProductNewImg(product.img);
                          contextData.setProductNewPopularity(
                            product.popularity
                          );
                          contextData.setProductNewSale(product.sale);
                          contextData.setProductNewColors(product.colors);
                        }}
                      >
                        ویرایش
                      </button>
                      <button
                        className="btn"
                        onClick={() => {
                          contextData.setOpenDetailsModal(true);
                          contextData.setProductInfos(product);
                        }}
                      >
                        جزئیات
                      </button>
                      <button
                        className="btn"
                        onClick={() => {
                          contextData.setOpenDeleteModal(true);
                          contextData.setProductID(product.id);
                        }}
                      >
                        حذف
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <DetailsProductModal />
          <DeleteModal submitAction={deleteModalSubmitAction} message={"آیا از حذف محصول انتخاب شده اطمینان دارید؟"} />
          <EditModal onSubmit={updateProductInfos}>
            <div className="m-2">
              <div className="editProductFormDivInput">
                <MdOutlineDriveFileRenameOutline className="addNewProductFormIcon" />
                <input
                  type="text"
                  placeholder=" نام جدید را وارد کنید"
                  className="editProductFormInput "
                  value={contextData.productNewTitle}
                  onChange={(event) =>
                    contextData.setProductNewTitle(event.target.value)
                  }
                />
              </div>
              <div className="editProductFormDivInput">
                <IoPricetagOutline className="addNewProductFormIcon" />
                <input
                  type="text"
                  placeholder=" قیمت جدید را وارد کنید"
                  className="editProductFormInput "
                  value={contextData.productNewPrice}
                  onChange={(event) =>
                    contextData.setProductNewPrice(event.target.value)
                  }
                />
              </div>
              <div className="editProductFormDivInput">
                <MdOutlineInventory2 className="addNewProductFormIcon" />
                <input
                  type="text"
                  placeholder=" موجودی جدید را وارد کنید"
                  className="editProductFormInput "
                  value={contextData.productNewCount}
                  onChange={(event) =>
                    contextData.setProductNewCount(event.target.value)
                  }
                />
              </div>
              <div className="editProductFormDivInput">
                <AiOutlinePicture className="addNewProductFormIcon" />
                <input
                  type="text"
                  placeholder=" عکس جدید را وارد کنید"
                  className="editProductFormInput "
                  value={contextData.productNewImg}
                  onChange={(event) =>
                    contextData.setProductNewImg(event.target.value)
                  }
                />
              </div>
              <div className="editProductFormDivInput">
                <MdOutlineInventory2 className="addNewProductFormIcon" />
                <input
                  type="text"
                  placeholder=" میزان محبوبیت جدید را وارد کنید"
                  className="editProductFormInput "
                  value={contextData.productNewPopularity}
                  onChange={(event) =>
                    contextData.setProductNewPopularity(event.target.value)
                  }
                />
              </div>
              <div className="editProductFormDivInput">
                <MdOutlineInventory2 className="addNewProductFormIcon" />
                <input
                  type="text"
                  placeholder=" میزان فروش جدید را وارد کنید"
                  className="editProductFormInput "
                  value={contextData.productNewSale}
                  onChange={(event) =>
                    contextData.setProductNewSale(event.target.value)
                  }
                />
              </div>
              <div className="editProductFormDivInput">
                <MdOutlineInventory2 className="addNewProductFormIcon" />
                <input
                  type="text"
                  placeholder=" تعداد رنگ بندی جدید را وارد کنید"
                  className="editProductFormInput "
                  value={contextData.productNewColors}
                  onChange={(event) =>
                    contextData.setProductNewColors(event.target.value)
                  }
                />
              </div>
            </div>
          </EditModal>
        </div>
      ) : (
        <ErrorBox message={"محصولی"} />
      )}
      <ToastContainer
        className={"font-Vazir-Bold-Font"}
        position="bottom-right"
        rtl
      />
    </>
  );
}
