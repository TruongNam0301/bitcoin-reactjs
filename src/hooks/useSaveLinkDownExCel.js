import { useEffect, useState } from "react";

const useSaveLink = (urlapi) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const env = process.env.REACT_APP_API_URL;
    let str = env + urlapi;
    setUrl(str);
    console.log(str);
  }, [urlapi]);
  return url;
};

export default useSaveLink;
