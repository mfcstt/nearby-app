import { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { api } from "@/services/api";

import { Categories, CategoriesProps} from "@/components/categories";

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Erro ao buscar categorias");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Categories data={categories}></Categories>
    </View>
  );
}
