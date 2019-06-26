import axios from "axios";

export default {
    getBooks: function (q) {
    // Gets books from the Google API
    // PostMan test: http://localhost:3000//api/google?q=quilting
        return axios.get("api/google", { params: { q: "title:" + q } });
    },
    // Gets all saved books
    // This PostMan test worked: http://localhost:3000//api/books with no body variables
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    // Deletes the saved book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
}