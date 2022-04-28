function NotFound() {
    console.log("Not Found");
    return (
        <>
            <h1>404 Not found</h1>
            <h1>Oops! We couldn't find the thing you're asking for. Sorry about that!</h1>
            <h1>Maybe try one of these instead?</h1>
            <ul>
                <li><a href="/">Find a movie</a></li>
                <li><a href="/login">Log in</a></li>
                <li><a href="/account">Register</a></li>
            </ul>
        </>
    );
}

export default NotFound;