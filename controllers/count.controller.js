const { default: axios } = require("axios");
const cheerio = require('cheerio');
const urlModel = require("../model/url.model");

exports.postUrl = async (req, res) => {
   
    function counter(text) {
        const words = text.split(" ");
        return words.length;
    }
    const { url } = req.body;

    if (!url) {
        res.status(422).json({
            message: "please enter url"
        });

    }else{
        try {

       
            const response = await axios.get(url)
            const html = response.data;
            const tag = cheerio.load(html)
            const text = tag('body').text();
            const words = counter(text);

            const newData = new urlModel({
                url, words
            })
            res.status(200).json({
                words, url
            })
    
    
        } catch (error) {
            console.error('Error fetching URL:', error);
            res.status(500).json({ error: 'Failed to fetch URL' });
        }
    }

    
}  
