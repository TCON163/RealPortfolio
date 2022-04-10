import { BrowserView, MobileView } from "react-device-detect";

const DeviceDetector = () => (
  <>
    <BrowserView>I am rendered on: Desktop</BrowserView>
    <MobileView>I am rendered on: Mobile</MobileView>
  </>
);

export default DeviceDetector;