import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetchNew = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options = {}) => {
    console.log("fetching");
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios(url, options);
        setResponse(res.data);
      } catch (err) {
        const data = err.response ? err.response.data : "Error";
        setError(data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading, url, options]);

  return [{ response, error, isLoading }, doFetch];
};

export default useFetchNew;
