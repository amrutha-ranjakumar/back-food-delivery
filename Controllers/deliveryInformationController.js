
const jwt = require('jsonwebtoken');
const deliveryinformations = require('../models/deliveryinformationSchema');


exports.addDeliveryInformation = async (req, res) => {
    console.log("deliveryinforamationController:deliveryinforamationController");
    const {FirstName, LastName,Email,Street, City,State,ZipCode,Country,Phone } = req.body;
    console.log(FirstName);
    console.log(LastName);
    console.log(Email);
    console.log(Street);
    console.log(City);
    console.log(State);
    console.log(ZipCode);
    console.log(Country);
    console.log(Phone);
    
    try {
        const existingDeliveryinformation = await deliveryinformations.findOne({ FirstName: FirstName});
        console.log("existingDeliveryinformation");
        console.log(existingDeliveryinformation)


        if (existingDeliveryinformation) {

            res.status(406).json('existingDeliveryinformation already exit ')
        }
        else {
            const newDeliveryinformation = new deliveryinformations({
                FirstName: FirstName,
                LastName:  LastName,
                Email: Email,
                Street:Street,
                City:City,
                State:State,
                ZipCode:ZipCode,
                Country:Country,
                Phone:Phone

            })
            await newDeliveryinformation.save()
            res.status(200).json("Deliveryinformation request received successfully")

        }


    } catch (err) {
        req.status(401).json('Deliveryinformation request failed due to ', err)
    }

}


