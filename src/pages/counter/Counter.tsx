import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/redux/store';
import {
  increment,
  decrement,
  incrementByAmount,
} from 'src/redux/counter/counterSlice';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Counter() {
  const counterState = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleIcrementByAmount() {
    dispatch(incrementByAmount(10));
  }

  return (
    <div>
      <h1>Counter {counterState.value}</h1>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleIncrement}>
          increment
        </Button>
        <Button variant="outlined" onClick={handleDecrement}>
          decrement
        </Button>

        <Button variant="outlined" onClick={handleIcrementByAmount}>
          Increment By 10
        </Button>
      </Stack>
    </div>
  );
}

export default Counter;
