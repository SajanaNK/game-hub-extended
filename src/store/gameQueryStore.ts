import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
    pageSize?: number;
}


interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatoformId: (platformId?: number) => void;
    setSortOrder: (sortOrder: string) => void;
    setPageSize: (pageSize: number) => void;
}


const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {} as GameQuery,
    setSearchText: (searchText: string) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreId } })),
    setPlatoformId: (platformId) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId: platformId } })),
    setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: sortOrder } })),
    setPageSize: (pageSize) => set((store) => ({ gameQuery: { ...store.gameQuery, pageSize: pageSize } }))

}));


export default useGameQueryStore;