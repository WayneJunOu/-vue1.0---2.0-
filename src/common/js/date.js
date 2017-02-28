export function formatDate(date, fmt) {
  return ftmtDate(new Date(date), fmt);
};
function ftmtDate(date, fmt) {
  var paddNum = function(num) {
    num += '';
    return num.replace(/^(\d)$/, '0$1');
  };
  var cfg = {
    yyyy: date.getFullYear(),
    yy: date.getFullYear().toString().substring(2),
    M: date.getMonth() + 1,
    MM: paddNum(date.getMonth() + 1),
    d: date.getDate(),
    dd: paddNum(date.getDate()),
    hh: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds()
  };
  fmt || (fmt = 'yyyy-MM-dd hh:mm:ss');
  return fmt.replace(/([a-z])(\1)*/ig, function(m) {
    return cfg[m];
  });
};
