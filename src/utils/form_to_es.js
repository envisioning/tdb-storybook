export function filterFormToEs(value, mapping) {
  const keys = Object.keys(value);
  const esFilter = [];
  keys.forEach(key => { //  'status'
    const val = value[key]; // ['published, 'draft']
    if (!val) return;
    let criteriaValue
    const clauseKey = mapping[key];
    if (clauseKey === 'range') {
      criteriaValue = {
        gte: val[0],
        lte: val[1]
      }
    } else {
      criteriaValue = val;
    }
    // switch (typeof criteriaValue) {
    //   case 'object':
    //     if (Array.isArray(criteriaValue)) {
    //       //  is array
    //       if (criteriaValue.length === 0) return;
    //       clauseKey = 'terms';
    //     } else {
    //       //  normal object
    //       clauseKey = 'range';
    //     }
    //   break;
    //   case 'number':
    //   case 'string':
    //   default:
    //     if (criteriaValue === '' || !criteriaValue) return;
    //     clauseKey = 'term';
    //   break;
    // }

    const clause = {};
    clause[clauseKey] = {[key]: criteriaValue};

    esFilter.push(clause);
  });

  return esFilter;
}

export function filterEsToForm(filter) {
  const processedFilter = {};

  filter.forEach(clause => { // {terms: { status: ['published', 'draft'] }},
    const clauseKey = Object.keys(clause)[0]; //  terms
    const criteria = clause[clauseKey];  //  { status: ['published', 'draft'] }
    const criteriaKey = Object.keys(criteria)[0]; // status
    const criteriaValue = criteria[criteriaKey];  //  ['published', 'draft']

    processedFilter[criteriaKey] = criteriaValue;
  });

  return processedFilter;
}


export function sortFormToEs(value) {
  const key = value.criteria;
  if (!key) {
    return [];
  }
  const order = value.direction;
  const obj = {};
  obj[key] = {order};
  const sort = [obj];
  return sort;
}
