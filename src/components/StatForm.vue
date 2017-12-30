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
    <v-tooltip
      top
    >
      <v-select
        label="Race"
        v-model="userRace"
        :items="races"
        autocomplete
        :disabled="!isTreeSelected"
        slot="activator"
      ></v-select>
      <span>Please select a Tree first!</span>
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
      isTreeSelected: false,
      userClass: '',
      classes: [
        'Beorning',
        'Burglar',
        'Captain',
        'Champion',
        'Guardian',
        'Hunter',
        'Lore-master',
        'Minstrel',
        'Rune-keeper',
        'Warden'
      ],
      userClassTree: '',
      classTrees: [
        'Blue',
        'Red',
        'Yellow'
      ],
      userRace: '',
      races: [
        'Beorning',
        'Dwarf',
        'Elf',
        'High Elf',
        'Hobbit',
        'Man'
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
