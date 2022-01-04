type ElFormValidator = (rule: any, value: any, callback: any) => void;
interface ElFormRule {
    required: boolean;
    trigger: string;
    validator: ElFormValidator;
}
export interface LoginForm {
    account: string;
    password: string;
    rememberLogin?: boolean
}

export interface LoginRules {
    account: ElFormRule[];
    password: ElFormRule[];
}