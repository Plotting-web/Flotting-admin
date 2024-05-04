<script setup>
import { ref } from "vue";
import dayjs from "dayjs";
import { MOCK_PAYMENT_MANAGEMENT } from "@/mocks/paymentManagement.mock";
import { PAYMENT_MANAGEMENT_HEADER_LIST, IS_DEPOSIT_LIST } from "@/constant/paymentManagement.constant";
import { formatNumberToCurrency } from "@/util/number";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";

const noteDialog = ref(false);
const currentNote = ref("");
const onClickNoteBtn = note => {
    currentNote.value = note;
    noteDialog.value = true;
};
const onUpdateNoteDialog = () => {
    currentNote.value = "";
    noteDialog.value = false;
};

const paymentManagerRes = ref(MOCK_PAYMENT_MANAGEMENT);
const HEADER_LIST = ref(PAYMENT_MANAGEMENT_HEADER_LIST);

const userName = ref("");
const isDeposit = ref(false);
const isDeposits = ref(IS_DEPOSIT_LIST);

const depositRange = ref({
    start: dayjs()
        .subtract(7, "day")
        .toDate(),
    end: new Date()
});
const depositDateModal = ref(false);

const confirmDeposit = () => {
    if (window.confirm("입금 확인을 하시겠습니까?")) {
        isDeposit.value = true;
    }
};
const reset = () => {
    userName.value = "";
    isDeposit.value = false;
    depositRange.value = {
        start: dayjs()
            .subtract(7, "day")
            .toDate(),
        end: new Date()
    };
};
</script>

<template>
    <v-card-item>
        <v-row>
            <v-col class="d-flex align-center">
                <v-cardTitle class="text-md-h6 ">
                    결제 관리
                </v-cardTitle>
            </v-col>
            <v-col class="d-flex justify-end">
                <v-btn size="small" class="ma-1" @click="reset()">초기화</v-btn>
            </v-col>
        </v-row>
    </v-card-item>
    <v-container>
        <v-row class="d-flex align-center">
            <v-col class="d-flex align-center">
                <v-label class="mr-3 ">입금 일자</v-label>
                <v-sheet>
                    <v-menu v-model="depositDateModal" :close-on-content-click="false" location="bottom">
                        <template #activator="{ props }">
                            <v-btn v-bind="props" width="100%" height="48px">{{
                                `입금 일자 ${dayjs(depositRange.start).format("YYYY.MM.DD")}
                                        ~ ${dayjs(depositRange.end).format("YYYY.MM.DD")}`
                            }}</v-btn>
                        </template>
                        <v-card min-width="300">
                            <v-card-title>입금 일자</v-card-title>
                            <v-card-text>
                                <DatePicker v-model.range="depositRange" mode="dateTime" :hide-time-header="true" />
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn variant="text" @click="modalApprovedAt = false">
                                    확인
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu>
                </v-sheet>
            </v-col>
            <v-col class="d-flex align-center">
                <v-label class="mr-3">입금 여부</v-label>
                <v-btn-toggle v-model="isDeposit" variant="outlined" divided multiple>
                    <v-btn icon="mdi-circle-outline" value="true"></v-btn>
                    <v-btn icon="mdi-close-thick" value="false"></v-btn>
                </v-btn-toggle>
            </v-col>
            <v-col class="d-flex align-center">
                <v-label class="mr-3">고객명</v-label>
                <v-text-field v-model="userName" />
            </v-col>
        </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-cardText>
        <v-data-table
            :loading="loading"
            :headers="HEADER_LIST"
            :items="paymentManagerRes"
            :items-per-page="5"
            :items-per-page-options="[
                { value: 5, title: '5' },
                { value: 10, title: '10' },
                { value: 20, title: '20' }
            ]"
            :hover="true"
        >
            <template #item="{ item }">
                <tr class="cursor-pointer">
                    <td class="text-start">{{ item.name }}</td>
                    <td class="text-center">{{ dayjs(item.submitDate).format("YY년 M월 D일 H시 mm분") }}</td>
                    <td class="text-center">{{ item.phoneNumber }}</td>
                    <td class="text-center">{{ item.productName }}</td>
                    <td class="text-center">{{ formatNumberToCurrency(item.productPrice) }}</td>
                    <td class="text-center">{{ item.isDeposit ? "O" : "X" }}</td>
                    <td class="text-center">{{ `${item.elapsedTime}시간` }}</td>
                    <td class="text-center">
                        {{ item.note }}
                        <v-icon @click="onClickNoteBtn(item.note)">mdi-pencil</v-icon>
                    </td>
                    <td class="text-center">
                        <v-btn v-if="!item.isDeposit" color="primary" small @click="confirmDeposit">입금 확인</v-btn>
                    </td>
                </tr>
            </template>
        </v-data-table>
    </v-cardText>
    <v-dialog v-model="noteDialog" width="auto" min-width="800">
        <v-card class="text-center text-sm-start w-100" fluid>
            <v-card-title class="text-md-h6">비고 수정</v-card-title>
            <v-divider />
            <v-card-text>
                <v-row>
                    <v-col style="display: flex;flex-direction: column;" cols="12" sm="12">
                        <v-text-field v-model="currentNote" />
                        <v-btn color="primary" @click="onUpdateNoteDialog">완료</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<style></style>
