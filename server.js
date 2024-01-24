import express from 'express';
const app = express();

const data = [
  {
    id: 1,
    name: "iPhone 12",
    brand: "Apple",
    price: 999,
    max: 6,
    color: "Black",
    storage: "128GB",
    isHot: true,
    isFeatured: true,
    image:
      "https://fastly.picsum.photos/id/292/500/800.jpg?hmac=PcScnijuHUv8oc3hPbaC1PL1pk-lPVzX4E3LE0PraYs",
    description:
      "The iPhone 12 is the latest flagship smartphone from Apple, featuring a stunning design and powerful performance.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    brand: "Samsung",
    price: 799,
    max: 6,
    color: "Phantom Gray",
    storage: "256GB",
    isHot: true,
    isFeatured: false,
    image:
      "https://fastly.picsum.photos/id/244/500/800.jpg?hmac=Jn_n4pMueEy-uJoaU5xsmu53r_qeAcKh_1FLx7y7_kw",
    description:
      "The Samsung Galaxy S21 is a high-end Android smartphone with a brilliant display and advanced camera capabilities.",
  },
  {
    id: 3,
    name: "Google Pixel 6",
    brand: "Google",
    price: 699,
    max: 6,
    color: "Sorta Sage",
    storage: "128GB",
    isHot: false,
    isFeatured: true,
    image:
      "https://fastly.picsum.photos/id/774/500/800.jpg?hmac=ExRMm7YlOGBNWXx268Cxd6p03T3trZ9hQ0ZkVLXVKgM",
    description:
      "The Google Pixel 6 offers an exceptional camera experience and a clean, stock Android user interface.",
  },
  {
    id: 4,
    name: "OnePlus 9 Pro",
    brand: "OnePlus",
    max: 6,
    price: 899,
    color: "Morning Mist",
    storage: "256GB",
    isHot: false,
    isFeatured: false,
    image:
      "https://fastly.picsum.photos/id/767/500/800.jpg?hmac=oSwUXuU3vl_MTHZuBlDMywa_oFW9ji-Mc-rrJGFRw_E",
    description:
      "The OnePlus 9 Pro is a premium smartphone with a smooth display, fast charging, and powerful performance.",
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    brand: "Xiaomi",
    price: 699,
    max: 6,
    color: "Midnight Gray",
    storage: "128GB",
    isHot: true,
    isFeatured: true,
    image:
      "https://fastly.picsum.photos/id/435/500/800.jpg?hmac=DRA7MR2tkyK79KJvlnVvgEN1s7kPsOHD6TryTk65Jis",
    description:
      "The Xiaomi Mi 11 is a flagship phone with a high-resolution display, top-of-the-line processor, and impressive camera system.",
  },
  {
    id: 6,
    name: "Huawei P40 Pro",
    brand: "Huawei",
    price: 899,
    max: 6,
    color: "Silver Frost",
    storage: "256GB",
    isHot: false,
    isFeatured: false,
    image:
      "https://fastly.picsum.photos/id/559/500/800.jpg?hmac=FtNlV90OUrIKrGNmtK1XfWQ94GyNuuItCWjLO-Uvm2w",
    description:
      "The Huawei P40 Pro is a feature-packed smartphone with a stunning design, powerful camera capabilities, and long-lasting battery life.",
  },
  {
    id: 7,
    name: "Sony Xperia 1 III",
    brand: "Sony",
    price: 1099,
    max: 6,
    color: "Black",
    storage: "256GB",
    isHot: false,
    isFeatured: true,
    image:
      "https://fastly.picsum.photos/id/980/500/800.jpg?hmac=ReOLCCHmpPdG0QqKVuv7ba_5GuumCF1off1NQ-Tp57w",
    description:
      "The Sony Xperia 1 III is a premium smartphone with a 4K OLED display, professional-grade camera features, and exceptional audio quality.",
  },
  {
    id: 8,
    name: "LG Velvet",
    max: 6,
    brand: "LG",
    price: 599,
    color: "Aurora Gray",
    storage: "128GB",
    isHot: true,
    isFeatured: false,
    image:
      "https://fastly.picsum.photos/id/873/500/800.jpg?hmac=uj56VhQ9stKIZd59a-ffsGUa1QJGSlesbMP58d1jGFs",
    description:
      "The LG Velvet is a stylish smartphone with a sleek design, vibrant display, and versatile camera system.",
  },
];



// 跨域中间件
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源的跨域请求
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // 允许的 HTTP 方法
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头
  next();
});

app.get("/products",(req, res)=>{
    res.json(data)
})

app.get("/product/:id",(req, res)=>{
    const id = req.params.id
    const product = data.find((item)=>item.id == id)
    res.json(product)
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
