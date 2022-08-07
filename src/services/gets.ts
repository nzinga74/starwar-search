import axios from "axios";

export const getAllData = async (endpoints: string[]) => {
  let response: any = [];
  await axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((data) => {
      response = data.map((item) => item.data);
    });
  console.log("*", response);
  return response;
};
