export const loadState = initialState => {
    return localStorage.getItem("redux-photos-state")
         ? JSON.parse(localStorage.getItem("redux-photos-state")) 
         : initialState;
};

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("redux-photos-state", serializedState);
	} catch (err) {
		return err; 
	}
};
