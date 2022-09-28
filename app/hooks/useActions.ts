import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { cardActions } from "../store/card/cardSlice"

const allActions = {
    ...cardActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}