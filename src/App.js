import './App.scss';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Provider} from "react-redux";
import store from "./redux/store";
import Content from "./components/Content/Content";

function App() {
    return (
        <Provider store={store} className="App">
           <HeaderContainer/>
           <Content/>
        </Provider>
    );
}

export default App;
