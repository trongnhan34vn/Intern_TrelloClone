export const convertTimeStampToDate = (time: number) => {
  let date = new Date(time);
  let result = date.toISOString().slice(0, 16);
  return result;
};

export const convertDateToTimeStamp = (date: string) => {
  return Date.parse(date);
};