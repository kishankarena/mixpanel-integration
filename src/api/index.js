import axios from "axios";
import LogRocket from "logrocket";

// Get Places Data
export const getPlacesData = async (type, sw, ne) => {
  try {
    // params & headers
    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY, // Your Rapid API Key
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    // fetch places list
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      options
    );

    return data;
  } catch (err) {
    // Error in fetching data
    LogRocket.captureException(err, {
      tags: {
        // additional data to be grouped as "tags"
        apiTagFor: "Places",
      },
      extra: {
        // additional arbitrary data associated with the event
        pageName: "Landing Page",
      },
    });
  }
};

// Get Weather Data
export const getWeatherData = async (lat, lng) => {
  try {
    // params & headers
    const options = {
      params: { lon: lng, lat: lat },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY, // Your Rapid API Key
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
      },
    };

    // fetch weather for a place
    const { data } = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/climate/month",
      options
    );

    return data;
  } catch (err) {
    // Error in fetching data
    LogRocket.captureException(err, {
      tags: {
        // additional data to be grouped as "tags"
        apiTagFor: "Weather",
      },
      extra: {
        // additional arbitrary data associated with the event
        pageName: "Landing Page",
      },
    });
  }
};
