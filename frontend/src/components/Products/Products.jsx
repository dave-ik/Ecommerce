import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';

// images import 
import Img1 from "../../assets/product/suya plug.jpg";
import Img2 from "../../assets/product/tekk business.jpg";
import Img3 from "../../assets/product/glow city.jpg";
import Img4 from "../../assets/product/100perscent.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Suya Plug",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Tekk Business",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Glow City",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "100Perscent",
        aosDelay: "600",
    }
]
// const ProductsData2 = [
//     {
//         id: 1,
//         img: Img1,
//         title: "Boat Headphone",
//         decription: "120",
//         aosDelay: "0",
//     },
//     {
//         id: 2,
//         img: Img2,
//         title: "Rocky Mountain",
//         decription: "420",
//         aosDelay: "200",
//     },
//     {
//         id: 3,
//         img: Img3,
//         title: "Goggles",
//         decription: "320",
//         aosDelay: "400",
//     },
//     {
//         id: 4,
//         img: Img4,
//         title: "Printed",
//         decription: "220",
//         aosDelay: "600",
//     }
// ]
const Products = () => {
  return (
    <div>
        <div className="container">
            {/* Header section */}
            <Heading title="Businesses" subtitle={"Explore the top Businesses"}/>
            {/* Body section */}
            <ProductCard data={ProductsData} />
            {/* <ProductCard data={ProductsData2} /> */}
        </div>
    </div>
  )
}

export default Products