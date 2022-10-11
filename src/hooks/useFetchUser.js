import { useEffect, useState } from "react";
import { apiConfig } from "../api/configData";

function useFetchUser(gitUser) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (gitUser)
      fetch(`${apiConfig["url"]}${gitUser}`)
        .then((res) => {
          if (!res.ok) {
            throw Error("couldn´t fetch data");
          }
          setError(null);
          return res.json();
        })
        .then((result) => setData(result))
        .catch((error) => setError(error.message));
  }, [gitUser]);

  return { data, error };
}

export default useFetchUser;
