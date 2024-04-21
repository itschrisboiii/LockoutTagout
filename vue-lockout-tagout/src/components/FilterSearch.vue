<template>
  <div class="date-filter-container">
    <h1>Date Filter</h1>
    <input type="date" v-model="selectedDate" @change="filterLockoutsAndTagouts">
    <div class="filtered-lists">
        <div class="filtered-lockouts">
            <h2>Filtered Lockouts</h2>
            <ul>
                <li v-for="(lockout, index) in filteredLockouts" :key="index">
                    <div class="lockout-item">
                        <div class="lockout-info">
                            <span class="lockout-equipment">{{ lockout.equipment }}</span>
                            <span class="lockout-associate">{{ lockout.associate }}</span>
                            <span class="lockout-time">{{ lockout.time }}</span>
                        </div>
                        
                    </div>
                </li>
            </ul>
        </div>
        <div class="filtered-tagouts">
            <h2>Filtered Tagouts</h2>
                <ul>
                    <li v-for="(tagout, index) in filteredTagouts" :key="index">
                        <div class="tagout-item">
                        <div class="tagout-info">
                            <span class="tagout-equipment">{{ tagout.equipment }}</span>
                            <span class="tagout-associate">{{ tagout.associate }}</span>
                            <div class="tagout-time">{{ tagout.time }}</div>
                        </div>
                    </div>
                    </li>
                </ul>
        </div>
  </div>
</div>
</template>

<script>
export default {
    data() {
    return {
      selectedDate: '',
      filteredLockouts: [],
      filteredTagouts: []
    };
  },
  methods: {
    filterLockoutsAndTagouts() {
      const selectedDate = new Date(this.selectedDate);
      this.filteredLockouts = this.$store.state.lockouts.filter(lockout => {
        const lockoutDate = new Date(lockout.date);
        return lockoutDate.toDateString() === selectedDate.toDateString();
      });
      
      this.filteredTagouts = this.$store.state.tagouts.filter(tagout => {
        const tagoutDate = new Date(tagout.date);
        return tagoutDate.toDateString() === selectedDate.toDateString();
      });
    }
  }
}
</script>

<style scoped>

* {
    font-family: 'Montserrat';
}
h2 {
    color: #b60000;
}
.date-filter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
}

.filtered-lists {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.filtered-lockouts, .filtered-tagouts {
  flex: 1;
  max-width: 300px;
}

.filtered-lockouts ul, .filtered-tagouts ul {
  list-style: none;
  padding: 0;
}
.lockout-item, .tagout-item {
  border: 1px solid #b60000;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
}

.lockout-info, .tagout-info {
  display: flex;
  justify-content: space-between;
}

.lockout-equipment, .tagout-equipment {
  font-weight: bold;
}

.lockout-time, .tagout-time {
  color: #666;
  text-align: right;
}
</style>