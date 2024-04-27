<script setup>
import { USER_SEARCH_RESULT_HEADER_LIST } from "@/constant/userManagement.constant";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const emit = defineEmits(["clickRow"]);

defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    list: {
        type: Array,
        default: () => []
    }
});

const headers = ref(USER_SEARCH_RESULT_HEADER_LIST);
const clickItem = idx => emit("clickRow", idx);
</script>

<template>
    <v-card class="text-center text-sm-start w-100" fluid>
        <v-card-item>
            <v-row>
                <v-col class="d-flex align-center">
                    <v-cardTitle class="text-md-h6 ">
                        조회 결과
                    </v-cardTitle>
                </v-col>
            </v-row>
        </v-card-item>
        <v-divider></v-divider>
        <v-cardText>
            <v-data-table
                :loading="loading"
                :headers="headers"
                :items="list"
                :items-per-page="5"
                :items-per-page-options="[
                    { value: 5, title: '5' },
                    { value: 10, title: '10' },
                    { value: 20, title: '20' }
                ]"
                :hover="true"
            >
                <template #item="{ item }">
                    <tr class="cursor-pointer" @click="() => clickItem(item.idx)">
                        <td class="text-start">{{ item.name }}</td>
                        <td class="text-center">{{ item.submitDate }}</td>
                        <td class="text-center">{{ item.gender }}</td>
                        <td class="text-center">{{ item.height }}</td>
                        <td class="text-center">{{ item.education }}</td>
                        <td class="text-center">{{ item.job }}</td>
                        <td class="text-center">{{ item.managerId }}</td>
                        <td class="text-center">{{ item.isApproved }}</td>
                        <td class="text-center">{{ item.approvedAt }}</td>
                        <td class="text-center">{{ item.appliedPath }}</td>
                        <td class="text-center">{{ item.dormancy }}</td>
                        <td class="text-center">{{ item.smoked }}</td>
                        <td class="text-center">{{ item.address }}</td>
                        <td class="text-center">{{ item.age }}</td>
                    </tr>
                </template>
            </v-data-table>
        </v-cardText>
    </v-card>
</template>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>
