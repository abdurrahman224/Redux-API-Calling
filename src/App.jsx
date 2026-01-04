import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/skiice/todo';

function App() {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(state => state.todo);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error loading data</h2>;
  }

  return (
    <>
      <button onClick={() => dispatch(fetchTodos())}>API</button>

      <ul>
        {data.map(e => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
