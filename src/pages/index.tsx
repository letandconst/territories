import React, { useState, useEffect } from "react";
import axios from "axios";
import TerritoryList from "@/components/TerritoryList/TerritoryList";

export default function Home() {
  const [territories, setTerritories] = useState([] || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Territories/All`
        );
        setTerritories(res.data.data);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <p>Loading territories...</p>
  ) : (
    territories && <TerritoryList territories={territories} />
  );
}
