import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Message from './Message';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Message />} />
    </Routes>
  </Router>
);

export default App;