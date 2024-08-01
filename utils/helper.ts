import controller from "../controller/zippotamus.controller";
import data from "../data/codes";

export const getAddress = async () => {
  const promises = data.countries.flatMap((country) =>
    data.codes.map((code) => controller.getAddress(`/${country}/${code}`))
  );

  const responses = await Promise.all(promises);
  return responses;
};
