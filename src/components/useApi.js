import { useState } from "react";
import axios from "axios";

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (apiMethod, url, requestData) => {
    setLoading(true);
    try {
      const response = await axios({
        method: apiMethod,
        url,
        data: requestData,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { loading, data, error, fetchData };
}
