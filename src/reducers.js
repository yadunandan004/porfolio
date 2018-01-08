const initState={
	title:'',
	abotText:'',
	imgPath:'',
	contacts:[],
	linkedIn:'',
	gitHub:'',
	twitter:'',
	facebook:'',
	languages:[],
	frameworks:[],
	Databases:[],
	Other:[],
	school:[],
	work:[],
	projects:[]

}
function profileReducer(state=initState,action)
{
	let nextState=Object.assign({},state);
	switch(action.type)
	{
		case 'ADD_DATA':
			nextState={...nextState,...action.payload};
			return nextState;
		default:
			return nextState;
	}
}

export default profileReducer;