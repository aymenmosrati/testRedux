import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../store/counterSlice";
import { logIn, logOut } from "../store/authSlice";

const Counter = () => {
  //   const globalState = useSelector((state) => {
  //     console.log(state);
  //     return state;
  //   });
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const isLoggedIn = () => {
    return globalState.auth.isLoggedIn();
  };

  const loginHandler = (status) => {
    if (status) {
      dispatch(logOut());
    } else {
      dispatch(logIn());
    }
  };

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {isLoggedIn() && (
        <>
          <div className="counter">Counter: {globalState.counter.value}</div>;
          <div>
            <button className="btn" onClick={() => dispatch(increase(5))}>
              increase +
            </button>
            <button className="btn" onClick={() => dispatch(decrease(2))}>
              decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn" onClick={() => loginHandler(isLoggedIn())}>
          {isLoggedIn() ? "logOut" : "logIn"}
        </button>
      </div>
    </div>
  );
};

export default Counter;
