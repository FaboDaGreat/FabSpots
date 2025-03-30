import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as spotsActions from '../../store/spots'
import './CreateSpot.css';


const CreateSpot = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [url, setUrl] = useState("")
    //const [images, setimages] = useState("", "", "", "")
    const [errors, setErrors] = useState({});
  

  

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const newSpot = await dispatch(
          spotsActions.createSpotThunk({
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price,
            url
          })
        );
    
        if (newSpot && newSpot.id) {
          navigate(`/spots/${newSpot.id}`);
        }
      } catch (res) {
          const data = await res.json();
          if (data?.errors) {
            setErrors(data.errors);
          }
    
      }
    };
    
      
      

  return (
    <form onSubmit={handleSubmit} className="create-spot-form">
      <h1>Create a New Spot</h1>

      
      <section>
        <h2>{"Where's your place located?"}</h2>
        <p>
          Guests will only get your exact address once they booked a
          reservation.
        </p>
        <label>
          Country
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        {errors.country && <p>{errors.country}</p>}
        <label>
          Street Address
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        {errors.address && <p>{errors.address}</p>}
        <label>
          City
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        {errors.city && <p>{errors.city}</p>}
        <label>
          State
          <input
            type="text"
            name="state"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        {errors.state && <p>{errors.state}</p>}
        <label>
          Latitude
          <input
            type="text"
            name="latitude"
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
          />
        </label>
        {errors.lat && <p className="error-message">{errors.lat}</p>}
        <label>
          Longitude
          <input
            type="text"
            name="longitude"
            placeholder="Longitude"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            required
          />
        </label>
        {errors.lng && <p>{errors.lng}</p>}
      </section>

      <section>
        <h2>Describe your place to guests</h2>
        <p>
          Mention the best features of your space, any special amenities like
          fast wifi or parking, and what you love about the neighborhood.
        </p>
        <textarea
          name="description"
          placeholder="Please write at least 30 characters"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
            required
        />
        {errors.description && <p>{errors.description}</p>}
      </section>

      <section>
        <h2>Create a title for your spot</h2>
        <p>{"Catch guests' attention with a spot title that highlights what makes your place special."}</p>
        <input
          type="text"
          name="name"
          placeholder="Name of your spot"
          value={name}
          onChange={(e) => setName(e.target.value)}
            required
        />
        {errors.name && <p>{errors.name}</p>}
      </section>

      <section>
        <h2>Set a base price for your spot</h2>
        <p>
          Competitive pricing can help your listing stand out and rank higher in
          search results.
        </p>
        <input
          type="text"
          name="price"
          placeholder="Price per night (USD)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
            required
        />
        {errors.price && <p>{errors.price}</p>}
      </section>

      <section>
        <h2>Liven up your spot with photos</h2>
        <p>Submit a link to at least one photo to publish your spot.</p>
        <label>
          Preview Image URL
          <input
            type="text"
            name="previewImage"
            placeholder="Preview Image URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>
       
      </section>

      

      <button type="submit">Create Spot</button>
    </form>
  );
};


export default CreateSpot;
