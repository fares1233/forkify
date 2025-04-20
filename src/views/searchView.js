class SearchView {
  _parentEL = document.querySelector('.search');

  getQuery() {
    const query = document.querySelector('.search__field').value;
    this._clearInput();
    return query;
  } 

  _clearInput() {
    return document.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEL.addEventListener('submit', function(e) {
      e.preventDefault();
      handler();
      
    });
  }
}

export default new SearchView();
