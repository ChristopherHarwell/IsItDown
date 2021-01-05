const axios = require("axios");
const router = require("express").Router();

const Webpage = (url) => {
    axios
        .get(url)
        .then((response) => {
            console.log(response.data);

    });
};

module.exports = Webpage;