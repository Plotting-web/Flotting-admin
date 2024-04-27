<script setup>
import { USER_PAY_HISTORY_MOCK } from "@/mocks/userPayHistory.mock";
import { formatNumberToCurrency } from "@/util/number";
import { ref } from "vue";

const dialog = ref(false);
const userPayHistoryRes = ref(USER_PAY_HISTORY_MOCK);
const getUserPayHistoryResult = userPayHistory => {
    const result = userPayHistory.reduce(
        (acc, cur) => {
            acc.depositAmount += cur.depositAmount;
            acc.matchingChangeCnt += cur.matchingChangeCnt;
            return acc;
        },
        { depositAmount: 0, matchingChangeCnt: 0 }
    );
    return result;
};
const userPayHistoryResult = getUserPayHistoryResult(userPayHistoryRes.value);

const clickAddBtn = () => (dialog.value = true);
</script>

<template>
    <v-card class="text-center text-sm-start w-100" fluid>
        <v-card-item>
            <v-row>
                <v-col class="d-flex align-center">
                    <v-cardTitle class="text-md-h6 ">
                        결제 이력
                    </v-cardTitle>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn color="primary" @click="clickAddBtn">추가</v-btn>
                </v-col>
            </v-row>
        </v-card-item>
        <v-container class="pt-0" fluid>
            <v-table density="compact">
                <thead>
                    <tr>
                        <th class="text-center w-20">
                            입금 일자
                        </th>
                        <th class="text-center w-30">
                            입출금 금액
                        </th>
                        <th class="text-center w-10">
                            매칭권 증감
                        </th>
                        <th class="text-center w-40">
                            비고
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="history in userPayHistoryRes" :key="history.id">
                        <td class="text-center">{{ history.depositDate }}</td>
                        <td class="text-center">{{ formatNumberToCurrency(history.depositAmount) }}</td>
                        <td class="text-center">{{ history.matchingChangeCnt }}</td>
                        <td class="text-center">{{ history.note }}</td>
                    </tr>

                    <tr style="height: 50px">
                        <!-- Result -->
                        <td class="text-center table-result-txt">총계</td>
                        <td class="text-center table-result-txt">{{ formatNumberToCurrency(userPayHistoryResult.depositAmount) }}</td>
                        <td class="text-center table-result-txt">{{ userPayHistoryResult.matchingChangeCnt }}</td>
                    </tr>
                </tbody>
            </v-table>
            <v-dialog v-model="dialog" width="700">
                <v-card class="text-center" fluid style="padding:20px">
                    <v-row>
                        <v-col>
                            <v-card-title class="text-md-h6">
                                결제 이력 추가
                            </v-card-title>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="입금 일자" />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="입출금 금액" />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="매칭권 증감" />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="비고" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex justify-center">
                            <v-btn color="primary">추가하기</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>
        </v-container>
    </v-card>
</template>

<style scoped>
.table-result-txt {
    font-size: 18px;
    font-weight: 700;
}</style
>import { is } from "core-js/core/object";
