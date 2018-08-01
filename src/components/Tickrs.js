import React, {Component} from 'react'
import { List, Avatar, Button, Spin, Icon } from 'antd';

// Loading icon
const loadingIcon = <Icon type="loading" style={{fontSize: 24}} spin />

export default class Tickrs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			loading: true,
			loadingMore: false,
			showLoadingMore: true,
			data: [],
			metadata: null
		};
	}

	componentDidMount() {
		fetch("https://api.coinmarketcap.com/v2/listings/")
		.then(response => response.json())
		.then(
			(result) => {
				this.setState({
					loading: false,
					data: result.data,
					metadata: result.metadata
				});
				//console.log("data∂", this.state.data)
				//console.log("metadataß", this.state.metadata)
			},
			// Handle error here so catch block only catches component errors
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
		.catch(error => {
			this.setState({
				error,
			})
			console.log(error)
		})
	}

	showData = (data) => {
		return data.map(data => <li key={data.name}>{data.name}</li>) 
	}

	onLoadMore = () => {
		this.setState({
			loadingMore: true,
		});
		this.getData((res) => {
			const data = this.state.data.concat(res.results);
			this.setState({
				data,
				loadingMore: false,
			}, () => {
				// Resetting window's offsetTop so as to display react-virtualized demo underfloor.
				// In real scene, you can using public method of react-virtualized:
				// https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
				window.dispatchEvent(new Event('resize'));
			});
		});
	}

	render() {
		const {
			error,
			loading,
			loadingMore,
			showLoadingMore,
			data
		} = this.state;

		const loadMore = showLoadingMore ? (
			<div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
		        {loadingMore && <Spin indicator={loadingIcon} />}
		        {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
		      </div>
		) : null;

	    return (
	    	<div>
		      <List
		      	style={{backgroundColor: "white", width: "80%", margin: "auto"}}
		      	size="small"
		      	bordered={true}
		        className="tickr-list"
		        loading={loading}
		        itemLayout="horizontal"
		        loadMore={loadMore}
		        dataSource={data}
		        renderItem={item => (
		          <List.Item actions={[<a>+ watchlist</a>, <a>+ details</a>]}>
		            <List.Item.Meta
		              //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
		              title={<a href="">{item.name}</a>}
		              //description="arbitrary crypocurrency"
		            />
		            <div>stuff</div>
		          </List.Item>
		        )}
		      />
	      	</div>
	    );

		// if (error) {
		// 	return <div>Error: {error.message}</div>
		// } else if (!isLoaded) {
		// 	return <div>Loading...</div>
		// } else {
		// 	return (
		// 		// return some data 
		// 		<div>{this.showData(data)}</div>
		// 	);
		// }
	}

}