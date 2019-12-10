const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

const get = key => {
  try {
    const transaction = localStorage.getItem(key);

    return transaction ? JSON.parse(transaction) : null;
  } catch (e) {
    console.log('err');
  }

  return null;
};
export default {
  save,
  get,
};
