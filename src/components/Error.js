import { useRouteError } from "react-router"
const Error = () => {
    const err = useRouteError();
    return (
        <div><h1>oops something wen wrong {err.status} {err.statusText}</h1></div>
    )
}

export default Error;