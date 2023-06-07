import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import Wrapper from '@/components/Wrapper';
import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const sizeData = [
  'UK6',
  'UK7',
  'UK8',
  'UK9',
  'UK10',
  'UK11',
  'UK12',
  'UK4',
  'UK6',
];

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] '>
          {/* left column start */}
          <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className='flex-[1] py-3'>
            {/* PRODUCT TITLE */}
            <div className='text-[34px] font-semibold mb-2 leading-tight'>
              Nike Sneaker
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className='text-lg font-semibold mb-5'>
              This is a nike sneaker which, you already know
            </div>

            {/* PRODUCT PRICE */}
            <div className='flex items-center'>
              <p className='mr-2 text-lg font-semibold'>MRP : &#8377;2500</p>
              <p className='text-base  font-medium line-through'>&#8377;3000</p>
              <p className='ml-auto text-base font-medium text-green-500'>
                50% off
              </p>
            </div>

            <div className='text-md font-medium text-black/[0.5]'>
              incl. of taxes
            </div>
            <div className='text-md font-medium text-black/[0.5] mb-20'>
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className='mb-10'>
              {/* HEADING START */}
              <div className='flex justify-between mb-2'>
                <div className='text-md font-semibold'>Select Size</div>
                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id='sizesGrid' className='grid grid-cols-3 gap-2'>
                {sizeData.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              <div className='text-red-600 mt-1'>
                Size selection is required
              </div>
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className='text-lg font-bold mb-5'>Product Details</div>
              <div className='markdown text-md mb-5'>
                <ReactMarkdown>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </ReactMarkdown>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
