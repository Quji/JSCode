if(!Object.values) {
  Object.values = (obj) => {
    return Object.keys(obj).map(key => obj[key]);
  };
}
