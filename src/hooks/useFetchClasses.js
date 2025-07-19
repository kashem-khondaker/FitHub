import React, { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";

const useFetchClasses = (
  currentPage,
  instructorEmail,
  searchQuery,
  Ordering,
  max_capacity
) => {
  
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const url = `/fitness_classes/?search=${searchQuery}&ordering=${Ordering}&page=${currentPage}&instructor__email=${instructorEmail}&max_capacity=${max_capacity}`;
    const fetchClasses = async () => {
        setLoading(true);
      try {
        const response = await ApiClient.get(url);
        console.log(response.data);
        setClasses(response.data?.results);
        setTotalPages(
          Math.ceil(response.data?.count / response.data?.results?.length)
        );
      } catch (error) {
        console.log("Classes loading error : ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchClasses();
  }, [currentPage , instructorEmail , searchQuery ,Ordering , max_capacity]);
  return {classes , loading , totalPages};
};

export default useFetchClasses;
