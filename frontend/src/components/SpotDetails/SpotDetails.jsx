import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DetailsCard from "./DetailsCard";
import { getAllSpotsThunk } from "../../store/spots";




const SpotDetails = () => {

    
    const dispatch = useDispatch()

    const getAllSpots = async () => {
    
        await dispatch(getAllSpotsThunk());
      }
    
    useEffect(() => {
        
        getAllSpots()
    
    });
 
    
    const {id} = useParams();
    const spot = useSelector((state) => state.spotsReducer.byId[id]);

    
  return (
        <div>
            <DetailsCard spot={spot} />
        </div>
    )

}

export default SpotDetails