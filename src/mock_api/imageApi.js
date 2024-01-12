const path = '../../public/';

export default function imageApi(id) {
  return new Promise((resolve) => {
    const imgObj = {
      id,
      name: capitalize(id),
      src: path + id + '.jpg',
    };

    setTimeout(() => resolve(imgObj), 1500);
  });
}

function capitalize(string) {
  const splitString = string.split('');
  splitString[0] = splitString[0].toUpperCase();

  return splitString.join('');
}
