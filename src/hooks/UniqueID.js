export const CreateUniqueId = function () {
  let randomNum =
    Math.random().toString(16).substring(2, 15) +
    Math.random().toString(16).substring(2, 15);
  return randomNum;
};
