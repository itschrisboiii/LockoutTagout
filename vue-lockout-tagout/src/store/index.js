import { createStore as _createStore } from 'vuex';

export function createStore() {
  return _createStore({
    state: {
        equipment: {
            names: ['Machines Belt', 'Grinder Top Belt', 'Grinder Incline Belt']
        },
        associates: {
            names: ['Joshua Debbening', 'Christopher Loya', 'Christian Flores']
        },
        lockouts: [],
        tagouts: []
    },
    mutations: {
        ADD_LOCKOUT(state, lockout) {
            state.lockouts.push(lockout);
        },
        ADD_TAGOUT(state, tagout) {
            state.tagouts.push(tagout);
        }
    }
    // Strict should not be used in production code. It is used here as a
    // learning aid to warn you if state is modified without using a mutation.
  })
}