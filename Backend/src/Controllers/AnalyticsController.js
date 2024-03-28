
const landing = async(req, res) => { 
    res.status(200).json({
        res: "Welcon to the analytics page"
    });
}


module.exports = { 
    landing
}