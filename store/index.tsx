/* eslint-disable no-unused-vars */
import { create } from 'zustand'

interface DefaultState {
  isConnected: boolean
}

const useStore = create<DefaultState>((set) => ({
  isConnected: false,
}))

export default useStore
