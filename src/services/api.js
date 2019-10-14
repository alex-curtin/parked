import axios from "axios";

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/";
const API_KEY =
  "ZAT7lUGBZGPLIkglRLWpBf-vVhqK2M2cRuZRqB0txpmrNLkRTH-heU6y1N0WjkvHwldkRtv6KR1kMoOS3QqZpV_umraVLyY2M-zfFqvV2rDFTQWajoQmcc7PFU6jXXYx";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
};

export const getParks = async (location) => {
  const res = await axios.get(
    `${BASE_URL}search?categories=parks&location=${location}`,
    options
  );
  console.log(res);
  return res.data.businesses;
};

export const getParkDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}${id}`, options);
  return res.data;
}