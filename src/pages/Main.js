import React from "react"
import { Route, Switch } from "react-router-dom"
import Title from "../components/Header/Title"
import PhotoListGrid from "./PhotoListGrid"
import Single from "./Single"


const Main = () => (
	<div>
		<Title />
		<Switch>
			<Route exact path="/" component={PhotoListGrid} />
			<Route path="/view/:postId" component={Single}  />
		</Switch>
	</div>
);

export default Main