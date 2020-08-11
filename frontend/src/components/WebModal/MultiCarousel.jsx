import React, { useState, useContext } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { CommonContext } from '../../context/CommonContext';
import { Grid, useMediaQuery } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'react-bootstrap/Carousel';

const MultiCarousel = () => {
  const { productDatas, setProductDatas } = useContext(CommonContext);

  const responsive = {
    0: {
      // breakpoint: { max: 3000, min: 1024 },
      items: 5,
      // slidesToSlide: 3, // optional, default to 1.
    },
    920: {
      // breakpoint: { max: 1024, min: 920 },
      items: 7,
      // slidesToSlide: 1, // optional, default to 1.
    },
    // 2: {
    //   breakpoint: { max: 920, min: 0 },
    //   items: 4,
    //   slidesToSlide: 1, // optional, default to 1.
    // },
  };
  const isMobile = useMediaQuery('(max-width:920px)');
  const handleOnDragStart = e => e.preventDefault();
  return (
    <>
      {isMobile ? (
        <Grid container>
          <Grid item xs={12}>
            <AliceCarousel
              responsive={responsive}
              autoPlay={true}
              autoPlayInterval={2000}
              // autoPlayDirection="rtl"
              fadeOutAnimation={true}
              playButtonEnabled={false}
            >
              {productDatas.map((TmpData, index) => (
                <img
                  src={`../../${TmpData.prod_image}`}
                  alt="Prod_image"
                  style={{ width: '20vw', height: 'auto' }}
                />
              ))}
            </AliceCarousel>
          </Grid>
        </Grid>
      ) : (
        <Carousel container>
          <Carousel.Item>
            <Grid container>
              <Grid item xs={12}>
                <AliceCarousel
                  responsive={responsive}
                  autoPlay={true}
                  autoPlayInterval={2000}
                  // autoPlayDirection="rtl"
                  fadeOutAnimation={true}
                  playButtonEnabled={false}
                  fadeOutAnimation={false}
                  mouseTrackingEnabled={true}
                  playButtonEnabled={false}
                  disableAutoPlayOnAction={false}
                >
                  {productDatas.map((TmpData, index) => (
                    <img
                      src={`../../${TmpData.prod_image}`}
                      alt="Prod_image"
                      style={{ width: '150px', height: '150px' }}
                    />
                  ))}
                </AliceCarousel>
              </Grid>
            </Grid>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
};

export default MultiCarousel;
