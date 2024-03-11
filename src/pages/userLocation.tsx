import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchIPInformation,
  getVisitorIP,
} from "../redux/reducer/userLocationSlice";

const UserLocation = () => {
  const dispatch = useDispatch();
  const ipAddress = useSelector((state: any) => state.userLocation.ipAddress);
  const geoInfo = useSelector((state: any) => state.userLocation.geoInfo);

  useEffect(() => {
    // Invoke Function to Get IP Address
    fetchIPInformation(dispatch, ipAddress);
  }, [dispatch, ipAddress]);

  console.log("IP: ", geoInfo);

  useEffect(() => {
    const iframeData = document.getElementById("iframeId") as HTMLIFrameElement; // Explicitly type iframeData as HTMLIFrameElement
    if (iframeData) {
      // Check if iframeData is not null
      iframeData.src = `https://maps.google.com/maps?q=${geoInfo?.lat},${geoInfo?.lon}&hl=es;&output=embed`;
    }
  }, []); // Add an empty dependency array to run this effect only once

  useEffect(() => {
    // Invoke Function to Get IP Address
    getVisitorIP(dispatch);
  }, [dispatch]);

  return (
    <div>
      <iframe id="iframeId" height="500px" width="100%"></iframe>
    </div>
  );
};

export default UserLocation;
