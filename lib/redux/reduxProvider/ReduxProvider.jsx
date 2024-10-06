'use client';

import { Provider } from "react-redux";
import { Store } from "../store/Store";

export default function ReduxProvider({ children }) {
    return (
        <Provider store={Store}>{children}</Provider>
    )
}