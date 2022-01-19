<template>
  <div class="">
    <button @click="loadData">load data</button>
    <Chart :answers="fakeData" :question="question"/>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account),
      fakeData: computed(() => AppState.fakeData),
      question: computed(()=> AppState.activeQuestion),
      loadData(){
        AppState.activeQuestion = {
                "body": "who is evan you",
                "pollId": "61ba694ac84e9bcd4781ff6c",
                "choices": [
                    {
                        "content": "creator of vue",
                        "value": 1
                    },
                    {
                        "content": " king",
                        "value": -1
                    },
                    {
                        "content": "A good answer",
                        "value": 0
                    },
                    {
                        "content": "Please Provide An Answer",
                        "value": 0
                    }]}
        AppState.fakeData = [{
        "_id": "61e5aa5401b16f24f836906a",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e5a84a4a9daf84d440a32f",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61d88804fedafcdfe59faf5a",
        "answer": {
            "content": "creator of vue",
            "value": 1
        },
        "createdAt": "2022-01-17T17:41:40.180Z",
        "updatedAt": "2022-01-17T17:41:40.180Z",
        "__v": 0,
        "question": null,
        "id": "61e5aa5401b16f24f836906a"
    },
    {
        "_id": "61e5abd501b16f24f83690b3",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e5a84a4a9daf84d440a32f",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61d88804fedafcdfe59faf5a",
        "answer": {
            "content": " king",
            "value": -1
        },
        "createdAt": "2022-01-17T17:48:05.304Z",
        "updatedAt": "2022-01-17T17:48:05.304Z",
        "__v": 0,
        "question": null,
        "id": "61e5abd501b16f24f83690b3"
    },
    {
        "_id": "61e5abf401b16f24f83690c1",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e5a84a4a9daf84d440a32f",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61d88804fedafcdfe59faf5a",
        "answer": {
            "content": "A good answer",
            "value": 0
        },
        "createdAt": "2022-01-17T17:48:36.008Z",
        "updatedAt": "2022-01-17T17:48:36.008Z",
        "__v": 0,
        "question": null,
        "id": "61e5abf401b16f24f83690c1"
    },
    {
        "_id": "61e5ac4601b16f24f83690cf",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e5a84a4a9daf84d440a32f",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61d88804fedafcdfe59faf5a",
        "answer": {
            "content": "Please Provide An Answer",
            "value": 0
        },
        "createdAt": "2022-01-17T17:49:58.969Z",
        "updatedAt": "2022-01-17T17:49:58.969Z",
        "__v": 0,
        "question": null,
        "id": "61e5ac4601b16f24f83690cf"
    },
    {
        "_id": "61e5e1aac1adaf70ac21e750",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e5e178c1adaf70ac21e726",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61d88804fedafcdfe59faf5a",
        "answer": {
            "content": "creator of vue",
            "value": 1
        },
        "createdAt": "2022-01-17T21:37:46.009Z",
        "updatedAt": "2022-01-17T21:37:46.009Z",
        "__v": 0,
        "question": null,
        "id": "61e5e1aac1adaf70ac21e750"
    },
    {
        "_id": "61e5f9ebd55889244e22590c",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e5e178c1adaf70ac21e726",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61e5f99228144e3bb78a1097",
        "answer": {
            "content": " king",
            "value": -1
        },
        "createdAt": "2022-01-17T23:21:15.747Z",
        "updatedAt": "2022-01-17T23:21:15.747Z",
        "__v": 0,
        "question": null,
        "id": "61e5f9ebd55889244e22590c"
    },
    {
        "_id": "61e6ea21eca22d03d3bac678",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e6e9b8eca22d03d3bac61a",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61e6e9fda9bce9f50cdb0148",
        "answer": {
            "content": " king",
            "value": -1
        },
        "createdAt": "2022-01-18T16:26:09.382Z",
        "updatedAt": "2022-01-18T16:26:09.382Z",
        "__v": 0,
        "question": null,
        "id": "61e6ea21eca22d03d3bac678"
    },
    {
        "_id": "61e6f0763151ca77dd2b80b5",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e6ef593151ca77dd2b804c",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61e6ed90a517f3c17d260333",
        "answer": {
            "content": "creator of vue",
            "value": 1
        },
        "createdAt": "2022-01-18T16:53:10.389Z",
        "updatedAt": "2022-01-18T16:53:10.389Z",
        "__v": 0,
        "question": null,
        "id": "61e6f0763151ca77dd2b80b5"
    },
    {
        "_id": "61e6f669af4bde2cdba2a83c",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e6f656af4bde2cdba2a80e",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61e6f64c719c4ef0d840e48f",
        "answer": {
            "content": "creator of vue",
            "value": 1
        },
        "createdAt": "2022-01-18T17:18:33.557Z",
        "updatedAt": "2022-01-18T17:18:33.557Z",
        "__v": 0,
        "question": null,
        "id": "61e6f669af4bde2cdba2a83c"
    },
    {
        "_id": "61e6f8d1af4bde2cdba2a8a5",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e6f8c4af4bde2cdba2a877",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61e6f8bb00d10818aadc3a4a",
        "answer": {
            "content": "creator of vue",
            "value": 1
        },
        "createdAt": "2022-01-18T17:28:49.622Z",
        "updatedAt": "2022-01-18T17:28:49.622Z",
        "__v": 0,
        "question": null,
        "id": "61e6f8d1af4bde2cdba2a8a5"
    },
    {
        "_id": "61e6fa4faf4bde2cdba2a919",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e6fa40af4bde2cdba2a8e6",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61e6fa3b95f658243da5dae7",
        "answer": {
            "content": "creator of vue",
            "value": 1
        },
        "createdAt": "2022-01-18T17:35:11.292Z",
        "updatedAt": "2022-01-18T17:35:11.292Z",
        "__v": 0,
        "question": null,
        "id": "61e6fa4faf4bde2cdba2a919"
    },
    {
        "_id": "61e6fb66af4bde2cdba2a9b6",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e6fb44af4bde2cdba2a988",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61e6fb3c356e495033a73dd9",
        "answer": {
            "content": "creator of vue",
            "value": 1
        },
        "createdAt": "2022-01-18T17:39:50.383Z",
        "updatedAt": "2022-01-18T17:39:50.383Z",
        "__v": 0,
        "question": null,
        "id": "61e6fb66af4bde2cdba2a9b6"
    },
    {
        "_id": "61e70084af4bde2cdba2aa47",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e70070af4bde2cdba2aa03",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61e70066b5a50d293fbbd828",
        "answer": {
            "content": "creator of vue",
            "value": 1
        },
        "createdAt": "2022-01-18T18:01:40.375Z",
        "updatedAt": "2022-01-18T18:01:40.375Z",
        "__v": 0,
        "question": null,
        "id": "61e70084af4bde2cdba2aa47"
    },
    {
        "_id": "61e70249af4bde2cdba2aac6",
        "pollId": "61ba694ac84e9bcd4781ff6c",
        "pollSessionId": "61e701feaf4bde2cdba2aa82",
        "questionId": "61ba7337627b9d9e540b89b0",
        "playerId": "61e701f7afe3313337c9f118",
        "answer": {
            "content": "creator of vue",
            "value": 1
        },
        "createdAt": "2022-01-18T18:09:13.571Z",
        "updatedAt": "2022-01-18T18:09:13.571Z",
        "__v": 0,
        "question": null,
        "id": "61e70249af4bde2cdba2aac6"
    }]
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
