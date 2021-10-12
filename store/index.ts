// eslint-disable-next-line import/named
import { MutationTree, GetterTree } from 'vuex'

export const state = () => ({
  currentTimeframe: 'weekly',
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  changeTimeframe(state, timeframe: string) {
    state.currentTimeframe = timeframe
  },
}

export const getters: GetterTree<RootState, RootState> = {
  currentTimeframe: (state) => state.currentTimeframe,
}
