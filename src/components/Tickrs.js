import React, {Component} from 'react'
import { List, Avatar, Button, Spin } from 'antd';

export default class Tickrs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
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
					isLoaded: true,
					data: result.data,
					metadata: result.metadata
				});
				console.log("data∂", this.state.data)
				console.log("metadataß", this.state.metadata)
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
				isLoading: false
			})
			console.log(error)
		})
	}

	showData = (data) => {
		return data.map(data => <li key={data.name}>{data.name}</li>) 
	}

	render() {
		const {
			error,
			isLoaded,
			data
		} = this.state;

		if (error) {
			return <div>Error: {error.message}</div>
		} else if (!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				// return some data 
				<div>{this.showData(data)}</div>
			);
		}
	}

}