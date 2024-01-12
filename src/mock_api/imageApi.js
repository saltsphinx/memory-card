import { handleName } from '../utilities';

const path = '../../public/';

export default function imageApi(id) {
  return new Promise((resolve) => {
    const imgObj = {
      id,
      name: handleName(id),
      src: path + id + '.jpg',
    };

    setTimeout(() => resolve(imgObj), 1000);
  });
}
