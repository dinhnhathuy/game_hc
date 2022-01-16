<template>
  <span @click="cancelCreate">
    <i class="fa fa-arrow-left">BACK</i>
  </span>
  <h2>Create an Entry</h2>
  <form>
    <div class="information">
      <div class="info-body row">
        <div class="box-info col-6">
          <label for="title">
            <b>Title</b>
          </label>
          <input type="text" name="title" required />
        </div>

        <div class="box-info col-6">
          <label for="name">
            <b>Author</b>
          </label>
          <input type="text" name="name" required />
        </div>
        <div class="box-info col-6">
          <label for="description">
            <b>Description</b>
          </label>
          <textarea name="description" id="description" cols="190" rows="5"></textarea>
        </div>
        <div class="box-info col-6">
          <label for="content">
            <b>Content</b>
          </label>
          <textarea name="content" id="content" cols="190" rows="10"></textarea>
        </div>
        <div class="box-info col-6">
          <label for="image">
            <b>Image</b>
          </label>
          <input type="file" class="imageBox" name="image" required />
        </div>
      </div>
      <input type="submit" value="SAVE" />
    </div>
  </form>
</template>

<script>
  export default {
    methods: {
      cancelCreate() {
        this.$emit("cancelEntry")
      }
    },
  };
</script>

<style scoped>
  span {
    color: blue;
    font-size: 15px;
    cursor: pointer;
  }

  form {
    background-color: white;
  }

  .information label {
    display: block;
  }

  .info-body {
    padding: 1rem 2rem;
    display: flex;
    flex-wrap: wrap;
  }

  .info-body .box-info input {
    border: 0.5px solid #bec7c8;
  }

  .info-body .box-info textarea {
    border: 0.5px solid #bec7c8;
  }

  .information {
    display: flex;
    flex-wrap: wrap;
  }

  input[type="text"] {
    width: 100%;
  }

  input[type="submit"] {
    width: auto;
  }

  .information .descriptionBox {
    width: 500px;
  }

  textarea {
    width: 100%;
  }
</style>