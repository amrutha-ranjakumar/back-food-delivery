const menus = require("../models/menuSchema");


//add project
exports.menu = async (req, res) => {
    console.log(" inside dishesmenuControll");
    const userId = req.payload;
    console.log(userId);
    const  menuimage = req.file.filename;
    console.log( menuimage);
   
    const { menu } = req.body;
    try {
        const existingdishmenu = await menus.findOne({ menu: menu});
        if (existingdishmenu) {
            res.status(406).json('dishmenu already exist ,upload a new one')
        }
        else {
            const newmenu = new menus({
                menuimage: menuimage,
                menu:menu,
              
                userId: userId
            })
            await newmenu.save();
            res.status(200).json("dishmenu added successfully")
        }

    } catch (err) {
        res.status(401).json("unable to add dishmenu due to:", err)
    }
}

exports.getAllmenus = async (req, res) => {
    // //getting value frome Query parameter
    // //syntax:req.Query.Keyname
    // const searchKey = req.query.search;
    // console.log(searchKey);
    // const Query = {
    //     language: {
    //         //regular expression
    //         //i= to remove case sensitivity
    //         $regex: searchKey, $options: "i"
    //     }
    // }
    try {
        const allmenus = await menus.find();
        res.status(200).json(allmenus)

    } catch (err) {
        res.status(401).json("request failed due to ", err)
    }
}