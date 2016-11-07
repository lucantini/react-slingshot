//	@flow

const State = {
	title: 'Teste',
};

export default function (state: Object = State, action: Object) {
	switch (action.type) {
		case 'CHANGE_TITLE':
			return { ...state, title: 'Ação ++' };
		default:
			return state;
	}
}
