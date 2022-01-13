<template>
  <div class="table-top-page">
    <h1>Library Data</h1>
    <button>+ Add new entry</button>
  </div>
  <div class="main-table">
    <table class="table ">
      <thead class="main-thead">
        <tr>
          <th :style="`width: ${tableSize.firstCol}`" scope="col">ID</th>
          <th :style="`width: ${tableSize.secondCol}`" scope="col">Picture</th>
          <th :style="`width: ${tableSize.thirdCol}`" scope="col">Title</th>
          <th :style="`width: ${tableSize.forthCol}`" scope="col">Slug</th>
          <th :style="`width: ${tableSize.fifthCol}`" scope="col">
            Description
          </th>
          <th :style="`width: ${tableSize.sixthCol}`" scope="col">Author</th>
          <th :style="`width: ${tableSize.seventhCol}`" scope="col">Date</th>
          <th :style="`width: ${tableSize.eighthCol}`" scope="col">
            <i class="fa fa-cog"></i>
          </th>
        </tr>
      </thead>
      <tbody class="main-tbody">
        <tr v-for="variable in variables" :key="variable.id">
          <th scope="row">{{ variable.id }}</th>
          <td><img :src="variable.picture" alt="" /></td>
          <td>{{ variable.title }}</td>
          <td>{{ variable.slug }}</td>
          <td>{{ variable.description }}</td>
          <td>{{ variable.author }}</td>
          <td>{{ variable.date }}</td>
          <td class="icon">
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
</style>