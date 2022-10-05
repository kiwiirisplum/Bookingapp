import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/389275674.jpg?k=930e2a8dd1ee41dfc376ba1cd5c3237a7684ad45f648d7681d1524710b66bac5&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389275676.jpg?k=4cb80ae9aab6cb134dfa7922dd1b4ab216547325fd8abc4c0a92b45abf08dc31&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389275701.jpg?k=9fde85377d62d4fa17ab7dd4cebeb99dd1609d9c44b3a1283ed9001e69632582&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/389275733.jpg?k=bf4177f062d7e524677a6123078d4b3a37a2359932d7d5a4c99d9f8708cc38ae&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/389275737.jpg?k=4530e6157602c4532c57d8be3ced852ad8ac9834d4c72b2eb8ba3503485f3d54&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/389275768.jpg?k=e85399ca6710e29673fd0ade9593794ffb981eac134f511d522c6203741b440b&o=&hp=1"
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
      {open && (<div className="slider">
        <FontAwesomeIcon 
        icon={faCircleXmark} 
        className="close"
        onClick={() => setOpen(false)} />
        <FontAwesomeIcon 
        icon={faCircleArrowLeft} 
        className="arrow"
        onClick={() => handleMove("l")} />
        <div className="sliderWrapper">
          <img 
          src={photos[slideNumber].src} 
          alt="" 
          className="sliderImg" />
        </div>
        <FontAwesomeIcon 
        icon={faCircleArrowRight} 
        className="arrow"
        onClick={() => handleMove("r")} />
        </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Fairmont Royal York Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>1234 Front St Toronto</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 300m from center
          </span>
          <span className="hotelPriceHighlight">
            only $999 for a wonderful weekend!
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img 
                onClick={()=> handleOpen(i)}
                src={photo.src}
                alt="hotel room interior" 
                className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Toronto</h1>
              <p className="hotelDescription">
              Boasting a skylit indoor pool and 3 on-site dining options, this hotel is located across the street from Union Station. 
              The eco-friendly property is adjacent from an airport express train to Toronto Pearson International Airport, 29 km away. 
              An airport shuttle to Billy Bishop Toronto City Airport, 3 km away, is also available.
              A flat-screen cable TV, minibar and a coffee maker are provided in each room at Fairmont Royal York. 
              The spacious rooms include designer bath toiletries and robes.<br />
              Touring the Fairmont’s historic ballroom, working out in the gym or shopping on site are just a sample of activities this hotel features. 
              A concierge desk and a business centre are offered for guest convenience. Wi-Fi and wired internet are available upon request with surcharge.   
              Enjoy a new era of dining with 3 unique dining venues taking centre stage at Fairmont Royal York, REIGN Restaurant + Bar + Bakery, CLOCKWORK Champagne & Cocktail, and Toronto's Martini Den, Library Bar.
              This is our guests' favourite part of Toronto, according to independent reviews. Couples particularly like the location — they rated it 9.6 for a two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a weekend stay!</h1>
              <span>
                Located in the real heart of Toronto, this property
                has an excellent location score of 9.5!
              </span>
              <h2>
                <b>$899</b> (2 nights)
              </h2>
              <button>Reserve or Book Right Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel;