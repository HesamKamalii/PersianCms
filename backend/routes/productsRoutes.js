const express = require("express");
const SabzlearnShopDB = require("./../db/SabzLearnShop");

const productsRouter = express.Router();

// routes

productsRouter.get("/", (req, res) => {
  console.log('get products');
  let selectAllProductsQuery = `SELECT * FROM Products`;
  SabzlearnShopDB.query(selectAllProductsQuery, (err, result) => {
    console.log('get products query');
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      console.log('get products query result');
      res.send(result);
    }
  });
});

productsRouter.delete("/:productID", (req, res) => {
  let productID = req.params.productID;
  let deleteProductQuery = `DELETE FROM Products WHERE id = ${productID}`;

  SabzlearnShopDB.query(deleteProductQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

productsRouter.put("/:productID", (req, res) => {
  let body = req.body;
  let productID = req.params.productID;

  let updateProductQuery = `UPDATE Products SET title="${body.title}", price=${body.price}, count=${body.count} ,img="${body.img}",popularity=${body.popularity},sale=${body.sale},colors=${body.colors} WHERE id = ${productID}`;
  SabzlearnShopDB.query(updateProductQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

productsRouter.post("/", (req, res) => {
  let body = req.body;

  // ساخت کوئری با استفاده از مقادیر پارامتری
  let addNewProductQuery = `
  INSERT INTO Products (title, price, count, img, popularity, sale, colors, categoryID)
  VALUES (?, ?, ?, ?, ?, ?, ?,?)
`;

  // مقادیر ورودی از بدنه درخواست
  let values = [
    body.title || "",
    body.price || 0,
    body.count || 0,
    body.img || "",
    body.popularity || 0,
    body.sale || 0,
    body.colors || "",
    body.categoryID ||  Math.random() * 10
  ];

  // اجرای کوئری با مقادیر پارامتری
  SabzlearnShopDB.query(addNewProductQuery, values, (err, result) => {
    if (err) {
      console.log(err);
      // ارسال پیام خطا به صورت JSON
      res.status(500).json({ success: false, error: err.message });
    } else {
      // ارسال نتیجه موفقیت‌آمیز به صورت JSON
      res.status(201).json({ success: true, data: result });
    }
  });
});


module.exports = productsRouter;
