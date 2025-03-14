import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./input.css";

// Handle redirect from 404.html
(function() {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, '', redirect.replace(location.origin, ''));
  }
})();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/portfolio">
    <App />
  </BrowserRouter>
);
