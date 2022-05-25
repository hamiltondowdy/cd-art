import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import img1 from "../../img/0001.jpg";
import img2 from "../../img/0002.jpg";
import img3 from "../../img/0003.jpg";
import img43 from "../../img/0043.jpg";
import img5 from "../../img/0005.jpg";
import img6 from "../../img/0006.jpg";
import img7 from "../../img/0007.jpg";
import img8 from "../../img/0013.jpg";
import img9 from "../../img/0015.jpg";
import img10 from "../../img/0017.jpg";
import img11 from "../../img/0020.jpg";
import img12 from "../../img/0030.jpg";
import img13 from "../../img/0031.jpg";
import img14 from "../../img/0032.jpg";
import img15 from "../../img/0033.jpg";
import img16 from "../../img/0025.jpg";
import img17 from "../../img/0026.jpg";
import img18 from "../../img/0027.jpg";
import img19 from "../../img/0028.jpg";
import img20 from "../../img/0029.jpg";
import "./styles.css";
import { styled } from '@mui/material/styles';



export default function Mason () {
  return (
    <div id="mas">
        <Box sx={{ minHeight: 100 }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3}} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index} id="ima" className='module'>
            <div className='responsive' id='bord'>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{

                display: 'block',
                width: '100%',
              }}
            />

            </div>

            
          </div>
        ))}
      </Masonry>
    </Box>

    </div>
    
  );
}

const itemData = [
  {
    img: img1,
    title: 'Fern',
  },
  {
    img: img2,
    title: 'Snacks',
  },
  {
    img: img3,
    title: 'Mushrooms',
  },
  {
    img: img43,
    title: 'Tower',
  },
  {
    img: img5,
    title: 'Sea star',
  },
  {
    img: img6,
    title: 'Honey',
  },
  {
    img: img7,
    title: 'Basketball',
  },
  {
    img: img8,
    title: 'Breakfast',
  },
  {
    img: img9,
    title: 'Tree',
  },
  {
    img: img10,
    title: 'Burger',
  },
  {
    img: img11,
    title: 'Camera',
  },
  {
    img: img12,
    title: 'Coffee',
  },
  {
    img: img13,
    title: 'Camping Car',
  },
  {
    img: img14,
    title: 'Hats',
  },
  {
    img: img15,
    title: 'Tomato basil',
  },
  {
    img: img16,
    title: 'Mountain',
  },
  {
    img: img17,
    title: 'Bike',
  },
  {
    img: img18,
    title: 'Tomato basil',
  },
  {
    img: img19,
    title: 'Mountain',
  },
  {
    img: img20,
    title: 'Bike',
  },
];