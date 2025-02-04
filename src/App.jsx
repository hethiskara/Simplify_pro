import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing Router and Routes for routing
import {
  Hero,
  SuperQuality,
  Footer,
  Services,
} from "./sections";
import Nav from "./components/Nav";
import { AuthProvider } from "./context/AuthContext";
import AuthModal from "../src/components/AuthModal"; // Import AuthModal component
import HomePage from "../src/home"; // Import the dummy homepage

const App = () => (
  <AuthProvider>
    <Router> {/* Wrapping app with Router */}
      <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding-x padding-t bg-black pb-8">
          <Footer />
        </section>

        {/* Define Routes */}
        <Routes>
          {/* Define route for home page */}
          <Route path="/home" element={<HomePage />} />
        </Routes>

        {/* You can conditionally render the AuthModal here, depending on your logic */}
        {/* AuthModal should be part of your main layout */}
        {/* Example: You can trigger it from a state in the App component */}
      </main>
    </Router>
  </AuthProvider>
);

export default App;
