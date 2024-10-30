import React, { useContext } from "react";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineInventory2,
  MdFavoriteBorder,
} from "react-icons/md";
import { IoColorPaletteOutline, IoPricetagOutline } from "react-icons/io5";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";
import { CiBarcode } from "react-icons/ci";
import projectContext from "../../Context/projectContext";
import ImageUploader from "../../imageUploader";

export default function AddNewProduct() {
  const contextData = useContext(projectContext);

  const newProductInfos = {
    title: contextData.newProdctTitle || "", // مقدار پیش‌فرض در صورت خالی بودن
    price: contextData.newProdctPrice || 0,
    count: contextData.newProdctCount || 0,
    img: contextData.newProdctImg || "",
    popularity: contextData.newProdctPopularity || 0, // مقدار پیش‌فرض
    sale: contextData.newProdctSale || 0,
    colors: contextData.newProdctColors || "",
    categoryID: contextData.newProdctCategoryID || null, // اضافه کردن categoryID
  };
  const emptyInputs = () => {
    contextData.setNewProductTitle("");
    contextData.setNewProductPrice("");
    contextData.setNewProductCount("");
    contextData.setNewProductImg("");
    contextData.setNewProductPopularity("");
    contextData.setNewProductSale("");
    contextData.setNewProductColors("");
    contextData.setNewProductCategoryID("");
  };
  const addNewProductBtn = (event) => {
    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        emptyInputs()
        contextData.getAllProducts();
        console.log(result);
      });
    console.log(newProductInfos);
  };
  return (
    <>
      <div className="mt-16 p-6 ">
        <h1 className="font-Vazir-Bold-Font text-2xl">افزودن محصول جدید</h1>
        <form
          action="#"
          className="mt-8  bg-whiteColor flex items-end flex-col p-5 rounded-2xl shadow-md"
        >
          <div className="w-full grid grid-cols-2 grid-rows-4 gap-10">
            <div className="addNewProductFormDivInput  ">
              <MdOutlineDriveFileRenameOutline className="addNewProductFormIcon" />
              <input
                className="addNewProductFormInput"
                type="text"
                placeholder="نام محصول را بنویسید"
                value={contextData.newProdctTitle}
                onChange={(event) =>
                  contextData.setNewProductTitle(event.target.value)
                }
              />
            </div>
            <div className="addNewProductFormDivInput ">
              <PiCurrencyCircleDollarLight className="addNewProductFormIcon" />

              <input
                className="addNewProductFormInput "
                type="text"
                placeholder=" قیمت محصول را بنویسید"
                value={contextData.newProdctPrice}
                onChange={(event) =>
                  contextData.setNewProductPrice(event.target.value)
                }
              />
            </div>
            <div className="addNewProductFormDivInput ">
              <MdOutlineInventory2 className="addNewProductFormIcon" />

              <input
                className="addNewProductFormInput"
                type="text"
                placeholder="موجودی  محصول را بنویسید"
                value={contextData.newProdctCount}
                onChange={(event) =>
                  contextData.setNewProductCount(event.target.value)
                }
              />
            </div>
            <div className="addNewProductFormDivInput ">
              <AiOutlinePicture className="addNewProductFormIcon" />

              <input
                className="addNewProductFormInput"
                type="text"
                placeholder="عکس محصول را وارد کنید"
                value={contextData.newProdctImg}
                onChange={(event) =>
                  contextData.setNewProductImg(event.target.value)
                }
              />
            </div>
            <div className="addNewProductFormDivInput ">
              <MdFavoriteBorder className="addNewProductFormIcon" />

              <input
                className="addNewProductFormInput"
                type="text"
                placeholder="میزان محبوبیت محصول را بنویسید"
                value={contextData.newProdctPopularity}
                onChange={(event) =>
                  contextData.setNewProductPopularity(event.target.value)
                }
              />
            </div>
            <div className="addNewProductFormDivInput ">
              <IoPricetagOutline className="addNewProductFormIcon" />

              <input
                className="addNewProductFormInput"
                type="text"
                placeholder="میزان فروش محصول را بنویسید"
                value={contextData.newProdctSale}
                onChange={(event) =>
                  contextData.setNewProductSale(event.target.value)
                }
              />
            </div>
            <div className="addNewProductFormDivInput ">
              <IoColorPaletteOutline className="addNewProductFormIcon" />

              <input
                className="addNewProductFormInput"
                type="text"
                placeholder="تعداد رنگ محصول را وارد کنید"
                value={contextData.newProdctColors}
                onChange={(event) =>
                  contextData.setNewProductColors(event.target.value)
                }
              />
            </div>
            <div className="addNewProductFormDivInput ">
              <CiBarcode className="addNewProductFormIcon" />

              <input
                className="addNewProductFormInput"
                type="text"
                placeholder="کد دسته بندی محصول را وارد کنید"
                value={contextData.newProdctCategoryID}
                onChange={(event) =>
                  contextData.setNewProductCategoryID(event.target.value)
                }
              />
            </div>
          </div>
          <button className="btn mt-12" onClick={addNewProductBtn}>
            ثبت محصول
          </button>
        </form>
      </div>

    </>
  );
}
