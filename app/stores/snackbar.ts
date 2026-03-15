interface SnackbarOptions {
    snackbar: string
    text: string
}

export enum Snackbars {
    addToFavorites = "addToFavorites",
    removeFromFavorites = "removeFromFavorites"
}

export const useSnackbarStore = defineStore("snackbarStore", {
    state: () => ({
        currentSnackbar: "",
        text: ""
    }),
    actions: {
        setSnackbar({snackbar, text}: SnackbarOptions) {
            this.currentSnackbar = snackbar
            this.text = text
        },
        clear() {
            this.currentSnackbar = ""
            this.text = ""
        }
    }
})