import React, { Component } from 'react';
import AppContext from './AppContext';

class ContextProvider extends Component {

	state = {
		userInfo: {}
	};

	render() {
		return (
			<AppContext.Provider
				value={{
					userInfo: this.state.userInfo,
					setUserInfo: userInfo => { this.setState({ userInfo }) }
				}}
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

export default ContextProvider;