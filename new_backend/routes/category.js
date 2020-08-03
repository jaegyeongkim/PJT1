const express = require("express");
const app = express.Router();

// 모든 카테고리 정보 요청
app.get("/", async function (req, res) {
  res.json([
    {
      cat_no: 1,
      cat_title: "간편식",
      cat_img_url: "images/Simple.jpg",
    },
    {
      cat_no: 2,
      cat_title: "과일/채소",
      cat_img_url: "images/Fruit_Veg.jpg",
    },
    {
      cat_no: 3,
      cat_title: "쌀/잡곡/견과",
      cat_img_url: "images/Rice.jpg",
    },
    {
      cat_no: 4,
      cat_title: "정육/계란",
      cat_img_url: "images/Meat.jpg",
    },
    {
      cat_no: 5,
      cat_title: "수산물/건해산",
      cat_img_url: "images/Fish.png",
    },
    {
      cat_no: 6,
      cat_title: "우유/유제품",
      cat_img_url: "images/Milk.jpg",
    },
    {
      cat_no: 7,
      cat_title: "김치/반찬",
      cat_img_url: "images/Kimchi.jpg",
    },
    {
      cat_no: 8,
      cat_title: "라면 / 면류 /  즉석식품",
      cat_img_url: "images/Ramen.jpg",
    },
    {
      cat_no: 9,
      cat_title: "생수 / 음료 / 주류",
      cat_img_url: "images/water.jpg",
    },
    {
      cat_no: 10,
      cat_title: "장류 / 양념 / 가루 / 오일",
      cat_img_url: "images/Source.jpg",
    },
    {
      cat_no: 11,
      cat_title: "과자 / 간식 / 시리얼 / 빙과",
      cat_img_url: "images/Cookie.jpg",
    },
    {
      cat_no: 12,
      cat_title: "베이커리 / 잼 / 샐러드",
      cat_img_url: "images/Bread.jpg",
    },
    {
      cat_no: 13,
      cat_title: "세제 / 제지 / 위생용품",
      cat_img_url: "images/Detergent.jpg",
    },
  ]);
});

module.exports = app;
