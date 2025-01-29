<template>
 <div class="flex w-full h-screen justify-center">
    <div class="max-w-2xl flex flex-col gap-4 w-full py-10">
      <h1 class="text-4xl font-semibold">Countries</h1>
      <div class="relative border border-gray-600 rounded-md flex gap-2 items-center p-2 focus:outline-2">
        <input class="w-full h-10 p-2 focus:outline-0" v-model="state.filter" placeholder="Search Country"
          type="search" />
        <Icon name="la:search" class="-rotate-90" size="32" />
      </div>
      <div class="flex flex-col gap-2">
        <CountryCard v-for="country in fetchedCountry" :key="country.name" :country="country" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// const {
//   data: countries,
//   error,
//   pending,
// } = useFetch("https://api.countrylayer.com/v2/all?access_key=ab8e25e9af2558dddda564aaf0e14fa7");
const countries = [{
  "name": "Afghanistan",
  "callingCodes": [
    "93"
  ],
  "capital": "Kabul",
  "region": "Asia",
  "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg"
},
{
  "name": "Åland Islands",
  "callingCodes": [
    "358"
  ],
  "capital": "Mariehamn",
  "region": "Europe",
  "flag": "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg"
},
{
  "name": "Albania",
  "callingCodes": [
    "355"
  ],
  "capital": "Tirana",
  "region": "Europe",
  "flag": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg"
},
{
  "name": "Algeria",
  "callingCodes": [
    "213"
  ],
  "capital": "Algiers",
  "region": "Africa",
  "flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg"
}]
const state = reactive({ countries: countries, filter: "" });

const fetchedCountry = computed(() => {
  return state.countries.filter((country) => {
    return country.name.toLowerCase().includes(state.filter.toLowerCase());
  });
});

</script>

<style>
.container {
  display: flex;
  width: 100%;
}
</style>