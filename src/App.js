import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
    return (
        <div data-colorchange className="dark-mode">
            <Header />
            <List />
        </div>
    );
}

export default App;
