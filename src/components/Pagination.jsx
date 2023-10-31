import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import One from "../assets/product1.png"
import Two from "../assets/product2.png"
import Three from "../assets/product3.png"
import Four from "../assets/product4.png"
import Five from "../assets/product5.png"
import Six from "../assets/product6.png"
import Seven from "../assets/product7.png"
import Eight from "../assets/product8.png"
import Nine from "../assets/product21.png"
import Ten from "../assets/product10.png"
import Eleven from "../assets/product11.png"
import Twilve from "../assets/product13.png"
import Flex from './Flex';

// Example items, to simulate fetching from another resources.
const items = [
    {
        src : One,
        name : "Produt Number 1",
        badge : "10%",
        price : 55
    },
    {
        src : Two,
        name : "Produt Number 2",
        badge : "10%",
        price : 55
    },
    {
        src : Three,
        name : "Produt Number 3",
        badge : "10%",
        price : 55
    },
    {
        src : Four,
        name : "Produt Number 4",
        badge : "10%",
        price : 55
    },
    {
        src : Five,
        name : "Produt Number 5",
        badge : "10%",
        price : 55
    },
    {
        src : Six,
        name : "Produt Number 6",
        badge : "10%",
        price : 55
    },
    {
        src : Seven,
        name : "Produt Number 7",
        badge : "10%",
        price : 55
    },
    {
        src : Eight,
        name : "Produt Number 8",
        badge : "10%",
        price : 55
    },
    {
        src : Nine,
        name : "Produt Number 9",
        badge : "10%",
        price : 55
    },
    {
        src : Ten,
        name : "Produt Number 10",
        badge : "10%",
        price : 55
    },
    {
        src : Eleven,
        name : "Produt Number 11",
        badge : "10%",
        price : 55
    },
    {
        src : Twilve,
        name : "Produt Number 12",
        badge : "10%",
        price : 55
    },

    {
        src : Twilve,
        name : "Produt Number 13",
        badge : "10%",
        price : 55
    },

    {
        src : Eleven,
        name : "Produt Number 14",
        badge : "10%",
        price : 55
    },

    {
        src : Ten,
        name : "Produt Number 15",
        badge : "10%",
        price : 55
    },

    {
        src : Nine,
        name : "Produt Number 16",
        badge : "10%",
        price : 55
    },
    {
        src : Eight,
        name : "Produt Number 17",
        badge : "10%",
        price : 55
    },
    {
        src : Seven,
        name : "Produt Number 18",
        badge : "10%",
        price : 55
    },
    {
        src : Six,
        name : "Produt Number 19",
        badge : "10%",
        price : 55
    },
    {
        src : Five,
        name : "Produt Number 20",
        badge : "10%",
        price : 55
    },
    {
        src : Four,
        name : "Produt Number 21",
        badge : "10%",
        price : 55
    },
    {
        src : Three,
        name : "Produt Number 22",
        badge : "10%",
        price : 55
    },
    {
        src : Two,
        name : "Produt Number 23",
        badge : "10%",
        price : 55
    },
    {
        src : One,
        name : "Produt Number 14",
        badge : "10%",
        price : 55
    },




    {
        src : One,
        name : "Produt Number 25",
        badge : "10%",
        price : 55
    },
    {
        src : Two,
        name : "Produt Number 26",
        badge : "10%",
        price : 55
    },
    {
        src : Three,
        name : "Produt Number 27",
        badge : "10%",
        price : 55
    },
    {
        src : Four,
        name : "Produt Number 28",
        badge : "10%",
        price : 55
    },
    {
        src : Five,
        name : "Produt Number 29",
        badge : "10%",
        price : 55
    },
    {
        src : Six,
        name : "Produt Number 30",
        badge : "10%",
        price : 55
    },
    {
        src : Seven,
        name : "Produt Number 31",
        badge : "10%",
        price : 55
    },
    {
        src : Eight,
        name : "Produt Number 32",
        badge : "10%",
        price : 55
    },
    {
        src : Nine,
        name : "Produt Number 33",
        badge : "10%",
        price : 55
    },
    {
        src : Ten,
        name : "Produt Number 34",
        badge : "10%",
        price : 55
    },
    {
        src : Eleven,
        name : "Produt Number 35",
        badge : "10%",
        price : 55
    },
    {
        src : Twilve,
        name : "Produt Number 36",
        badge : "10%",
        price : 55
    },
    {
        src : One,
        name : "Produt Number 37",
        badge : "10%",
        price : 55
    },
    {
        src : Two,
        name : "Produt Number 38",
        badge : "10%",
        price : 55
    },
    {
        src : Three,
        name : "Produt Number 39",
        badge : "10%",
        price : 55
    },
    {
        src : Four,
        name : "Produt Number 40",
        badge : "10%",
        price : 55
    },
    {
        src : Five,
        name : "Produt Number 41",
        badge : "10%",
        price : 55
    },
    {
        src : Six,
        name : "Produt Number 42",
        badge : "10%",
        price : 55
    },
    {
        src : Seven,
        name : "Produt Number 43",
        badge : "10%",
        price : 55
    },
    {
        src : Eight,
        name : "Produt Number 44",
        badge : "10%",
        price : 55
    },
    {
        src : Nine,
        name : "Produt Number 45",
        badge : "10%",
        price : 55
    },
    {
        src : Ten,
        name : "Produt Number 46",
        badge : "10%",
        price : 55
    },
    {
        src : Eleven,
        name : "Produt Number 47",
        badge : "10%",
        price : 55
    },
    {
        src : Twilve,
        name : "Produt Number 48",
        badge : "10%",
        price : 55
    },

    {
        src : Twilve,
        name : "Produt Number 49",
        badge : "10%",
        price : 55
    },

    {
        src : Eleven,
        name : "Produt Number 50",
        badge : "10%",
        price : 55
    },

    {
        src : Ten,
        name : "Produt Number 51",
        badge : "10%",
        price : 55
    },

    {
        src : Nine,
        name : "Produt Number 52",
        badge : "10%",
        price : 55
    },
    {
        src : Eight,
        name : "Produt Number 53",
        badge : "10%",
        price : 55
    },
    {
        src : Seven,
        name : "Produt Number 54",
        badge : "10%",
        price : 55
    },
    {
        src : Six,
        name : "Produt Number 55",
        badge : "10%",
        price : 55
    },
    {
        src : Five,
        name : "Produt Number 56",
        badge : "10%",
        price : 55
    },
    {
        src : Four,
        name : "Produt Number 57",
        badge : "10%",
        price : 55
    },
    {
        src : Three,
        name : "Produt Number 58",
        badge : "10%",
        price : 55
    },
    {
        src : Two,
        name : "Produt Number 59",
        badge : "10%",
        price : 55
    },
    {
        src : One,
        name : "Produt Number 60",
        badge : "10%",
        price : 55
    },




    {
        src : One,
        name : "Produt Number 61",
        badge : "10%",
        price : 55
    },
    {
        src : Two,
        name : "Produt Number 62",
        badge : "10%",
        price : 55
    },
    {
        src : Three,
        name : "Produt Number 63",
        badge : "10%",
        price : 55
    },
    {
        src : Four,
        name : "Produt Number 64",
        badge : "10%",
        price : 55
    },
    {
        src : Five,
        name : "Produt Number 65",
        badge : "10%",
        price : 55
    },
    {
        src : Six,
        name : "Produt Number 66",
        badge : "10%",
        price : 55
    },
    {
        src : Seven,
        name : "Produt Number 67",
        badge : "10%",
        price : 55
    },
    {
        src : Eight,
        name : "Produt Number 68",
        badge : "10%",
        price : 55
    },
    {
        src : Nine,
        name : "Produt Number 69",
        badge : "10%",
        price : 55
    },
    {
        src : Ten,
        name : "Produt Number 70",
        badge : "10%",
        price : 55
    },
    {
        src : Eleven,
        name : "Produt Number 71",
        badge : "10%",
        price : 55
    },
    {
        src : Twilve,
        name : "Produt Number 72",
        badge : "10%",
        price : 55
    },
    {
        src : Nine,
        name : "Produt Number 73",
        badge : "10%",
        price : 55
    },
    {
        src : Ten,
        name : "Produt Number 74",
        badge : "10%",
        price : 55
    },
    {
        src : Eleven,
        name : "Produt Number 75",
        badge : "10%",
        price : 55
    },
    {
        src : Twilve,
        name : "Produt Number 76",
        badge : "10%",
        price : 55
    },
    {
        src : One,
        name : "Produt Number 77",
        badge : "10%",
        price : 55
    },
    {
        src : Two,
        name : "Produt Number 78",
        badge : "10%",
        price : 55
    },
    {
        src : Three,
        name : "Produt Number 79",
        badge : "10%",
        price : 55
    },
    {
        src : Four,
        name : "Produt Number 80",
        badge : "10%",
        price : 55
    },
    {
        src : Five,
        name : "Produt Number 81",
        badge : "10%",
        price : 55
    },
    {
        src : Six,
        name : "Produt Number 82",
        badge : "10%",
        price : 55
    },
    {
        src : Seven,
        name : "Produt Number 83",
        badge : "10%",
        price : 55
    },
    {
        src : Eight,
        name : "Produt Number 84",
        badge : "10%",
        price : 55
    },
    {
        src : Nine,
        name : "Produt Number 85",
        badge : "10%",
        price : 55
    },
    {
        src : Ten,
        name : "Produt Number 86",
        badge : "10%",
        price : 55
    },
    {
        src : Eleven,
        name : "Produt Number 87",
        badge : "10%",
        price : 55
    },
    {
        src : Twilve,
        name : "Produt Number 88",
        badge : "10%",
        price : 55
    },

    {
        src : Twilve,
        name : "Produt Number 89",
        badge : "10%",
        price : 55
    },

    {
        src : Eleven,
        name : "Produt Number 90",
        badge : "10%",
        price : 55
    },

    {
        src : Ten,
        name : "Produt Number 91",
        badge : "10%",
        price : 55
    },

    {
        src : Nine,
        name : "Produt Number 92",
        badge : "10%",
        price : 55
    },
    {
        src : Eight,
        name : "Produt Number 93",
        badge : "10%",
        price : 55
    },
    {
        src : Seven,
        name : "Produt Number 94",
        badge : "10%",
        price : 55
    },
    {
        src : Six,
        name : "Produt Number 95",
        badge : "10%",
        price : 55
    },
    {
        src : Five,
        name : "Produt Number 96",
        badge : "10%",
        price : 55
    },
    {
        src : Four,
        name : "Produt Number 97",
        badge : "10%",
        price : 55
    },
    {
        src : Three,
        name : "Produt Number 98",
        badge : "10%",
        price : 55
    },
    {
        src : Two,
        name : "Produt Number 99",
        badge : "10%",
        price : 55
    },
    {
        src : One,
        name : "Produt Number 100",
        badge : "10%",
        price : 55
    },




    {
        src : One,
        name : "Produt Number 101",
        badge : "10%",
        price : 55
    },
    {
        src : Two,
        name : "Produt Number 102",
        badge : "10%",
        price : 55
    },
    {
        src : Three,
        name : "Produt Number 103",
        badge : "10%",
        price : 55
    },
    {
        src : Four,
        name : "Produt Number 104",
        badge : "10%",
        price : 55
    },
    {
        src : Five,
        name : "Produt Number 105",
        badge : "10%",
        price : 55
    },
    {
        src : Six,
        name : "Produt Number 106",
        badge : "10%",
        price : 55
    },
    {
        src : Seven,
        name : "Produt Number 107",
        badge : "10%",
        price : 55
    },
    {
        src : Eight,
        name : "Produt Number 108",
        badge : "10%",
        price : 55
    },
    {
        src : Nine,
        name : "Produt Number 109",
        badge : "10%",
        price : 55
    },
    {
        src : Ten,
        name : "Produt Number 100",
        badge : "10%",
        price : 55
    },
    {
        src : Eleven,
        name : "Produt Number 111",
        badge : "10%",
        price : 55
    },
    {
        src : Twilve,
        name : "Produt Number 112",
        badge : "10%",
        price : 55
    },
    {
        src : Six,
        name : "Produt Number 113",
        badge : "10%",
        price : 55
    },
    {
        src : Seven,
        name : "Produt Number 114",
        badge : "10%",
        price : 55
    },
    {
        src : Eight,
        name : "Produt Number 115",
        badge : "10%",
        price : 55
    },
    {
        src : Nine,
        name : "Produt Number 116",
        badge : "10%",
        price : 55
    },
    {
        src : Ten,
        name : "Produt Number 117",
        badge : "10%",
        price : 55
    },
    {
        src : Eleven,
        name : "Produt Number 118",
        badge : "10%",
        price : 55
    },
    {
        src : Twilve,
        name : "Produt Number 119",
        badge : "10%",
        price : 55
    },
    {
        src : Twilve,
        name : "Produt Number 120",
        badge : "10%",
        price : 55
    },
];

function Items({ currentItems }) {
  return (
    <div className='flex flex-wrap justify-center'>
      {currentItems &&
        currentItems.map((item,index) => (
          <div key={index} >
            <Product src={item.src} productName={item.name} badge={item.badge} price={item.price}/>
          </div>
        ))}
    </div>
  );
}

function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div >
      <Items currentItems={currentItems} />
        <div className='flex items-end justify-between'>
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                className ="flex gap-x-5 mt-14 cursor-pointer"
                pageClassName ="bg-primary px-4 text-white py-2"
            />
           <div>
             <p className='font-dm font-normal text-base text-gray'>Products from {itemOffset+1} to {endOffset} of {items.length}</p>
           </div>

        </div>
    </div>
  );
}


export default Pagination