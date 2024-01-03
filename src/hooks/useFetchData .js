import { useState, useEffect } from 'react';

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const binId = "6572dc690574da7622d1fd42";
        const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2b$10$your_master_key_here", // Replace with your master key
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const res = await response.json();

        const groupedData = Object.entries(res.record).reduce(
          (result, [id, item]) => {
            const section = item.section;
            if (!result[section]) {
              result[section] = [];
            }
            result[section].push({ id, ...item });
            return result;
          },
          {}
        );

        setData({ formattedData: groupedData, metaData: res.metadata });
        setError(null);
      } catch (error) {
        setData(null);
        setError(error.message || "An error occurred while fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateAmount = (section, id, newAmount) => {
    console.log({ section, id, newAmount });
    if (data && data.formattedData && data.formattedData[section]) {
      const updatedData = data.formattedData[section].map((item) =>
        item.id === id ? { ...item, amount: newAmount } : item
      );

      setData({
        formattedData: {
          ...data.formattedData,
          [section]: updatedData,
        },
        metaData: data.metaData,
      });
    }
  };

  return { data, error, loading, updateAmount };
};

export default useFetchData;
