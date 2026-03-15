export const useFavoriteRocketsStore = defineStore("favoriteRocketsStore", {
    state: () => ({
        favoriteRockets: [] as string[]
    }),
    getters: {
        isFavorite: (state) => (id: string | null | undefined) => {
            if (!id) return
            return state.favoriteRockets.includes(id)
        } 
    },
    actions: {
        addToFavorite(id: string | null | undefined) {
            if (!id) return
            if (!this.favoriteRockets.includes(id)) {
                this.favoriteRockets.push(id)
            }
        },
        removeFromFavorite(id: string | null | undefined) {
            if (!id) return
            this.favoriteRockets = this.favoriteRockets.filter((favoriteRocketId) => favoriteRocketId != id)
        }
    }
})