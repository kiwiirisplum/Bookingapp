import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./flight.css";
import FlightSearch from "../../components/flightSearch/FlightSearch";
import FlightFeature from "../../components/flightFeature/FlightFeature";

const Flight = () => {
  return (
    <div>
        <Navbar />
        <Header type="list" />
        <FlightSearch />
        <FlightFeature />
        <MailList />
        <Footer />
    </div>
  )
}

export default Flight;