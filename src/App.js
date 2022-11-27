import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Popular from './components/Products';

function App() {
    return (
        <div className="App">
            <Header />
            <main className='main'>
            <div className="content-wrapper">
                <Categories />
                <Popular />
            </div>
            </main>
        </div>
    );
}

export default App;
