import "./DetailsCard.css"

const DetailsCard = ({ spot }) => {
    return (
        <div>
            <h1>{spot.name}</h1>
            <div>
                <p>{spot.city}, {spot.state}, {spot.country}</p>
            </div>
            <div className="imageGallery">
                {
                    spot.SpotImages.map((image, idx) => (
                        <img className='imageContainer' key={`${idx}-${image.id}`} src={image.url} />
                    ))
                    }
            </div>
            <h1>{`Hosted by ${spot.Owner.firstName} ${spot.Owner.lastName}`}</h1>
            <div>
                <p>{spot.description}</p>
            </div>
            <div className="calloutBox">
        <span className="spotPrice">{`$${spot.price} night`}</span>
        <span className="reviewInfo">{`★${spot.avgRating} ${spot.Reviews.length} reviews`}</span>
        <button className="reserveButton" onClick={() => alert("Feature coming soon")}>Reserve</button>

      </div>

        </div>
    );
};

export default DetailsCard;
