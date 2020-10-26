import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Agreement from "./components/Agreement";
import PrivacyForm from "./components/PrivacyForm";
import SuccessMessage from "./components/SuccessMessage";

const App = () => {
	return (
		<div>
			<Switch>
				<Route path="/" component={Navbar} exact />
				<Route path="/agreement" component={Agreement} />
				<Route path="/form" component={PrivacyForm} />
				<Route path="/success" component={SuccessMessage} />
			</Switch>
		</div>
	);
};

export default App;
