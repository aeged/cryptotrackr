/* Menu component */
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class CryptMenu extends React.Component {
  state = {
    current: 'home',
 }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
  	return(
		<Menu
			onClick={this.handleClick}
			selectedKeys={[this.state.current]}
			mode="horizontal"
			style={{backgroundColor: "inherit"}}
		>
			<Menu.Item key="home">
				<Icon type="bars" />Tickrs
			</Menu.Item>
			<SubMenu title={<span><Icon type="bar-chart" />Charts</span>}>
				<MenuItemGroup title="Tickrs">
					<Menu.Item key="BTC">BTC</Menu.Item>
					<Menu.Item key="ETH">ETH</Menu.Item>
					<Menu.Item key="STEEM">STEEM</Menu.Item>
					<Menu.Item key="EOS">EOS</Menu.Item>
				</MenuItemGroup>
			</SubMenu>
		</Menu>
	);
  }
}

export default CryptMenu;