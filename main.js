function telephoneCheck(str) {
  let trueRe = [/\d{10}/ig,
                /\d{9}/ig,
                /^\d{3}-\d{3}-\d{4}$/ig,
                /\d{1} \d{3} \d{3} \d{4}/ig,
                /\(\d{3}\)\d{3}-\d{4}/ig,
                /\d{1} \(\d{3}\) \d{3}-\d{4}/ig,
                /1 \d{3}-\d{3}-\d{4}/ig];
  let falseRe = [/\(\d{10}\)/ig, 
                /(0|2|-1) \(\d{3}\) \d{3}-\d{4}/ig, 
                /\d{11}/ig, /2\(\d{3}\)\d{3}-\d{4}/ig];
     
for (let i = 0; i < falseRe.length; i++) {
  if (str.match(falseRe[i])) {
      return false;
  }
}
  
for (let i = 0; i < trueRe.length; i++) {
  if (str.match(trueRe[i])) {
      return true;
  }
}
  
return false;
}


telephoneCheck("555-555-5555") // true
