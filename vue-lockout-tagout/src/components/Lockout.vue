<template>
    <h1>Time Unlocked</h1>
    <form  @submit.prevent="submitForm" class="lockout">
    <div class="form-group">
        <label for="equipment">Select Equipment:</label>
        <select v-model="equipment" id="equipment">
            <option v-for="(equipmentName, index) in equipmentNames" :value="equipmentName" :key="index">{{ equipmentName }}</option>
        </select>
    </div>
    <div class="form-group">
      <label for="associate">Select Associate:</label>
      <select v-model="associate" id="associate">
        <option v-for="(associateName, index) in associateNames" :value="associateName" :key="index">{{ associateName }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="time">Select Time:</label>
      <input type="time" v-model="time" id="time">
    </div>
      <button type="submit" class="submit-btn">Submit</button>
    </form>
    <notification-vue :show="showNotification" :message="notificationMessage" />
  </template>

<script>
import NotificationVue from './Notification.vue';
export default {
    components: {
        NotificationVue
    },
    data() {
        return {
            equipment: null, 
            associate: null, 
            time: '',
            showNotification: false,
            notificationMessage: ''
        } 
    },
    methods: {
        submitForm() {
            let currentDate = new Date();
            let formattedDate = currentDate.toISOString().slice(0,10);
        let newSubmit = {
            equipment: this.equipment,
            associate: this.associate,
            time: this.time,
            date: formattedDate
        }
        console.log(newSubmit);
        this.$store.commit("ADD_LOCKOUT", newSubmit);
        console.log(this.$store.state.lockouts);

        this.showNotification = true;
        this.notificationMessage = 'Time Unlocked has been logged';

        setTimeout(() => {
            this.showNotification = false;
        }, 3000);
      }
    },
    computed: {
        equipmentNames() {
            return this.$store.state.equipment.names;
    },
    associateNames () {
        return this.$store.state.associates.names;
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
        color: #b60000;
    }
    * {
    font-family: 'Montserrat';
}
.form-group {
  margin-bottom: 10px;
  
}

label {
  display: block;
  color: #b60000;
  margin-bottom: 5px;
}

select,
input[type="time"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box; /* Ensure padding is included in width calculation */
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #b60000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
#associate, #equipment, #time {
    width: 100%;
    
}
/* Media query for smaller screens */
@media (min-width: 768px) {
  .lockout {
    max-width: 400px; /* Limit width for larger screens */
    margin: 0 auto; /* Center the form horizontally */
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  label {
    width: 100%;
  }

  select,
  input[type="time"],
  .submit-btn {
    width: auto;
  }
}
</style>