export const islogin = () => {
    if (document.cookie== "username=admin") return true;
    return false;

}