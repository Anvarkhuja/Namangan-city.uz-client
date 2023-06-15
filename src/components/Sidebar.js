import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Sidebar() {
  return (
    <div className='cards'>
    
      <div className='cards__container1'>
        <div className='cards__wrapper1'>
          <ul className='cards__items1'>
         
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/292142838.jpg?k=13ec4c619d33e303c4add0a41cedea17dd9b4169e9e7bd3e6f1cb50c9ea93e14&o=&hp=1'
              text='OYDIN PLAZA'
              label='HOTELS'
              path='/hotels'
            />
            <CardItem
              src='https://avatars.mds.yandex.net/get-altay/4509886/2a00000179374911b72b24749b8cf2cc118b/L_height'
              text='ZAMIN'
              label='RESTOURANTS'
              path='/restourants'
            />
            <CardItem
              src='https://uzreport.news/fotobank/content/9VjOjSJ4rd3xW2EnREwb7anI6GXxCDrqiYPNNRA4.jpeg'
              text='AFSONA LAND'
              label='DESTINATIONS'
              path='/destinations'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
