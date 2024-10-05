import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/redirect';
import NotFound from './components/layouts/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            return (
              <Route key={index} path={route.path} element={<Page />} />
            );
          })}
           <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
