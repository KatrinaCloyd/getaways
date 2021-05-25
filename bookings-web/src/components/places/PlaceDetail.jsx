import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePlace } from '../../services/placesApi';
import Loading from '../app/Loading';
import style from '../app/app.css';

export default function PlaceDetail() {
    const { id } = useParams();
    const [place, setPlace] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOnePlace(id)
            .then(setPlace)
            .finally(() => { setLoading(false) })
    }, []);

    if (loading) return <Loading />;

    return (
        <div className={style.detailPg}>
            <div className={style.detailCard}>
                <h3 className={style.hotelName}>{place.name}</h3>
                <p>{place.description}</p>
                <h4>{place.location}</h4>
                <p className={style.price}>Price Per Night: ${place.pricePerNight}</p>
                <img src={place.image} alt='getaway' />
                <ul>
                    <li>Max Guests: {place.maxGuests}</li>
                    <li>{place.petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
                    {place.pool ? <li>Has a Pool!</li> : null}
                    {place.wifi ? <li>Free Wifi</li> : null}
                </ul>
            </div>
        </div>
    )
};
