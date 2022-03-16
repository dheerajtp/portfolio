import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Pets from "./components/Pets";
import { ToastProvider } from "react-toast-notifications";
import Footer from "./components/Footer";
import Technology from "./components/Technology";

function App() {
  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000}>
      <div className="flex flex-col min-h-screen">
        <Main />
        <About />
        <Pets />
        <Technology/>
        <Contact />
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
