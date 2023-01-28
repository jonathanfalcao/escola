import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewPost from './components/NewPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/NewPost' element={< NewPost />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;