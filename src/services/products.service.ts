import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import axios from 'axios';

const readProductList = () =>
  from(axios.get('https://jsonplaceholder.typicode.com/photos')).pipe(map(({ data }) => data));

export { readProductList };
