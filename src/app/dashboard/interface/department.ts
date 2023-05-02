export class Department {
    deptId: number;
    departmentName: String;

    constructor(deptId: number,
        departmentName: String) {
        this.deptId = deptId ?? 0;
        this.departmentName = departmentName ?? '';
    }
}
