export const splitter = (data: Array<string>) => {
  let split = [];
  for (let index = 0; index < data.length; index++) {
    split.push(data[index].split(" ")[0]);
  }
  console.log("splitt", data);
  return split;
};
