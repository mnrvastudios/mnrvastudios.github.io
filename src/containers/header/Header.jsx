import React from "react";
import './header.css';
import people from  '/Users/jeudydiaz/Desktop/jsm/src/Assets/assets/people.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content"> 
            <h1 className="gradient__text"> Sign up today for Exclusive Offers, Promotions, & Custom-Tailored Consulting!</h1>
            <p>Yet bed for any travellling assistance induldgebnce unpleasng. Ot thoughts all exercvise blessing. Iunduldgence way everythign joy altrernatuni between the asttachement.Party we yeaers to order allow asked of.  </p>
                <div className="gpt3__header-content__input" id="home">
                    <input type='email' placeholder="Your Email Adress"/>
                    <button type="button"> Get Started</button>
                </div>       

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <h2 className="gradient__text">30+ People have had a 5 star experience! 
                    </h2>
                    
                    </div>    
            </div>
            </div>
    )
}
export default Header 