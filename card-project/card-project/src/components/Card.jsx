import phoneIcon from "../assets/phone-icon.png";
import emailIcon from "../assets/mail-icon.png";


function Card(props) {
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src={phoneIcon}
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src={emailIcon}
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}

export default Card;