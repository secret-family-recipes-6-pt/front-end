import React from "react";

export default function RecipeCard() {
  useEffect(() => {
    axiosWithAuth()
      .get("/recipes/user/:id")
      .then((res) => {
        console.log("respone: ", res.data);
        return res.data;
      })
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
}
