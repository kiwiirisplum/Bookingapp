import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Flight from "./pages/flight/Flight";
import Attraction from "./pages/attraction/Attraction";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotels/:id" element={<Hotel />} />
            <Route path="/flight" element={<Flight />} />
            <Route path="/attraction" element={<Attraction />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;