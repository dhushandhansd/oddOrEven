const oddOrEven = (number) => {
  const arr = ['EVEN','ODD'];
  document.getElementById('output').innerHTML = arr[parseInt(number)%2];
}

const protoctor = () => {
  document.getElementById('output').innerHTML = 'Get Out';
  alert('Dont try to touch the Box');
}