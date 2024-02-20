// ACTION REFERENCES

export const GET_ALL_USERS = "GET_ALL_USERS";
export const STOP_LOADING = "STOP_LOADING";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const STOP_LOADING_ME = "STOP_LOADING_ME";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const STOP_LOADING_EXPERIENCES = "STOP_LOADING_EXPERIENCES";

// ACTION CREATORS

export const actionStopLoading = () => ({
  type: STOP_LOADING,
});

export const actionStopLoadingMe = () => ({
  type: STOP_LOADING_ME,
});

export const actionStopLoadingExperiences = () => ({
  type: STOP_LOADING_EXPERIENCES,
});

export const actionGetAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const newData = data.slice(0, 40);
        dispatch({
          type: GET_ALL_USERS,
          payload: newData,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionStopLoading());
    }
  };
};

export const actionGetMyProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: GET_MY_PROFILE,
          payload: data,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionStopLoadingMe());
    }
  };
};

export const actionGetExperiences = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          id +
          "/experiences",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: GET_EXPERIENCES,
          payload: data,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionStopLoadingExperiences());
    }
  };
};
