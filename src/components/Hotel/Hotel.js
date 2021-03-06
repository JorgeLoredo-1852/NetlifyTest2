import React from 'react';

import img1 from '../../img/hotel-1.jpg';
import img2 from '../../img/hotel-2.jpg';
import img3 from '../../img/hotel-3.jpg';
import img4 from '../../img/user-3.jpg';
import img5 from '../../img/user-4.jpg';
import img6 from '../../img/user-5.jpg';
import img7 from '../../img/user-6.jpg';
import user1 from '../../img/user-1.jpg';
import user2 from '../../img/user-2.jpg';
import xlink from '../../img/sprite.svg';
import './_Hotel.scss'

const Hotel = () =>{
    return(
        <main className="hotel-view">



            <div className="gallery">
                <figure className="gallery__item">
                    <img className="gallery__photo" alt="hotel1" src={img1}/>
                </figure>
                <figure className="gallery__item">
                    <img className="gallery__photo" alt="hotel2" src={img2}/>
                </figure>
                <figure className="gallery__item">
                    <img className="gallery__photo" alt="hotel3"  src={img3}/>
                </figure>
            </div>



            <div className = "overview">
                <h1 className="overview__heading">Hotel Las Palmas</h1>
                <div className="overview__stars">
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>

                <div className="overview__location">
                    <svg className="overview__icon--location">
                        <use xlinkHref={xlink + "#icon-location-pin"}></use>
                    </svg>
                    <button className="btn-inline">Albufeira, Portugal</button>
                </div>

                <div className="overview__rating">
                    <div className="overview__rating--average">8.6</div>
                    <div className="overview__rating--count">429 votes</div>
                </div>
            </div>



            <div className="detail">
                <div className="description">
                    <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>
                    <p className="paragraph">
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                    </p>
                    <ul className="list">
                        <li className="list__item">Close to the beach</li>
                        <li className="list__item">Breakfast included</li>
                        <li className="list__item">Free airport shuttle</li>
                        <li className="list__item">Free wifi in all rooms</li>
                        <li className="list__item">Air conditioning and heating</li>
                        <li className="list__item">Pets allowed</li>
                        <li className="list__item">We speak all languages</li>
                        <li className="list__item">Perfect for families</li>
                    </ul>
                    <div className="recommend">
                        <p className="recommend__counts">Lucy and 3 other friends recommend this hotel</p>
                        <div className="recommend__friends">
                            <img src={img4} className="recommend__photo" alt="User 1"/>
                            <img src={img5} className="recommend__photo" alt="User 1"/>
                            <img src={img6} className="recommend__photo" alt="User 1"/>
                            <img src={img7} className="recommend__photo" alt="User 1"/>
                        </div>
                    </div>
                </div>



                <div className="user-reviews">
                    <Review 
                        text = "Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam."
                        photo = {user1}
                        name = "Nick Smith"
                        date = "Feb 23rd, 2017"
                        rating = "7.8"
                    />
                    <Review 
                        text = "Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam."
                        photo = {user2}
                        name = "Mary Thomas"
                        date = "Sep 13th, 2017"
                        rating = "9.3"
                    />
                    <button className="btn-inline">Show All<span>&rarr;</span></button>
                </div>
            </div>
            <div className="cta">
                    <h2 className="cta__booknow">Good news we have 4 free rooms for your selected dates</h2>
                    <button className="btn">
                        <span className="btn-visible">Book Now</span>
                        <span className="btn-invisible">Only 4 rooms left</span>
                    </button>
                </div>
        </main>
    );
};

const Star = () => {
    return(
        <svg className="overview__icon--star">
            <use xlinkHref={xlink + "#icon-star"}></use>
        </svg>
    );
};

const Review = (props) => {
    return(
        <figure className="review">
            <blockquote className="review__text">
                {props.text}
            </blockquote>
            <figcaption className="review__user">
                <img src={props.photo} alt="user" className="review__user--photo"/>
                <div className="review__user--box">
                    <p className="review__user--name">{props.name}</p>
                    <p className="review__user--date">{props.date}</p>
                </div>
                <div className="review__user--rating">{props.rating}</div>
            </figcaption>
        </figure>
    );
};

export default Hotel;