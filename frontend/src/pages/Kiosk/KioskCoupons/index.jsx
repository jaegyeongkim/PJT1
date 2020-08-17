import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Grid, Box, Dialog, Modal } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import KioskCSS from './styles';
import { Redirect, RedirectProps } from 'react-router';
import Navbar from '../KioskNavbar';
import CouponsQR from '../KioskModal/KioskQRModal';

const SaleItem = ({ match }) => {
  const [QRModalTrigger, setQRModalTrigger] = useState(false);

  const click = () => {
    console.log('click');
    setQRModalTrigger(QRModalTrigger => true);
  };

  const handleClose = () => {
    setQRModalTrigger(QRModalTrigger => false);
  };

  const [myURL, setMyURL] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('timeout!!');
      setMyURL(true);
    }, 1000000);
  });

  const { itemname } = match.params;
  return (
    <>
      <KioskCSS>
        <Navbar />

        <Grid container direction="row" borderLeft="1px solid">
          <Grid
            item
            xs={6}
            style={{
              textAlign: 'center',
              verticalAlign: 'middle',
              borderRight: '1px solid',
            }}
          >
            <div style={{ fontSize: '40px' }}>
              <stron>정답 입니다!</stron>
            </div>
            <Grid>
              <img
                style={{ width: '70%' }}
                src="https://i3b309.p.ssafy.io/images/쿠폰1.jpg"
                alt=""
              />
            </Grid>
            <Grid>
              <span style={{ fontSize: '40px' }}>모든 상품</span>
              <br />
              <span style={{ color: 'red', fontSize: '40px' }}>30% 할인</span>
              &nbsp;
              <span style={{ fontSize: '40px' }}>쿠폰이 출력됩니다.</span>
            </Grid>
            <br />
            <br />
            <Grid>
              <span style={{ fontSize: '20px', color: 'blue' }}>이용 방법</span>
              &nbsp;&nbsp;
              <span style={{ fontSize: '20px' }}>
                출력된 쿠폰을 결제하실 때 제시해주세요.
              </span>
            </Grid>
          </Grid>

          <Grid
            item
            xs={6}
            style={{ textAlign: 'center', verticalAlign: 'middle' }}
          >
            <Grid>
              <img
                onClick={click}
                style={{ width: '80%' }}
                src="https://i3b309.p.ssafy.io/images/이용안내.jpg"
                alt=""
              />
            </Grid>

            <br />
            <br />

            <Grid>
              <span style={{ fontSize: '30px' }}>더 많은 할인을 원하시면</span>
            </Grid>

            <Grid>
              <span style={{ fontSize: '30px' }}>
                아래의 버튼을 눌러 주세요.
              </span>
            </Grid>

            <br />
            <Button variant="warning" size="lg" onClick={click}>
              추가 할인 받으러 가기
            </Button>
            <br />
          </Grid>
        </Grid>
        <Dialog open={QRModalTrigger} onClose={handleClose}>
          <CouponsQR />
        </Dialog>
        {myURL ? <Redirect to="/kioskmains" /> : null}
      </KioskCSS>
    </>
  );
};

export default SaleItem;
