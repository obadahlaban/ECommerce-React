import './App.css';
import Blog from "./container/Blog";
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (

        <BrowserRouter>
            <Blog/>
        </BrowserRouter>
    );
}

export default App;
