import React, { Component } from 'react';
import { Menu } from 'antd';

export default class NavHeader extends Component {
  state = {
    current: '1',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    })
  }

  render() {
    return(
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ background: '#2579be', color: '#fff' }} theme='dark'>
        <Menu.Item key="1" style={{ background: '#2579be' }}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="2" style={{ background: '#2579be' }}>
          Navigation Two
        </Menu.Item>
      </Menu>
    );
  }
}
