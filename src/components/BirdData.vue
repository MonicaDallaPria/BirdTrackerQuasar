<template>
  <div class="q-pa-md row items-start q-gutter-md size">
    <q-card class="my-card">
      <img :src="birdImage" />

      <q-card-section>
        <div class="text-h6">{{ revealBirdName }}</div>
        <div>
          <q-checkbox
            v-model="birdIsOnWatchList"
            label="add to spot list"
            color="orange"
            @click="addToWatchList"
          ></q-checkbox>
          <q-checkbox
            v-model="birdSpotted"
            label="already spotted"
            color="green"
            @click="addToSpottedArray"
          ></q-checkbox>
        </div>
        <div class="text-subtitle2">{{ revealCountry }}</div>
        <h7>{{ revealExtract }}</h7>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuthUserStore } from 'src/stores/store';


// this is populated before being pushed to the store

const referenceBird = ref([
  { title: '', text: '', image: '', country: '' },
]);

// values being retrieved from store

const store = useAuthUserStore();

const revealBirdName = computed(() => store.birdName);
const revealCountry = computed(() => store.countrySpotted.toUpperCase());
const birdImage = computed(() => store.wikipediaImage);
const revealExtract = computed(() => store.wikipediaText);
const addBird = computed(() => store.birdsSpotted);
const birdOnWatchList = computed(() => store.birdsOnWatchlist);

//create the cards to be viewed

function createBirdCards() {
  for (let i = 0; i < addBird.value.length; i++) {
    referenceBird.value.push(addBird.value[i]);
  }
}

// create the other side of the card
function createAlternateBirdCard() {
  for (let i = 0; i < birdOnWatchList.value.length; i++) {
    referenceBird.value.push(birdOnWatchList.value[i]);
  }
}

// set the bird to the spotted bird array
const birdSpotted = computed(() => store.birdIsAlreadySpotted);

function addToSpottedArray() {
  store.birdsToSpot();
  createBirdCards();
}

// set the bird to the watch bird array

const birdIsOnWatchList = computed(() => store.birdIsOnFutureSpotterList);

function addToWatchList() {
  store.birdsToWatch();
  createAlternateBirdCard();
}

</script>
<style>
.my-card {
  max-width: 250px;
}
</style>
