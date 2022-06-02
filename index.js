// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
// const createDate = null;
const createDate = (datanya, n) => {
  const convert = [];
  for (let data=0; data < datanya.length ; data++)
  {
    const ubahMilikeDetik = Date.parse(datanya[data])/1000;
    convert.push(ubahMilikeDetik)
  }
  let hasil = null;
  if (n == null) {hasil = convert.sort().join("-");}
  else {hasil = convert[n].toString()}
  return hasil;
}

// const stringcob = dates.join(", ");
// const naha = Date.parse(benda[4]);

// console.log(naha / 1000);
// console.log(stringcob);
// console.log(Date.parse(stringcob));
// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
