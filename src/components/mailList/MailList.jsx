import "./mailList.css";

const MailList = () => {
  return (
    <div className="mailList">
        <h1 className="mailTitle">
            Looking for an extraordinary experience?
        </h1>
        <span className="mailDescription">
        Sign up for the deals!
        </span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList