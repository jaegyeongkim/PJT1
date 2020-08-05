import React, { useState, useContext, useEffect } from 'react';
import { CommonContext } from '../../context/CommonContext';
import { Grid } from '@material-ui/core';

const SelectItemA = modalNum => {
  const { newEventData, setNewEventData } = useContext(CommonContext);
  const { productDatas, setProductDatas } = useContext(CommonContext);
  const [filterDatas, setFilterDatas] = useState([]);

  /*
    event_id: '',
    event_category: '',
    event_item: {
      '1': {
        prod_id: '',
      },
      '2': {
        prod_id: '',
      },
    },
  
  */
  const ChoiceItemA = prod_id => e => {
    setNewEventData({
      ...newEventData,
      event_item: {
        '1': { prod_id },
        '2': '',
      },
    });
    modalNum.setModalNum(3);
  };

  const test = () => {
    setFilterDatas(
      productDatas.filter(
        product => product.prod_category === newEventData.event_category,
      ),
    );
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <>
      <h1>아이템 A 선택페이지</h1>
      <Grid>
        {filterDatas.map(product => (
          <Grid>
            <button onClick={ChoiceItemA(product.prod_id)}>
              {product.prod_name}
            </button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SelectItemA;