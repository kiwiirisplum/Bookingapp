import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerLists">
            <ul className="footerList">
                <li className="footerListItem">Countries</li>
                <li className="footerListItem">Regions</li>
                <li className="footerListItem">Cities</li>
                <li className="footerListItem">Districts</li>
                <li className="footerListItem">Airports</li>
            </ul>

            <ul className="footerList">
                <li className="footerListItem">Hotels</li>
                <li className="footerListItem">Resorts</li>
                <li className="footerListItem">Villas</li>
                <li className="footerListItem">Cottages</li>
                <li className="footerListItem">Glampings</li>
            </ul>

            <ul className="footerList">
                <li className="footerListItem">About</li>
                <li className="footerListItem">Service help</li>
                <li className="footerListItem">Careers</li>
                <li className="footerListItem">Terms &amp; Conditions</li>
                <li className="footerListItem">Privacy</li>
            </ul>
        </div>
        <div className="footerText">Copyright &copy; 2022 Looking</div>
    </div>
  )
}

export default Footer