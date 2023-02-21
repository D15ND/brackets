module.exports = function check(str, bracketsConfig) {
  let result = '';
  for (let i=0; i<str.length; i++) {
    for (let j=0; j<bracketsConfig.length; j++) {
      if (str[i]===bracketsConfig[j][0]) {
        if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
            if (result[result.length-1]===bracketsConfig[j][0]) {
              result=result.slice(0, -1);
            } else {
              result+=str[i];
            }
        } else {
          result+=str[i];
        }
      }
       else if (str[i]===bracketsConfig[j][1]) {
        if (result[result.length-1]===bracketsConfig[j][0]) {
          result=result.slice(0, -1);
        }
        else {
          return false;
        }
      }
    }
  }
  console.log(result)
  if (result==='') {
    return true;
  } else {
    return false;
  }
}
