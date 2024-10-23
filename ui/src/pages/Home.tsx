const Home = () => {

    async function onClickGoogleHandler(){
        const response = await fetch("http://localhost:3000/auth/google");
        const result = await response.json();
        console.log(result);
    };

    return(
        <main>
            <button onClick={onClickGoogleHandler}>Login with Google</button>
        </main>
    )
}

export default Home;