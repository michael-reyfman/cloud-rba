const initialState = [
  {
    id: 'rbc',
    title: 'Red blood cells',
    selected: false,
  },
  {
    id: 'wbc',
    title: 'White blood cells',
    selected: false,
  },
  {
    id: 'hg',
    title: 'Hemoglobin',
    selected: false,
    unit: 'g/L'
  }
]

export const toggle = payload => ({
  type: 'TOGGLE',
  payload,
})

const paramsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE':
      const n_st = [...state]
      const v = n_st.find(param => param.id === action.payload)
      v.selected = !v.selected
      return n_st
    default:
      return state
  }
}

export default paramsReducer
