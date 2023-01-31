import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import DrawerHelper from './drawer.helper';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerHelper route={'Home'} icon={'home'} title={'Home'} {...props} />
      <DrawerHelper
        route={'EBooks'}
        icon={'book'}
        title={'E-Book'}
        {...props}
      />
      <DrawerHelper
        route={'TestSeries'}
        icon={'home'}
        title={'Test Series'}
        {...props}
      />
      <DrawerHelper
        route={'MyOrders'}
        icon={'home'}
        title={'My Orders'}
        {...props}
      />
      <DrawerHelper route={'Books'} icon={'home'} title={'Books'} {...props} />
      <DrawerHelper
        route={'PrivacyPloicy'}
        icon={'home'}
        title={'Privacy Ploicy'}
        {...props}
      />
      <DrawerHelper route={'FAQ'} icon={'home'} title={'FAQ'} {...props} />
      <DrawerHelper
        route={'Refer'}
        icon={'home'}
        title={'Refer / Share App'}
        {...props}
      />
      <DrawerHelper
        route={'Help'}
        icon={'home'}
        title={'Call Us / Helpline'}
        {...props}
      />
      <DrawerHelper
        route={'MyProfile'}
        icon={'home'}
        title={'My Profile'}
        {...props}
      />
      <DrawerHelper
        route={'Settings'}
        icon={'settings'}
        title={'Settings'}
        {...props}
      />
    </DrawerContentScrollView>
  );
}
