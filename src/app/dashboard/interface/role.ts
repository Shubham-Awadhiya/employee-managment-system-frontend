export class Role {
    roleid: number;
    roleName: String;

    constructor(roleid: number,
        roleName: String) {
        this.roleid = roleid ?? 0;
        this.roleName = roleName ?? '';
    }

}
