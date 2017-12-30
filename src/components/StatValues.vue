<template>
  <v-data-table
    v-bind:headers="headers"
    :items="stats"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.t1 }}</td>
      <td class="text-xs-right">{{ props.item.t2 }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'StatValues',
  data() {
    return {
      headers: [
        {
          text: 'Stats',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'T1',
          sortable: false,
          value: 't1'
        },
        {
          text: 'T2',
          sortable: false,
          value: 't2'
        }
      ],
      stats: [
        {
          value: false,
          name: 'Armour',
          t1: 70080,
          t2: 77840
        },
        {
          value: false,
          name: 'Mitigation',
          t1: 222750,
          t2: 222750
        },
        {
          value: false,
          name: 'Parry',
          t1: 64000,
          t2: 68600
        },
      ]
    };
  },
};
</script>
