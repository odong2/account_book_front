<template>
  <v-container
    fluid
  >
    <v-card class="pa-3">
      <v-row no-gutters>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <!-- row -->
    <v-card class="pa-3">
      <v-row dense>
        <v-col>
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <!-- row -->
    <v-card class="mt-5 pa-3">
      <v-row
        :style="{ height: '120px'}"
        class="red"
        align="start"
      >
        <v-col>
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <!-- row -->
    <v-card class="mt-5 pa-3">
      <v-row
        :style="{ height: '120px'}"
        class="yellow"
        align="start"
      >
        <v-col
          align-self="end"
        >
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
        <v-col
          align-self="center"
        >
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            oulined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <!-- row -->
    <v-card class="mt-5 pa-3">
      <v-row justify="center">
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col  
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col  
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col  
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>