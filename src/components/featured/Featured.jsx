import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/xphoto/1920x1080/147538426.webp?k=6eb9cdd141c753bc6adcb49ff07387dfa7b70000639c27436b8bc9a9c7692a91&o=" 
          alt="Las Vegas"
          className="featuredImg" />
        <div className="featuredTitles">
          <h1>Las Vegas</h1>
          <h2>134 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://www.banfflakelouise.com/sites/default/files/styles/xl_1333_1x1/public/lake-louise-canoe-wide-moment-banff-alberta.jpg?itok=TV_Ayz33" 
        alt="Banff National Park"
        className="featuredImg" />
        <div className="featuredTitles">
          <h1>Banff</h1>
          <h2>331 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://www.quebec-cite.com/sites/otq/files/styles/landscape_wide_retina/public/blog/jefffrenettephotography_otqete_160902_0064.webp?itok=5Fzj3ZgB" 
        alt="Québec City"
        className="featuredImg" />
        <div className="featuredTitles">
          <h1>Québec City</h1>
          <h2>998 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured;