import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    // get books by searching query string with google books api
    getGoogleBooks: function (query) {
        return axios.get(BASEURL + query);
    },
    getOneBook: function (id) {
        return axios.get("api/books" + id);
    },
    // save book to db
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },
    // view all saved books
    viewSavedBooks: function () {
        return axios.get("api/books");
    },
    // delete from saved books
    deleteBook: function (id) {
        return axios.delete("api/books" + id);
    }
}