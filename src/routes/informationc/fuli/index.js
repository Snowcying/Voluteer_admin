import { Menu, Dropdown, Button, Icon, message } from 'antd';
import React from 'react'





function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export default class fuligood extends React.Component {

  render () {
    return(
      <div>
        <div className= "option-colums">
        <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
          全部商品
        </Dropdown.Button>
        {/*<Dropdown.Button*/}
          {/*onClick={handleButtonClick}*/}
          {/*overlay={menu}*/}
          {/*disabled*/}
          {/*style={{ marginLeft: 8 }}*/}
        {/*>*/}
          {/*Dropdown*/}
        {/*</Dropdown.Button>*/}
        <Dropdown overlay={menu}>
          <Button style={{ marginLeft: 8 }}>
            批量操作 <Icon type="down" />
          </Button>
        </Dropdown><Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }}>
          批量操作 <Icon type="down" />
        </Button>
      </Dropdown>
        </div>
      </div>
    )

  }


}