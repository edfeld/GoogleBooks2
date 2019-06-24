import React, { Component } from "react";
import NavBar from "../components/NavBar"
import API from "../utils/API";

// function Jumbotron({ children }) {
//     return <div className="jumbotron mt-4">{children}</div>;
//   }

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            books: [],
            q: "",
            message: "Search for books to begin"

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getBooks(q) {
        alert("getBooks called with param: " + q);
        API.getBooks(q).then( googBooks => 
        this.setState({ books: googBooks.data }))
        .catch(
            this.setState({
                books: [],
                message: "No Books Found, Try a different query."
            })
            
        );
        // Here I am.  2019/06/22

    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    handleSubmit(event) {
        // alert("A Book Name was submitted: " + this.state.value);
        this.getBooks(this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <NavBar />
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">(React) Google Books Search</h1>
                        <p className="lead"><strong>Search for and Save Books of interest</strong></p>
                        {/* <hr className="my-2"></hr> */}
                        {/* <p>More info</p> */}
                        {/* <p className="lead">
                            <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                        </p> */}
                    </div>
                </div>
                <div className="search-div bg-light my-5 p-4">
                    <p className="text-left">Book Search</p>
                    {/* <form onSubmit={this.handleSubmit}>
                        <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form> */}
                <form onSubmit={this.handleSubmit}>
                    <label className="book-input">
                        <input className="book-input" type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <div className="text-right mt-2">
                         <input className="btn btn-primary btn-sm" type="submit"  value="Submit" /> {/*className="btn btn-primary btn-sm"*/}
                    </div>
                    </form>
                </div>
                <div className="book-results bg-light my-5 p-4 text-left">
                    <h3>results</h3>
                    {this.state.books.map( book => (
                        <div key={book.id}>{book.volumeInfo.title}</div>
                    ))}
                </div>
            </div>
        )
    }
}


  export default Home;