import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { amountAdded, incremented } from './features/counter/counter-slice';

function App() {
	const count = useAppSelector(state => state.counter.value);
	const dispatch = useAppDispatch();
	const handleIncrement = () => {
		dispatch(incremented());
	};

	const handleIncrementAmount = () => {
		dispatch(amountAdded(3));
	};

	return (
		<>
			<button
				className='lala'
				onClick={handleIncrement}
			>
				count is {count}
			</button>
			<button onClick={handleIncrementAmount}>count is {count} </button>
		</>
	);
}

export default App;
