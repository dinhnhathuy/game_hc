<template>
  <div class="table-top-page">
    <h1>Library Data</h1>
    <button @click="onNewEntry" >+ Add new entry</button>
  </div>
  <div class="main-table">
    <table class="table ">
      <thead class="main-thead">
        <tr>
          <th :style="`width: ${tableSize.firstCol}`" >ID</th>
          <th :style="`width: ${tableSize.secondCol}`">Picture</th>
          <th :style="`width: ${tableSize.thirdCol}`" >Title</th>
          <th :style="`width: ${tableSize.forthCol}`" >Slug</th>
          <th :style="`width: ${tableSize.fifthCol}`" >
            Description
          </th>
          <th :style="`width: ${tableSize.sixthCol}`" >Author</th>
          <th :style="`width: ${tableSize.seventhCol}`" >Date</th>
          <th :style="`width: ${tableSize.eighthCol}`" >
            <i class="fa fa-cog"></i>
          </th>
        </tr>
      </thead>
      <tbody class="main-tbody">
        <tr style="display: flex"  v-for="variable in variables" :key="variable.id">
          <th :style="`width: ${tableSize.firstCol}`">{{ variable.id }}</th>
          <td :style="`width: ${tableSize.secondCol}`" class="line-clamp"><img :src="variable.picture" alt="" /></td>
          <td :style="`width: ${tableSize.thirdCol}`" class="line-clamp">{{ variable.title }}</td>
          <td :style="`width: ${tableSize.forthCol}`" class="line-clamp">{{ variable.slug }}</td>
          <td :style="`width: ${tableSize.fifthCol}`" class="anText line-clamp">{{ variable.description }}</td>
          <td :style="`width: ${tableSize.sixthCol}`" class="line-clamp">{{ variable.author }}</td>
          <td :style="`width: ${tableSize.seventhCol}`" class="line-clamp">{{ variable.date }}</td>
          <td :style="`width: ${tableSize.eighthCol}`" class="icon line-clamp">
            <i class="fa fa-pencil"></i>
            <i class="fa fa-trash"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableSize: {
        firstCol: "2%",
        secondCol: "10%",
        thirdCol: "20%",
        forthCol: "15%",
        fifthCol: "32%",
        sixthCol: "10%",
        seventhCol: "4%",
        eighthCol: "7%",
      },
      variables: [
        {
          id: 1,
          picture:
            "https://www.gamespot.com/a/uploads/screen_small/1581/15811374/3924394-sideswipethumbfinal.jpg",
          title: "Rocket Leadge Sideswipe Review - Pocket Rocket",
          slug: "rocket-leadge-sideswipe-review-pocket-rocket",
          description:
            "The miniaturized version of Rocket League maintains the chaos, fun, and intensity of car-based sports, while perfecting a bite-sized approach.",
          author: "Phil Hornshaw",
          date: "20/11/2021",
        },
        {
          id: 2,
          picture:
            "https://www.gamespot.com/a/uploads/screen_small/1581/15811374/3924394-sideswipethumbfinal.jpg",
          title: "Star Wars Jedi: Fallen Order's Sequel Should Star Merrin",
          slug: "star-wars-jedi-fallen-order'-sequel-should-star-merrin",
          description:
            "Merrin is the best part of Fallen Order--she deserves to be in the spotlight for a sequel.",
          author: "Jordan Ramée",
          date: "7/1/2022",
        },
      ],
    };
  },
  methods: {
    onNewEntry(){
      this.$emit("createEntry")
    }
  },
};
</script>

<style scope>
.table-top-page {
  display:flex;
  justify-content: space-between;
  margin-top: 20px;
}
.table-top-page button {
  border-radius: 10px;
  font-size: 20px;
  background-color: rgb(53, 53, 230);
  color: white;
  height: 45px;
  width: 200px;
}
.main-table{
  border-radius: 20px;
  background-color: white;
  margin-top: 20px;
  
}
.main-table .table {
  border: 1px initial rgba(128, 128, 128, 0.26);
  
}
.table .main-thead {
  text-transform: uppercase;
}
.main-thead .fa-cog{
  border: 1px solid rgba(128, 128, 128, 0.486);
  font-size: 15px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;

}
.main-tbody img {
  width: 100%;
}
.main-tbody .icon {
  letter-spacing: 20px;
  font-size: 15px;
  color: rgba(128, 128, 128, 0.829);
}
.main-tbody .anText{ 
  
}
.line-clamp {
  display: -webkit-box;
  max-width: 100%;
  margin: 0 auto;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>