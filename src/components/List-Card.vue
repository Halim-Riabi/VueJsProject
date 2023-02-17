<!-- <template>
    <div class="events">
        <h1>Liste des évenements</h1>
        <info-card v-for="event in events" :key="event.id" :event="event"/>
    </div>
  </template>
  <script>
  export default {
    name: "Info-Card",
    props: {
      msg: String,
    },
    data() {
      return {
        event: {
          id: 1,
          name: "HalimR",
          category: "devweb",
          title: "gaminwebsite",
          description: "play hard",
          location: "boussalem",
          date: "29/01/2023",
          time: "14:00"
        },
        {
          id: 2,
          name: "MariemR",
          category: "prog",
          title: "student",
          description: "sleeping",
          location: "boussalem",
          date: "29/01/2005",
          time: "4:00"
        },
        {
          id: 3,
          name: "AhlemR",
          category: "Homing",
          title: "hussle",
          description: "eating",
          location: "boussalem",
          date: "29/01/1998",
          time: "11:00"
        }
      };
    },
  };
  </script>
  
  <style scoped>
  .firstcard {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }
  .firstcard:hover {
    transform: scale(1.03);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  </style>
   -->

<!-- this a navigation bar -->
<!-- <ul
    class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
    id="pillNav2"
    role="tablist"
    style="
      --bs-nav-link-color: var(--bs-white);
      --bs-nav-pills-link-active-color: var(--bs-primary);
      --bs-nav-pills-link-active-bg: var(--bs-white);
    "
  >
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active rounded-5"
        id="home-tab2"
        data-bs-toggle="tab"
        type="button"
        role="tab"
        aria-selected="true"
      >
        Home
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link rounded-5"
        id="profile-tab2"
        data-bs-toggle="tab"
        type="button"
        role="tab"
        aria-selected="false"
      >
        Profile
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link rounded-5"
        id="contact-tab2"
        data-bs-toggle="tab"
        type="button"
        role="tab"
        aria-selected="false"
      >
        Contact
      </button>
    </li>
  </ul> -->


<!-- 
  created() {
    axios.get(
      "https://my-json-server.typicode.com/guyroW/HalimDB/events"
      ).then(reponse => {
      console.log('events:', reponse.data);
    },
  } -->


<!-- 

  <template>
    <div>
      <form @submit.prevent="submitLogin">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      submitLogin() {
        // Perform login action, e.g. sending a request to the server
        // with the username and password
      }
    }
  }
  </script> -->
  