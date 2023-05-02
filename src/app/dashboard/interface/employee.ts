
export class Employee {
    empId:number;
    empName:string;
    password:string;
    role: {
        roleid: number,
        roleName: string,
        hibernateLazyInitializer: {}
    };
    department!: {
        deptId: number;
        departmentName: string;
        hibernateLazyInitializer: {};
    };
    constructor( empId:number,
        empName:string,
        password:string,
        role: {
            roleid: number,
            roleName: string,
            hibernateLazyInitializer: {}
        },
        department: {
            deptId: number;
            departmentName: string;
            hibernateLazyInitializer: {};
        },

       ){
          this.empId=empId ?? 0;
          this.empName=empName ?? '';
          this.password=password ?? '';
          this.role=role ?? {};
          this.department=department ?? {};  
        }

}
