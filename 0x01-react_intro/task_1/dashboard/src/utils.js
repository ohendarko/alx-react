function getFullYear() {
  const currentYear = new Date().getFullYear();
  return currentYear
}

function getFooterCopy(isIndex) {
  { isIndex ? (<p>Holberton School</p>) : (<p>Holberton School main dashboard</p>) }
}