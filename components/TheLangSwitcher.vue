<script setup>
import { ref } from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
const langs = ref(["RU", "EN"]);
const lang = ref("RU");
</script>
<template>
  <v-select
    :options="langs"
    :filterable="false"
    :searchable="false"
    v-model="lang"
  >
    <template #open-indicator="{ attributes }">
      <span v-bind="attributes">
        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0360108 1.89185L0.923511 0.987396L5.03601 5.17848L9.14851 0.987396L10.036 1.89185L5.03601 6.9874L0.0360108 1.89185Z"
            fill="white"
          />
        </svg>
      </span>
    </template>
  </v-select>
</template>
<style lang="scss">
.vs__dropdown-toggle {
  padding: 0;
}
.vs__dropdown-option, .vs__selected {
  font-size: 14px;
}

.lang-switcher-arrow.rotate {
  transform: rotate(-90deg);
  transition: transform 0.2s ease;
}

.vs__dropdown-menu {
  padding: 0;
}
.vs--single.vs--open .vs__selected,
.vs--single.vs--loading .vs__selected {
  position: relative;
  opacity: 1;
}
.vs__open-indicator {
  margin-top: -10px;
}
.vs__selected {
  padding: 0;
  margin: 0;
}
.vs--open .vs__open-indicator {
  transform: rotate(-90deg);
}
.vs__search {
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
  padding: 0;
}
.vs__clear {
  display: none;
}
:root {
  --vs-dropdown-option-padding: 3px 4px;
  --vs-dropdown-box-shadow: none;
  --vs-controls-color: #fff;
  --vs-border-color: transparent;

  --vs-dropdown-bg: transparent;
  --vs-dropdown-color: transparent;
  --vs-dropdown-option-color: #fff;

  --vs-selected-bg: transparent;
  --vs-selected-color: #eeeeee;

  --vs-dropdown-option--active-bg: transparent;
  --vs-dropdown-option--active-color: var(--accent-color);
}
</style>