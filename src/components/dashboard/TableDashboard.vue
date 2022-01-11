<template>
  <div class="container">
    <table class="table table-bordered">
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
        fifthCol: "39%",
        sixthCol: "10%",
        seventhCol: "4%",
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

<style>
.table .main-thead {
  text-transform: uppercase;
}
.main-tbody img {
  width: 100%;
}
</style>