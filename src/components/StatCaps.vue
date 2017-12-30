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
  name: 'StatCaps',
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
          t1: 12000,
          t2: 17000
        },
        {
          value: false,
          name: 'Mitigation',
          t1: 550,
          t2: 640
        },
        {
          value: false,
          name: 'Parry',
          t1: 1100,
          t2: 1499
        },
      ]
    };
  },
};
</script>
