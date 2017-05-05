import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAlbums} from '../actions/index';


class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = {
			term: ""
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(evt){
		this.setState({
			term: evt.target.value
		});
	}

	onFormSubmit(evt){
		evt.preventDefault();
		this.props.fetchAlbums(this.state.term);
		this.setState({term: ""});
	}

	render(){
		return (
			<div>
				<div className="text-center"><h3>Find Your favorite music</h3></div>
				<form className="input-group" onSubmit={this.onFormSubmit}>
					<input 
						className="form-control" 
						type="text" 
						placeholder="Find artist"
						value={this.state.term} 
						onChange={this.onInputChange}
					/>
					<span className="input-group-btn">
						<button className="btn btn-success">Search</button>
					</span>
				</form>
			</div>
		);
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchAlbums}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);