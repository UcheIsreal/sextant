import React, { useEffect, useState } from 'react'



const PublicIp = (props) => {

    const [ip, setIp] = useState(null);

    useEffect(() => {
      const fetchIP = async () => {
        const url =
          props.ipVersion === "ipv4"
            ? "https://api.ipify.org"
            : "https://api6.ipify.org";

        const response = await fetch(url);
        const json = await response.json();
        setIp(json.ip);
      };

      fetchIP();
    }, [props.ipVersion]);

  return (
    <div>
      {props.ipVersion === "ipv4" && <p>Your public IPv4 address is: {ip}</p>}

      {props.ipVersion === "ipv6" && <p>Your public IPv6 address is: {ip}</p>}
    </div>
  );
}

export default PublicIp