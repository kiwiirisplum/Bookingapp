import "./flightFeature.css";

const FlightFeature = () => {
  return (
    <div className="flightFeature">
        <div className="flightFeatureContainer">
            <div className="flightFeatureTitle">
                Trending Destination
            </div>
            <p className="flightFeatureDescription">Book flights to a destination popular with
                travelers from Canada
            </p>

            <div className="flightFeatureList">
                {/* <ul className="flightDestinationList">

                    <li className="flightDestinationItem">
                        <a href="#" className="fDILink">
                            <div className="fDIBox">
                                <img 
                                src="https://vancouver.ca/images/cov/feature/downtown-with-mountains.jpg" 
                                alt="Vancouver BC" />
                            </div>
                            <div>
                            <h3>Vancouver, Canada</h3>
                            <p>Flights from Toronto Pearson International Airport</p>
                            <p>Oct 8 - Oct 15, Round trip</p>
                            </div>
                        </a> 
                    </li> 

                    

                </ul> */}
            </div>
        </div>
    </div>
  )
}

export default FlightFeature;