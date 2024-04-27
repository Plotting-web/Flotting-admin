export const RESIDENCE_LIST = [
    { title: "서울 북부", value: "r1" },
    { title: "서울 남부", value: "r2" },
    { title: "서울 서부", value: "r3" },
    { title: "서울 동부", value: "r4" },
    { title: "경기 서부", value: "r5" },
    { title: "경기 남부", value: "r6" },
    { title: "경기 동부", value: "r7" },
    { title: "경기 북부", value: "r8" }
];

export const JOB_LIST = [
    { title: "공무원/공기업", value: "j1" },
    { title: "중견기업/대기업", value: "j2" },
    { title: "전문직", value: "j3" },
    { title: "사업가", value: "j4" }
];

export const DEFAULT_SEARCH_PARAMS = {
    gender: null,
    dormancy: "N",
    grade: null,
    form: null,
    residence: null,
    job: null,
    height: [150, 200],
    age: [20, 45],
    smoked: null,
    searchDate: [null, null],
    appliedPath: null,
    education: null,
    isApproved: null,
    managerId: null,
    approvedAt: [new Date(), new Date()]
};

export const APPLIED_PATH_LIST = [
    { title: "프립", value: "a1" },
    { title: "소모임", value: "a2" },
    { title: "더 있나요?", value: "a3" }
];

export const EDUCATION_LIST = [
    { title: "고졸", value: "e1" },
    { title: "대졸", value: "e2" },
    { title: "석사", value: "e3" },
    { title: "박사", value: "e4" }
];

export const IS_APPROVED_LIST = [
    { title: "프로필 등록 안함", value: "NONE" },
    { title: "활성", value: "NORMAL" },
    { title: "승인 반려", value: "REJECT" },
    { title: "승인 대기", value: "INPROGRESS" },
    { title: "휴면", value: "DORMANT" },
    { title: "탈퇴", value: "WITHDRAWAL" },
    { title: "강제탈퇴", value: "FORCED_WITHDRAWAL" }
];

export const MANAGER_ID = [
    { title: "매니저1", value: "m1" },
    { title: "매니저2", value: "m2" }
];

export const USER_SEARCH_RESULT_HEADER_LIST = [
    { title: "실명", key: "name", align: "start", minWidth: "100px", sortable: false },
    { title: "제출일자", key: "submitDate", align: "center", minWidth: "200px", sortable: false },
    { title: "성별", key: "gender", align: "center", minWidth: "100px", sortable: false },
    { title: "키", key: "height", align: "center", minWidth: "100px", sortable: false },
    { title: "학력", key: "education", align: "center", minWidth: "100px", sortable: false },
    { title: "직업", key: "job", align: "center", minWidth: "150px", sortable: false },
    { title: "승인 매니저", key: "manager", align: "center", minWidth: "150px", sortable: false },
    { title: "승인 여부", key: "isApproved", align: "center", minWidth: "150px", sortable: false },
    { title: "승인 일자", key: "approvedAt", align: "center", minWidth: "200px", sortable: false },
    { title: "신청 경로", key: "appliedPath", align: "center", minWidth: "150px", sortable: false },
    { title: "휴면여부", key: "dormancy", align: "center", minWidth: "150px", sortable: false },
    { title: "흡연", key: "smoked", align: "center", minWidth: "100px", sortable: false },
    { title: "거주지", key: "address", align: "center", minWidth: "150px", sortable: false },
    { title: "나이", key: "age", align: "center", minWidth: "100px", sortable: false }
];
