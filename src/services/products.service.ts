import { from } from 'rxjs';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const readProductList = () => from(axios.get('https://jsonplaceholder.typicode.com/photos'));

export { readProductList };
