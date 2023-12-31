import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Routes, Route,HashRouter } from "react-router-dom";
import { LOGIN, MAIN } from './constants/routes';
import './index.css';
import TitleBar from './components/TitleBar';
import Login from './pages/Login';
import Main from './pages/Main';
import ErrorModalProvider from './providers/ModalProvider/ErrorModalProvider';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-[#FAEDFF]">
      <TitleBar />

      <HashRouter>
        <ErrorModalProvider>
          <Routes>
            <Route
              path="/"
              element={<Main/>}
            />

            <Route
              path={`/${LOGIN}`}
              element={<Login/>}
            />
          </Routes>
        </ErrorModalProvider>
      </HashRouter>
    </div>
  </StrictMode>,
);

