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
        res.status(400).json({
            status: 400,
            message: "please enter url"
        });

    } else {
        try {


            const response = await axios.get(url)
            const html = response.data;
            const tag = cheerio.load(html)
            const text = tag('body').text();
            const words = counter(text);

            const newData = new urlModel({
                url, words
            })

            await newData.save()
            res.status(200).json({
                words, url
            })


        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch the URL' });
        }
    }


}

exports.getPrevious = async (req, res) => {

    try {
        const previous = await urlModel.find();

        res.status(200).json({ previous })
    } catch (error) {
        res.status(401).json({
            message: error
        })
    }

}

exports.deleteUrl = async (req, res) => {
    try {
        const { id } = req.params
        const deleteRes = await urlModel.findByIdAndDelete({ _id: id })
        if (!deleteRes) {
            res.status.json({
                message: "no url found to delete"
            })
        }
        res.status(200).json({
            message: "Delete Successfully"
        })
    } catch (error) {

    }
}