import {createElement} from '../render.js';
import {createEventsListTemplate} from './templates/events-list-template.js';

export default class EventsListView {
  getTemplate() {
    return createEventsListTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
