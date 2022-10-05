import "./attraction.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";

const Attraction = () => {
  return (
    <div>
        <Navbar />
        <Header type="list" />
        <div className="attractionContainer">
        <div className="attractionWrapper">
            <div className="attractionListSearch">
                <h2>Where are you going?</h2>
                <input className="attractionInput" type="text" placeholder="e.g. island/lakeshore/moutain/wherever you want" />
                <span>
                <button className="attractionBtn">GO</button>
                </span>
            </div>
        </div>
        <h2>Recent Popular Destinations</h2>

        <FeaturedProperties type="list" />
        </div>
        <MailList />
        <Footer />
    </div>
  )
}

export default Attraction