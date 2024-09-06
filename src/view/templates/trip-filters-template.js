const FILTER_VALUES = [
  'everything',
  'future',
  'present',
  'past'
];

function createTripFilterTemplate(value, isChecked) {
  return `
    <div class="trip-filters__filter">
                  <input id="filter-${value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}" ${isChecked ? 'checked' : ''}>
                  <label class="trip-filters__filter-label" for="filter-${value}">${value}</label>
                </div>
  `;
}

export function createTripFiltersTemplate() {
  const tripFilterElements = FILTER_VALUES.map((value, index) =>
    createTripFilterTemplate(value, index === 0)).join('');

  return `
    <div class="trip-main__trip-controls  trip-controls">
      <div class="trip-controls__filters">
        <h2 class="visually-hidden">Filter events</h2>
        <form class="trip-filters" action="#" method="get">

          ${tripFilterElements}

          <button class="visually-hidden" type="submit">Accept filter</button>
        </form>
      </div>
    </div>
  `;
}