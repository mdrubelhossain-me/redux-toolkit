import React from "react";
import { useDispatch, useSelector } from "react-redux";

// স্টেটের টাইপ ডিফাইন করো
interface RootState {
  count: number;
}

const Counter: React.FC = () => {
  // এখানে টাইপ স্পষ্ট করে বলা হয়েছে
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
