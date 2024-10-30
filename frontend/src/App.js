import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import SideBar from "./component/Sidebar/SideBar";
import Header from "./component/Header/Header";
import routes from "./routes";
import projectContext from "./Context/projectContext";

function App() {
  const router = useRoutes(routes);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productInfos, setProductInfos] = useState({});
  const [productID, setProductID] = useState(null);
  // Edit Product Modal
  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");
  // New Product
  const [newProdctTitle, setNewProductTitle] = useState("");
  const [newProdctPrice, setNewProductPrice] = useState("");
  const [newProdctCount, setNewProductCount] = useState("");
  const [newProdctImg, setNewProductImg] = useState("");
  const [newProdctPopularity, setNewProductPopularity] = useState("");
  const [newProdctSale, setNewProductSale] = useState("");
  const [newProdctColors, setNewProductColors] = useState("");
  const [newProdctCategoryID, setNewProductCategoryID] = useState("");
  // New Comment
  const [allComments, setAllComments] = useState([]);
  const [openCommnetBodyModal, setOpenCommnetBodyModal] = useState(false);
  const [commentsInfos, setCommentsInfos] = useState({});
  const [commentID, setCommentID] = useState(null);
  const [commentEditArea, setCommentEditArea] = useState("");
  const [openAcceptModal , setOpenAcceptModal] = useState(false)




  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };
  const getAllComments = () => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((Comments) => setAllComments(Comments));
  };

  return (
    <>
      <projectContext.Provider
        value={{
          openDeleteModal,
          setOpenDeleteModal,
          openDetailsModal,
          setOpenDetailsModal,
          openEditModal,
          setOpenEditModal,
          allProducts,
          setAllProducts,
          productInfos,
          setProductInfos,
          productID,
          setProductID,
          productNewTitle,
          setProductNewTitle,
          productNewPrice,
          setProductNewPrice,
          productNewCount,
          setProductNewCount,
          productNewImg,
          setProductNewImg,
          productNewPopularity,
          setProductNewPopularity,
          productNewSale,
          setProductNewSale,
          productNewColors,
          setProductNewColors,
          newProdctTitle,
          setNewProductTitle,
          newProdctPrice,
          setNewProductPrice,
          newProdctCount,
          setNewProductCount,
          newProdctImg,
          setNewProductImg,
          newProdctPopularity,
          setNewProductPopularity,
          newProdctSale,
          setNewProductSale,
          newProdctColors,
          setNewProductColors,
          newProdctCategoryID,
          setNewProductCategoryID,
          getAllProducts,
          getAllComments,
          allComments,
          setAllComments,
          openCommnetBodyModal,
          setOpenCommnetBodyModal,
          commentsInfos,
          setCommentsInfos,
          commentID,
          setCommentID,
          commentEditArea,
          setCommentEditArea,
          openAcceptModal,
          setOpenAcceptModal,
        }}
      >
        <SideBar />
        <div className=" pr-[250px] pl-5 mt-4">
          <Header />
          {router}
        </div>
      </projectContext.Provider>
    </>
  );
}

export default App;
