<script setup>
import UserProfileTable from "@/components/table/UserProfileTable.vue";
import { useStore } from "vuex";
import UserProfilePhoto from "./UserProfilePhoto.vue";

const store = useStore();

defineProps({
    isEdit: {
        type: Boolean,
        default: false
    }
});

function stop() {
    if (!confirm("정말로 정지하시겠습니까?")) {
        return;
    }
    alert("정지 API");
}
</script>

<template>
    <v-card class="text-center text-sm-start w-100" fluid>
        <v-col>
            <v-card-item>
                <v-row>
                    <v-col class="d-flex align-center">
                        <v-card-title class="text-md-h6 ">{{ store.getters.getProfile("name") }}</v-card-title>
                    </v-col>
                    <v-col v-if="isEdit" class="d-flex justify-end">
                        <v-btn size="small" class="ma-1" color="red" @click="stop">정지</v-btn>
                    </v-col>
                </v-row>
            </v-card-item>
        </v-col>
        <v-col>
            <v-row>
                <v-col>
                    <user-profile-table :is-edit="isEdit" />
                    <UserProfilePhoto />
                </v-col>
            </v-row>
        </v-col>
    </v-card>
</template>

<style scoped></style>
