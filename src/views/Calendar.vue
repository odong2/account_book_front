<template>
  <v-row>
    <v-col
      sm="4"
      cols="12"
      class="text-sm-left text-center"
    />
    <v-col
      sm="4"
      cols="12"
      class="text-center"
    />
    <v-col
      sm="4"
      cols="12"
      class="text-sm-right text-center"
    >
      <v-btn @click="$refs.calendar.prev()">
        <v-icon
          dark
          center
        />
        ◀
      </v-btn>
      <v-btn @click="$refs.calendar.next()">
        <v-icon
          center
          dark
        />
        ▶
      </v-btn>
    </v-col>
    <v-col
      cols="12"
      class="mb-3"
    >
      <v-sheet height="500">
        <v-calendar
          ref="calendar"
          v-model="start"
          :type="type"
          :end="end"
          color="primary"
          locale="ko"
        />
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    type: 'month',
    start: '2019-01-01',
    end: '2019-01-06',
    typeOptions: [
      { text: 'Day', value: 'day' },
      { text: '4 Day', value: '4day' },
      { text: 'Week', value: 'week' },
      { text: 'Month', value: 'month' },
      { text: 'Custom Daily', value: 'custom-daily' },
      { text: 'Custom Weekly', value: 'custom-weekly' }
    ]
  })
};
</script>

<style>

</style>