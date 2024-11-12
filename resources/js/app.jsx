import React from 'react';
import { createRoot } from 'react-dom/client';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import App from './MainApp';

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<React.StrictMode><App /></React.StrictMode>,);
