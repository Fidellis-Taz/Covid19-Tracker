export const sortData = (data) => {
  let sortedData = [...data];
  /* sort the data according to the number of cases */
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};
