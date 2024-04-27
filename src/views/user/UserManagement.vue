<script setup>
import UserSearchParameterCard from "@/components/card/UserSearchParameterCard.vue";
import { USER_MANAGEMENT_MOCK } from "@/mocks/userManagement.mock";
import UserManagementList from "@/views/user/list/UserManagementList.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const breadcrumbs = ref([
    {
        title: "고객"
    },
    {
        title: "고객 정보 검색",
        disabled: false
    }
]);
const loading = ref(false);
const list = ref(USER_MANAGEMENT_MOCK);

function search(param) {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
}

const onClickRow = (idx, isApproved) => {
    if (isApproved === "INPROGRESS") router.push(`/reg/second/${idx}`);
    else router.push(`/mng/user/${idx}`);
};
</script>

<template>
    <div>
        <v-breadcrumbs :items="breadcrumbs">
            <template #title="{ item }">
                {{ item.title.toUpperCase() }}
            </template>
        </v-breadcrumbs>
        <v-row>
            <v-col cols="12" sm="12" order="2" order-sm="1">
                <user-search-parameter-card @search="search" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" order="2" order-sm="1">
                <user-management-list :loading="loading" :list="list" @click-row="onClickRow" />
            </v-col>
        </v-row>
    </div>
</template>

<style scoped></style>
