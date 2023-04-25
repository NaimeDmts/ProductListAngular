const express = require('express');
const cors = require('cors');

const app = express();

const products = [
  {
    id: 1,
    title: 'MacBook Air',
    description: 'MGN63TU/A M1 8Gb-256Gb Ssd-Retina-13.3inc-Space Grey',
    image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/114754-1-2_small.jpg',
    price: 1135
  },
  {
    id: 2,
    title: 'Acer Aspire 3',
    description: '11.Nesil Core i5 1135G7-8Gb-512Gb Ssd-15.6inc-Mx350 2Gb-Freedos',
    image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/acer/thumb/136446-1_small.jpg',
    price: 542
  },  {
    id: 3,
    title: 'Casper Excalibur',
    description: '12.Nesil Core i5 12450H-GTX1650 4Gb-8Gb-500Gb Ssd-15.6inc-W11',
    image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/casper/thumb/135717-1_small.jpg',
    price: 954
  },
  {
    id: 4,
    title: 'Asus X515ea',
    description: '1.Nesil Core i5 1135G7-8Gb-256Gb Ssd-15.6inc-W11',
    image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/1-133857_small.jpg',
    price: 516
  },  {
    id: 5,
    title: 'Lenovo Ideapad',
    description: 'Gaming 3 11.Nesil Core i5 11320H-GTX1650 4Gb-8Gb-512 Ssd-15.6-W11',
    image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/untitled-1_small.jpg',
    price: 1032
  },
  {
    id: 6,
    title: 'MacBook Air',
    description: 'MGN93TU/A M1 8Gb-256Gb Ssd-Retina-13.3inc-Silver',
    image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/114757-1-3_small.jpg',
    price: 1135
  },
  {
    id: 7,
    title: 'Casper Nirvana',
    description: '11.Nesil Core i5 1135G7-8Gb-500Gb Ssd-15.6inc-W11',
    image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/casper/thumb/135485-1-2_small.jpg',
    price: 619
  },
  {
    id: 8,
    title: 'Acer Nitro 5',
    description: '12.Nesil Core i5 12500H-RTX3050 4Gb-8Gb-512Gb Ssd-15.6inc-W11',
    image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/acer/thumb/135325-1-2_small.jpg',
    price: 619
  }
];

app.use(cors());

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});