
function blogTypeFormat(type) {
  switch (type) {
    case 'tech':
      return '技术';
    case 'culture':
      return '随笔';
    case 'serial':
      return '专栏';
    default:
      return '未知';
  }
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

function dateTimeFormat(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(formatNumber).join('-');
}

module.exports = {
  blogTypeFormat,
  dateTimeFormat
};