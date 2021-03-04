import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import PostContainer from "./components/PostContainer";

function App() {
  return (
      <Provider store={store}>
        <div>
            <PostContainer/>
        </div>
      </Provider>
  );
}

export default App;
