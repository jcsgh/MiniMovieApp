

// http://www.omdbapi.com/?i=tt3896198&apikey=d9040479

class App extends React.Component {
    state = {
        baseUrl: 'http://www.omdbapi.com/?',
        apiKey: 'apikey=d9040479',
        query: '&t=',
        movieTitle: '',
        searchURL: ''
    }
    render() {
        return(
            <div>
                <h1>Mini Movie App</h1>

                <form>
                    <label htmlFor="movieTitle">Movie Title</label>
                    <input type="text" id="movieTitle" value={this.state.movieTitle}></input>
                    
                    <input type="submit"></input>

                </form>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))