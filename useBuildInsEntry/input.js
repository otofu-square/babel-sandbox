import "@babel/polyfill";

const f = async () => {
  const result = await Promise.resolve("ok");
  return result;
};

f();
