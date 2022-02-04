


class App extends React.Component {
    state = {
        baseUrl: '',
        apiKey: '',
        query: '',
        movieTitle: '',
        searchURL: ''
    }
    render() {
        return(
            <div>
                <h1>Mini Movie App</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))