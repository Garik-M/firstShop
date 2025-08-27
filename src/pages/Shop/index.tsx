import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { memo, useEffect, useState } from "react";
import { Data } from "./types";
import Main from "components/Main";
import Loading from "components/Loading";
import Nav from "components/Nav";
import { categories } from "utils/index";

const Shop = memo(() => {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<Data[]>();
  const [initialData, setInitialData] = useState<Data[]>();

  const getData = async () => {
    const products = await axios.get<{ products: Data[] }>(
      "https://dummyjson.com/products?limit=200"
    );
    const all = products.data.products;

    const filteredByCategories = categories.flatMap((category) =>
      all.filter((obj) => obj.category === category)
    );

    setInitialData(filteredByCategories);
    setData(filteredByCategories);
  };

  useEffect(() => {
    if (params.type !== "all-types") {
      const filtered = initialData?.filter(
        (obj) => obj.category === params.type
      );
      setData(filtered);
    } else {
      setData(initialData);
    }
  }, [params.type, initialData]);

  useEffect(() => {
    getData();
  }, []);

  return !data ? (
    <Loading />
  ) : (
    <div>
      <Nav />
      <Main data={data} setData={setData} />
    </div>
  );
});

export default Shop;
