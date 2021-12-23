<template>
  <div>
    <Table :tableData="tableData" :column="tableColumn"></Table>
  </div>
</template>

<script>
import Table from "@/components/table.vue";
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  name: "Role",
  components: {
    Table,
  },
  setup() {
    const tableData = [
      {
        value: "2016-05-01",
        text: "Tom",
        details: "asd",
      },
      {
        value: "2016-05-02",
        text: "Tom",
        details: "asd",
      },
    ];
    const tableColumn = [
      {
        title: "Header1",
        prop: "text",
      },
      {
        title: "Header2",
        prop: "value",
      },
      {
        title: "Header3",
        prop: "details",
      },
    ];
    return {
      tableData,
      tableColumn,
    };
  },
});
</script>

<style>
</style>