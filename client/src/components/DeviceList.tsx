import { FC, useContext } from "react";
import { Context } from "../main";
import DeviceItem from "./DeviceItem";

const DeviceList: FC = () => {

    const { devices } = useContext(Context)
    
    return(
        <div className="d-flex flex-wrap">
            {devices.devices.map(device => 
                <DeviceItem key={device.id} device={device} />
            )}
        </div>
    )
}

export default DeviceList