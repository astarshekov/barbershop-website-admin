import { useEffect, useState } from "react";
const useFetch = (url, method, headers, body, isLoaderRequired, refetch) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (refetch !== null) {
      (async () => {
        try {
          setLoading(isLoaderRequired);

          console.log("send data to server");
          const response = await fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify(body),
          });

          if (response.ok) {
            let data = await response.json();
            console.log("response: " + JSON.stringify(data));
            setData(data);
          }
        } catch (err) {
          console.log("error: " + err);
          setError(err);
        } finally {
          if (isLoaderRequired) setLoading(false);
        }
      })();
    }
  }, [refetch]);

  return { data, error, loading };
};

export default useFetch;
