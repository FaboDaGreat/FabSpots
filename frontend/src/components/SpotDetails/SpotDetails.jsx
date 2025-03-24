import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DetailsCard from "./DetailsCard";
import { getSpotByIdThunk } from "../../store/spots";

const SpotDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const spot = useSelector((state) => state.spotsReducer.byId[id]);

    useEffect(() => {
        if (!spot) {
            dispatch(getSpotByIdThunk(id));
        }
    }, [dispatch, id, spot]);


    if (!spot) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div>
                <DetailsCard spot={spot} />
            </div>
        );
    }

};

export default SpotDetails;

