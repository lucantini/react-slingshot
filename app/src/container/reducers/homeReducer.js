//	@flow

const State = {
	title: 'Yay!',
};

export default function (state: Object = State, action: Object) {
	switch (action.type) {
		case 'CHANGE_TITLE':
			return { ...state, title: action.title };
		default:
			return state;
	}
}
