import "./flightsearch.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const FlightSearch = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);

  return (
    <>
    <div className="flightSearch">
    <div className="flightSearchContainer">
        <div className="flightSearchWrapper">
          
          <div className="flightSearchOption">
            <input type="radio" />Round-trip
            <input type="radio" />One-way
          </div>

          <div className="flightSearchBar">
            <div className="flightSearchItem">
              <FontAwesomeIcon icon={faPlane} className="flightSearchIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="flightSearchInput"
                onChange={e => setDestination(e.target.value)} />
            </div>

            <div className="flightSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="flightSearchIcon" />
            </div>
            <span onClick={() => setOpenDate(!openDate)} className="flightSearchText">{`${format(date[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()} />}


        <div className="flightSearchItem">
          <button className="headerBtn"> Search </button>
        </div>
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FlightSearch;