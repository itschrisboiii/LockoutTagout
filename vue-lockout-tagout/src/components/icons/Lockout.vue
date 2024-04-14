<template>
    <h1>Lockout</h1>
    <form  @submit.prevent="submitForm" class="lockout">
        <label for="equipment">Select Equipment:</label>
      <select v-model="equipment" id="equipment">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <label for="associate">Select Associate:</label>
      <select v-model="associate" id="associate">
        <option value="option1">Option A</option>
        <option value="option2">Option B</option>
        <option value="option3">Option C</option>
      </select>
      <label for="time">Select Time:</label>
      <input type="time" v-model="time" id="time">
      <button type="submit" class="submit-btn">Submit</button>
    </form>
  </template>

<script>
export default {
    data() {
        return {
            equipment: 'option1', // Default selected option for select1
            associate: 'option1', // Default selected option for select2
            time: ''
        } 
    },
    methods: {
        submitForm() {
        console.log("Lockout submitted");
        console.log("Selected Equipment:", this.equipment);
        console.log("Selected Associate:", this.associate);
        console.log("Selected Time:", this.time);
      }
    }
}
</script>

<style scoped>
    .lockout {
        text-align: center;
        margin-bottom: 20px;
    }
    h1 {
        text-align: center;
    }
</style>