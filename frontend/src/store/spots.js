import { csrfFetch } from "./csrf";


// ----- ACTION TYPE -----
const GET_ALL_SPOTS = "spots/getAllSpots";
const GET_SPOT_BY_ID = "spots/getSpotById";

// ------- ACTION CREATOR ---------
const getAllSpots = (spots) => {
    return {
        type: GET_ALL_SPOTS,
        payload: spots
    }
};

const getSpotById = (spot) => {
    return {
      type: GET_SPOT_BY_ID,
      payload: spot,
    };
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

export const getSpotByIdThunk = (id) => async (dispatch) => {
    try {
      const res = await csrfFetch(`/api/spots/${id}`);
      if (res.ok) {
        const data = await res.json();
        dispatch(getSpotById(data));
      } else {
        throw res;
      }
    } catch (error) {
      return error;
    }
};

  


    
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


        case GET_SPOT_BY_ID:
                newState = { ...state };
                newState.byId = { ...state.byId, [action.payload.id]: action.payload };
                return newState;
          

        default:
            return state;
    }
}

export default spotsReducer;
