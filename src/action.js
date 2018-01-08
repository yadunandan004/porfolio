export default function addData(data)
{
	let action={}
	action.type="ADD_DATA";
	action.payload=data;
	return action;
}