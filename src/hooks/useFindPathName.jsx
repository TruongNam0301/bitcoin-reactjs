import { useEffect, useState } from "react";

function useFindPathName(location) {
  const [path, setPath] = useState("");
  useEffect(() => {
    let array = location.pathname.split("/");
    setPath(array[1]);
  }, [location]);
  return path;
}

export default useFindPathName;
