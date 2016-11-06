//	@flow

const State = {
	title: '',
};

export default function (state: Object = State, action: Object) {
	switch (action.type) {
		case 'CHANGE_TITLE':
			return { ...state, title: 'GG' };
		default:
			return state;
	}
}
