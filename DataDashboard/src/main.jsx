// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './routes/Layout.jsx';
// import App from './App.jsx';
// import DetailView from './routes/DetailView';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index={true} element={<App />} />
//           <Route index={false} path="/weatherDetails/:symbol" element={<DetailView />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './routes/Layout.jsx';
import App from './App.jsx';
import DetailView from './routes/DetailView.jsx'; // Import DetailView component

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route path="/weatherDetails/:date" element={<DetailView />} /> {/* Define route for weather details */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);