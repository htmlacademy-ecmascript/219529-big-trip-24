import Observable from '../framework/observable.js';
import {FilterType} from '../view/filters-view';

export default class FiltersModel extends Observable {
  #filter = FilterType.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  setFilter(updateType, filter) {
    this.#filter = filter;
    this._notify(updateType, filter);
  }
}
