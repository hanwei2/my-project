interface LoginForm {
    username: string;
    password: string;
}

interface LoginRules {
    username: ElFormRule[];
    password: ElFormRule[];
}