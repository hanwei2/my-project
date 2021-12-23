<template>
    <div class="table">
        <el-table :data="tableData" border style="width: 100%">
            <template v-for="(item, index) in column" :key="index">
                <el-table-column
                    :label="item.title"
                    :prop="item.prop"
                ></el-table-column>
            </template>
            
        </el-table>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import * as t from '@/interfaces/components/table'
export default defineComponent({
    props: {
        tableData: {
            type: Array,
            required: true,
            default: () => ([])
        },
        action: {
            type: Object,
            default: () => ({})
        },
        column: {
            type: Array as PropType<t.Column[]>,
            default: () => ([])
        }
    },
    setup(props) {
        // console.log(props.column.values)
    }
})
</script>
