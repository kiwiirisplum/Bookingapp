import "./propertylist.css"

const propertyList = () => {
  return (
    <div className="propertyList">
      <div className="propertyListItem">
        <img 
        src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" 
        alt="Hotel" 
        className="propertyListItemImg" />
        <div className="propertyListTitles">
          <h1>Hotels</h1>
          <h2>193 hotels</h2>
        </div>
      </div>

      <div className="propertyListItem">
        <img 
        src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" 
        alt="Resort" 
        className="propertyListItemImg" />
        <div className="propertyListTitles">
          <h1>Resorts</h1>
          <h2>393 resorts</h2>
        </div>
      </div>

      <div className="propertyListItem">
        <img 
        src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" 
        alt="Cottage" 
        className="propertyListItemImg" />
        <div className="propertyListTitles">
          <h1>Cottages</h1>
          <h2>572 cottages</h2>
        </div>
      </div>

      <div className="propertyListItem">
        <img 
        src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=" 
        alt="Glamping" 
        className="propertyListItemImg" />
        <div className="propertyListTitles">
          <h1>Glamping</h1>
          <h2>6781 glamping sites</h2>
        </div>
      </div>
    </div>
  )
}

export default propertyList