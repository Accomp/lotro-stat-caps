<template>
  <v-form class="pa-3">
    <v-select
      label="Class"
      v-model="userClass"
      :items="classes"
      autocomplete
    ></v-select>
    <v-tooltip
      top
    >
      <v-select
        label="Tree"
        v-model="userClassTree"
        :items="classTrees"
        autocomplete
        :disabled="!isClassSelected"
        slot="activator"
      ></v-select>
      <span>Please select a Class first!</span>
    </v-tooltip>
    
    <v-checkbox
      label="Include Group Buffs?"
      v-model="checkbox"
      class="pt-3"
    ></v-checkbox>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      isClassSelected: false,
      userClass: '',
      classes: [
        'Beorning',
        'Burglar',
        'Captain',
        'Champion',
        'Guardian',
        'Hunter',
        'Loremaster'
      ],
      userClassTree: '',
      classTrees: [
        'Blue',
        'Red',
        'Yellow'
      ],
      checkbox: false
    }),
    methods: {
      enableTreeSelect: function() {
        this.userClassTree.disabled = false;
      }
    }
  }
</script>
