const oddOrEven = (number) => {
  const arr = ['EVEN','ODD'];
  document.getElementById('output').innerHTML = arr[parseInt(number)%2];
}