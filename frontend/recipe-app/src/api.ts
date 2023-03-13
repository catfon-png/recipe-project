const apiId = "1fbf7cde";
const apiKey = "c4863efa2b218a6cc7151c09f620ed76";

export const fetchData = async (search: string) => {
    try {
      const res = await fetch(
        `https://api.edamam.com/search?q=${search}&app_id=${apiId}&app_key=${apiKey}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };