import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setCoversations] = useState([]);

  useEffect(() => {
    const getCoversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setCoversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCoversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
