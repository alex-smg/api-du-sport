import store from "../../store";

export default {
    name: "navbar",
    data: () => {
        return {
            home: store.state.data
        }
    }
}