export const commListState = {
  fetching: false,
  msg: '',
  btnList: [],
  tableList: [],
  searchParam: {},
  searchData: {},
  pagination: {
    current: 1,
    pageSize: 50,
    total: 0
  },
  isLoaded: false
};

export const commDetailState = {
  code: '',
  view: false,
  fetching: false,
  selectData: {},
  pageData: {},
  isLoaded: false
};
