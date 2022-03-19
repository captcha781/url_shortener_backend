const pool = require("../config/db");
const Url = require("../models/model");


exports.getmainurl = async (req, res, next) => {
    try {
        const [main,_] = await Url.geturl(req.params.tiny)
        console.log(main[0]);
        // res.redirect(`${main[0].mainurl}`)
        res.status(200).send(`<script>window.location.replace("${main[0].mainurl}")</script>`);
    } catch (error) {
        console.log(error);
        next(error)
    }
    
}

exports.generatemainurl = (req, res, next) => {
    try {
        const urlmini = Url.shortIT(req.body.url)
        res.status(200).json({ success: true, urlnew: urlmini})
    } catch (error) {
        console.log(error);
        next(error)

    }
}