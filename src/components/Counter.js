import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../store/counterSlice";
import { logIn, logOut } from "../store/authSlice";
import { useCallback, useEffect } from "react";

const Counter = () => {
  //   const globalState = useSelector((state) => {
  //     console.log(state);
  //     return state;
  //   });

  //useEffect ->2
  //-> dispatch
  //re render

  //useEffect -> 3
  //-> dispatch
  // re evalute -> 4
  //re render

  //useEffect -> 4
  //re evalute -> ref -> 1 /ref -> 2
  //re evalute -> counterHnadler -> 3

  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const counterHandler = useCallback(
    (type, value) => {
      if (type === "increase") {
        dispatch(increase(value));
      } else {
        dispatch(decrease(value));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    // dispatch(increase(20));
    counterHandler("increase", 20);
  }, [counterHandler]);

  const isLoggedIn = () => {
    return globalState.auth.isLoggedIn;
  };

  const loginHandler = (status) => {
    if (status) {
      dispatch(logOut(5));
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
            <button
              className="btn"
              onClick={() => counterHandler("increase", 5)}
            >
              increase +
            </button>
            <button
              className="btn"
              onClick={() => counterHandler("decrease", 2)}
            >
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
