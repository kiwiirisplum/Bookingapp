import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img 
        src="https://cf.bstatic.com/xdata/images/hotel/square600/326577347.webp?k=415c4c954492b1b50e9bf1630e85daeff15d6e2e49f3ededf8d2becabdc036c7&o=&s=1" 
        alt="Fairmont Royal York Hotel" 
        className="searchItemImg" />
        <div className="searchItemDescription">
            <h1 className="searchItemTitle">Fairmont Royal York Hotel</h1>
            <span className="searchItemAddress">100 Front St W, Toronto, ON M5J 1E3</span>
            <span className="searchItemDistance">Walking distance from Union Station</span>
            <span className="searchItemSubtitle">"A true landmark reaching its centenary."</span>
            <span className="searchItemCancelOption">Free cancellation*</span>
            <span className="searchItemCancelOptionSubtitle">
                You can cancel later, so lock in this great price now.
            </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Excellent</span>
            <button>8.5</button>
          </div> 
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">
               Start from $799
            </span>  
            <button className="searchItemCheckButton">
                See availability
            </button> 
         </div> 
        </div>
    </div>
  )
}

export default SearchItem