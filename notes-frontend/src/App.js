import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import Notepage from './pages/Notepage';
import {
  BrowserRouter as Router,
  Routes, Route, matchPath

} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NotesListPage />} />
        <Route path="/note/:id" element={<Notepage />} />
      </Routes>
      </Router>
    </div>

  );
}

export default App;
