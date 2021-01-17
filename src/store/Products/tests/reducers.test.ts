import { readProductList, readProductListError, readProductListSuccessfully } from '../actions';
import productsReducer from '../reducer';
import productList from '../../../services/mockData/productList.mock';

describe('Products reducer tests', () => {
  const initialState = {
    productList: [],
    loading: false,
    error: '',
  };

  it('[READ_LIST] should start loading while fetching product list', () => {
    const expectedState = {
      ...initialState,
      loading: true,
    };
    expect(productsReducer(initialState, readProductList())).toEqual(expectedState);
  });

  it('[READ_LIST_SUCCESS] should stop loading after fetch success', () => {
    expect(
      productsReducer(
        {
          ...initialState,
          loading: true,
        },
        readProductListSuccessfully([]),
      ),
    ).toEqual(initialState);
  });

  it('[READ_LIST_SUCCESS] should retreive product list after fetch success', () => {
    expect(
      productsReducer(
        {
          ...initialState,
          loading: true,
        },
        readProductListSuccessfully(productList),
      ),
    ).toEqual({ ...initialState, productList });
  });

  it('[READ_LIST_ERROR] should stop loading and retreive message after fetch error', () => {
    const error = 'XXX Status Code - Error message content';
    expect(
      productsReducer(
        {
          ...initialState,
          loading: true,
        },
        readProductListError(error),
      ),
    ).toEqual({ ...initialState, error });
  });
});
