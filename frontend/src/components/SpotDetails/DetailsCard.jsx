

const DetailsCard = ({ spot }) => {
    return (
        <div>
            <h1>{spot.name}</h1>
            <div>
                <p>{spot.city}, {spot.state}, {spot.country}</p>
            </div>
            <div>
                <img
                    className='mainImage'
                    src={spot.SpotImages[0].url}
                />
            </div>
            <h1>{`Hosted by ${spot.Owner.firstName} ${spot.Owner.lastName}`}</h1>
            <div>
                <p>{spot.description}</p>
            </div>
        </div>
    );
};

export default DetailsCard;