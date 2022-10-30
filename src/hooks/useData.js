import { useCallback, useEffect, useState } from "react";
import firebase from "../firebase";

const useData = () => {
  const ref = firebase.firestore().collection("users");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getToken = async () => {
      try {
        setIsLoading(true);
        const res = await ref.doc(userId).get();
        setUser(res.data());
        localStorage.setItem("userData", JSON.stringify(res.data()));
        setIsLoading(false);
      } catch (error) {
        console.error("getToken", error);
        setIsLoading(false);
      }
    };
    getToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createUser = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        const { id } = await ref.add(data);
        return id;
      } catch (error) {
        console.error("changeData", error);
        setIsLoading(false);
      }
    },
    [ref]
  );
  return { isLoading, user, createUser };
};

export default useData;
