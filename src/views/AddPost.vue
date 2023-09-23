<template>
  <form>
    <label for="">Title</label>
    <input type="text" v-model="title" required />

    <label for="">Content:</label>
    <textarea v-model="content" required> </textarea>
    <button>Add Post</button>
  </form>
</template>
<script>
import { ref } from "vue";
import { fb } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore/lite";

export default {
  setup() {
    const title = ref("");
    const content = ref("");
    const id = Date.now();

    const post = {
      title: title.value,
      content: content.value,
      id: id,
    };
  },
};
</script>
<style>
form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  padding: 10px;
  border: 0;
  border: 2px solid #ddd;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 7px;
}
button {
  display: block;
  margin: 20px auto 0;
  background: #76dd78;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 7px;
  font-size: 16px;
}
</style>
