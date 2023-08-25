const getGenresHandler = (req, res)=>{
    res.status(200).send("Aquí están los genres")
};

module.exports = getGenresHandler;