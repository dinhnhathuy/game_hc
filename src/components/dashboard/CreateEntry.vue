<template>
  <span @click="cancelCreate">
    <i class="fa fa-arrow-left">BACK</i>
  </span>
  <div class="entry-head">
    <h2>Create an Entry</h2>
    <button type="submit">Save</button>
  </div>

  <div class="entrybody row">
    <form class="col-9">
      <div class="newentry">
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
            <textarea
              name="description"
              id="description"
              cols="190"
              rows="5"
            ></textarea>
          </div>
          <div class="box-info col-6">
            <label for="content">
              <b>Content</b>
            </label>
            <textarea
              name="content"
              id="content"
              cols="190"
              rows="10"
            ></textarea>
          </div>
          <div class="box-info col-6">
            <label for="image">
              <b>Image</b>
            </label>
            <input type="file" class="imageBox" name="image" required />
          </div>
        </div>
      </div>
    </form>
    <div class="entry-right col-2">
      <div class="information row">
        <div class="col-12">
          <p>INFORMATION</p>
          <hr />
          <div class="row">
            <b class="col-6">Last update</b>
            <p class="col-6">3 months ago</p>
          </div>
          <div class="row">
            <b class="col-6"> By</b>
            <p class="col-6">Trung Can</p>
          </div>
          <p>INTERNATIONALIZATION</p>
          <hr />
          <div>
            <b>Location</b>
            <input type="text" placeholder="country" />
          </div>
        </div>
      </div>

      <div class="relation row">
        <div class="col-12">
          <p>RELATIONS</p>
          <hr />
          <div>
            <b>Reviews</b>
            <input type="text" />
          </div>
          <div>
            <b>Category</b>
            <input type="text" />
          </div>
        </div>
      </div>

      <div class="edit-button row">
        <button class="col-12">
          <i class="fa fa-pencil"> Edit the model </i>
        </button>
        <button class="col-12">
          <i class="fa fa-th-list"> Configure the view </i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cancelCreate() {
      this.$emit("cancelEntry");
    },
  },
};
</script>

<style scoped>
.entry-head {
  display: flex;
  justify-content: space-between;
}
.entrybody {
  display: flex;
}
span {
  color: blue;
  font-size: 15px;
  cursor: pointer;
}

form {
  border-radius: 20px;
  background-color: white;
}

.newentry label {
  display: block;
}

.info-body {
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
}

.info-body .box-info input {
  border: 0.5px solid #bec7c8;
}

.info-body .box-info textarea {
  border: 0.5px solid #bec7c8;
}
button[type="submit"] {
  color: white;
  margin-right: 111px;
  margin-bottom: 20px;
  width: 100px;
  background-color: blue;
  border: 0.5px;
  border-radius: 5px;
}

.newentry {
  display: flex;
  flex-wrap: wrap;
}

input[type="text"] {
  width: 100%;
}

input[type="submit"] {
  width: auto;
}

.newentry .descriptionBox {
  width: 500px;
}

textarea {
  width: 100%;
}
.entry-right {
  margin-left: 10px;
  font-family: Segoe UI;
  font-size: 13px;
}

.entry-right .information {
  background-color: white;
  padding: 15px;
  border-radius: 20px;
}
.entry-right .relation {
  background-color: white;
  padding: 15px;
  margin-top: 5px;
  border-radius: 20px;
}
.entry-right .edit-button button {
  margin-top: 8px;
  color: blue;
  background-color: #aac6f7;
  border: 0.5px solid #8c8cf3;
  border-radius: 5px;
  font-weight: bold;
}
</style>
