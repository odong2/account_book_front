<template>
  <v-dialog
    v-model="dialog"
    max-width="600px"
    persistent
  >
    <v-card>
      <v-card-title>
        <h3>일정 추가</h3>
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          class="px-3"
        >
          <v-text-field
            v-model="calendar.title"
            label="일정"
            prepend-icon="mdi-folder-marker"
            :rules="inputRules"
          />
          <v-textarea
            v-model="calendar.content"
            label="상세설명"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          />
          <v-row>
            <v-col
              cols="6"
              class="pb-0"
            >
              <v-menu>
                <template #activator="{on}">
                  <v-text-field
                    slot="activator"
                    label="시작일"
                    readonly
                    prepend-icon="mdi-calendar-month"
                    :value="calendar.startDate"
                    class=""
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="calendar.startDate" />
              </v-menu>
            </v-col>
            <v-col
              cols="6"
              class="pb-0"
            >
              <v-menu
                v-model="startTimer"
                :close-on-content-click="false"
                offset-y
              >
                <template #activator="{ on }">
                  <v-text-field
                    label="시작 시간"
                    readonly
                    :value="calendar.startTime"
                    prepend-icon="mdi-timer"
                    v-on="on"
                  />
                </template>
                <v-time-picker
                  v-if="startTimer"
                  v-model="calendar.startTime"
                >
                  <v-btn
                    class="mx-auto"
                    @click="selectTime"
                  >
                    선택
                  </v-btn>
                </v-time-picker>
              </v-menu>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="6"
              class="pt-0"
            >
              <v-menu>
                <template #activator="{on}">
                  <v-text-field
                    slot="activator"
                    label="종료일"
                    readonly
                    prepend-icon="mdi-calendar-month"
                    :value="calendar.endDate"
                    class=""
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="calendar.endDate"
                  :allowed-dates="allowedDates"
                />
              </v-menu>
            </v-col>
            <v-col
              cols="6"
              class="pt-0"
            >
              <v-menu
                v-model="endTimer"
                :close-on-content-click="false"
                offset-y
              >
                <template #activator="{ on }">
                  <v-text-field
                    label="종료 시간"
                    readonly
                    :value="calendar.endTime"
                    prepend-icon="mdi-timer"
                    v-on="on"
                  />
                </template>
                <v-time-picker
                  v-if="endTimer"
                  v-model="calendar.endTime"
                >
                  <v-btn
                    class="mx-auto"
                    @click="selectTime"
                  >
                    선택
                  </v-btn>
                </v-time-picker>
              </v-menu>
            </v-col>
          </v-row>

          <div class="text-center">
            <v-btn
              text
              class="primary white--text mx-2 mt-3"
              @click="submit"
            >
              추가
            </v-btn>
            <v-btn
              text
              class="primary white--text mx-2 mt-3"
              @click="close"
            >
              닫기
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      startTimer: false,
      endTimer: false,
    };
  },
  computed: {
    dialog() {
      return this.$store.state.calendar.dialog;
    },
    calendar() {
      return this.$store.state.calendar.calendar;
    },
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('REQUEST_ADD_EVENT',this.calendar);
      }
    },
    close() {
      this.$store.commit('CLOSE_CALENDAR_DIALOG');
    },
    selectTime() {
      this.endTimer = false;
      this.startTimer = false;
    },
    allowedDates(val) {
      let endDate = val.split('-').reduce((a, b) => a + b);
      let startDate = this.calendar.startDate.split('-').reduce((a, b) => a + b);
      return endDate >= startDate;
    }
  },

};
</script>