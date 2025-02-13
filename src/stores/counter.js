import { ref, computed } from 'vue'
import { defineStore } from 'pinia' 

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)

  // actions
  function decreaseCount() {
    count.value--
  }
  function increaseCount() {
    count.value++
  }

  // getters
  const oddOrEven = computed(()=>{
    return count.value % 2 === 0 ? 'even' : 'odd'
  })

  return {
    // state
    count,

    // actions
    decreaseCount,
    increaseCount,

    // getters
    oddOrEven
  }
})
