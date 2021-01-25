const StringCheck = {
  isBlank: (str) => {
    return (!str || /^\s*$/.test(str));
  }
}

export default StringCheck;
