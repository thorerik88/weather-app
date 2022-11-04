import { save } from "../storage/storage";

export const generateLocation = () => {
  if (navigator.geolocation) {
   const position = navigator.geolocation.getCurrentPosition(showPosition);
  }
}

const showPosition = (position) => {
  const latitude = position.coords.latitude
  const longitude =  position.coords.longitude
  save("Location", {"latitude": latitude, "longitude": longitude})
}