import axios from "axios";
export function test() {
    const result = axios.get("https://www.junebabee.com/get_chat");
    result.then(res => {
        console.log(res);
    })
}