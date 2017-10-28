import React from "react"
import { Route, Switch } from "react-router-dom"
import Main from "../components/Header/Main"
import PhotoListGrid from "../components/Photos/PhotoListGrid"
import Single from "../components/SinglePhoto/Single"


const MainPage = () => (
	<div>
		<Main />
		<Switch>
			<Route exact path="/" component={PhotoListGrid} />
			<Route path="/view/:postId" component={Single}  />
		</Switch>
	</div>
);

export default MainPage