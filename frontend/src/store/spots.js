import { csrfFetch } from "./csrf";


// ----- ACTION TYPE -----
const GET_ALL_SPOTS = "spots/getAllSpots";

// ------- ACTION CREATOR ---------
const getAllSpots = (spots) => {
    return {
        type: GET_ALL_SPOTS,
        payload: spots
    }
};



// ----- THUNK ------
export const getAllSpotsThunk = () => async (dispatch) => {
    try {
        const res = await csrfFetch("/api/spots/"); 
        
        if(res.ok){
            
            const data = await res.json();
            
            dispatch(getAllSpots(data));
        } else {
            throw res;
        }

    } catch (error) {
        
        return error;
    }

}


    
// ------ REDUCER -------
const initialState = {
    allSpots: [],
    byId: {}
};

function spotsReducer (state = initialState, action){
    let newState; 

    switch(action.type){
        case GET_ALL_SPOTS:
                newState = {...state};
                
                const spots = action.payload.Spots
                
                newState.allSpots = spots; 

                
                let newById = {};
                for(let spot of spots){
                    newById[spot.id] = spot; 
                }
                newState.byId = newById; 

                
            return newState;

        default:
            return state;
    }
}

export default spotsReducer;
