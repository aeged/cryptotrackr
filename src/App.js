import React, { Component } from 'react';
import './App.css';

/* My Component imports */
import CryptMenu from './CryptMenu';
import ReactLogo from './logo.svg';

/* Ant Design imports */
import { 
	Layout,
	Breadcrumb,
	Button,
	Row,
	Col,
	Icon,
} from 'antd';

const { Header, Footer, Sider, Content } = Layout;

// class Header extends Component {
// 	render () {
// 		return(
// 			<header>
// 				<div className="logo">LOGO</div>

// 			</header>
// 		);
// 	}
// }

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Layout style={{backgroundColor: "#fff9ef"}}>     
      		<div className="headers"> 	
		      	<Header style={{backgroundColor: "inherit"}}>
	      		<Row type="flex" justify="space-between" align="middle">
		      		<code>cryptotrackr</code>
		      		<Button shape="circle" icon="eye" style={{backgroundColor: "transparent"}}></Button>
	      		</Row>
		      	</Header>
		      	<Header style={{backgroundColor: "inherit"}}>
	      			<Row type="flex" justify="center" align="middle">
			      		<CryptMenu />
		      		</Row>
		      	</Header>
	      	</div>
	      	<Content>hello world</Content>
	      	<Footer>
				A project by <a href="https://github.com/aeged">aeged</a>.   Made with ❤️, <a href="https://reactjs.org/">Reactjs</a>, and <a href="https://ant.design/">Ant Design</a>.	      		
	      	</Footer>
      	</Layout>
      </div>
    );
  }
}

export default App;