import "./featuredProperties.css";

const FeaturedProperties = ({type}) => {
  return (
    <div className={type === "list" ? "featuredProperties listMode" :"featuredProperties"}>
       <div className="featuredPropertiesItem">
       <img 
        src="https://www.mtl.org/sites/default/files/styles/hero/public/2021-11/46190_0.jpg?h=968d99c3&itok=MdStmyXh" 
        alt="Montreal" 
        className="featuredPropertiesImg" />
        <span className="featuredPropertiesName">behold bright leaves on the Mountain</span>
        <span className="featuredPropertiesCity">Montreal, Québec</span>
        <div className="featuredPropertiesRating">
            <button>8.4</button>
            <span>Excellent</span>
        </div>
       </div>

        <div className="featuredPropertiesItem">
        <img 
            src="https://images.squarespace-cdn.com/content/v1/5c8bf9604d546e57d8241b98/1566507667576-8NGRNEMX9G4MQZG0225F/sep2010_6.jpg?format=2500w" 
            alt="Algonquin Provincial Park" 
            className="featuredPropertiesImg" />
        <span className="featuredPropertiesName">colorful and crispy autumn</span>
        <span className="featuredPropertiesCity">Algonquin Provincial Park</span>
        <div className="featuredPropertiesRating">
            <button>8.5</button>
            <span>Excellent</span>
        </div>
        </div>


        <div className="featuredPropertiesItem">
        <img 
            src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_756,q_50,w_1920/v1/clients/vancouverbc/fall-colours_c5ec882d-6635-4524-a311-8b28190fd68a.jpg" 
            alt="Vancouver" 
            className="featuredPropertiesImg" />
        <span className="featuredPropertiesName"> enjoy autumn’s beauty wandering in Western Canada</span>
        <span className="featuredPropertiesCity">Vancouver</span>
        <div className="featuredPropertiesRating">
            <button>8.0</button>
            <span>Excellent</span>
        </div>
        </div>


    </div>
  )
}

export default FeaturedProperties
