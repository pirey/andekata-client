import * as actions from '../actions/suratKeterangan'

// TODO update state shape
const initState = {
  isLoading: false,

  detail: {},

  // from api
  data: [],
  current_page: null,
  from: null,
  to: null,
  next_page_url: null,
  prev_page_url: null,
  per_page: null,
  total: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case actions.FETCH_SURAT_KETERANGAN_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detail: action.payload
      }

    case actions.FETCH_SURAT_KETERANGAN_SUCCESS:
      const { data = {}, ...other } = action.payload
      return {
        ...state,
        ...other,
        isLoading: false,
        data
      }

    case actions.UPDATE_SURAT_KETERANGAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detail: action.payload
      }

    case actions.FETCH_SURAT_KETERANGAN_DETAIL_REQUEST:
    case actions.FETCH_SURAT_KETERANGAN_REQUEST:
    case actions.CREATE_SURAT_KETERANGAN_REQUEST:
    case actions.UPDATE_SURAT_KETERANGAN_REQUEST:
    case actions.DELETE_SURAT_KETERANGAN_REQUEST:
    case actions.RENDER_SURAT_KETERANGAN_REQUEST:
      return { ...state, isLoading: true }

    case actions.FETCH_SURAT_KETERANGAN_DETAIL_FAILED:
    case actions.FETCH_SURAT_KETERANGAN_FAILED:
    case actions.CREATE_SURAT_KETERANGAN_SUCCESS:
    case actions.CREATE_SURAT_KETERANGAN_FAILED:
    case actions.UPDATE_SURAT_KETERANGAN_FAILED:
    case actions.DELETE_SURAT_KETERANGAN_SUCCESS:
    case actions.DELETE_SURAT_KETERANGAN_FAILED:
    case actions.RENDER_SURAT_KETERANGAN_SUCCESS:
    case actions.RENDER_SURAT_KETERANGAN_FAILED:
      return { ...state, isLoading: false }

    default:
      return state
  }
}
