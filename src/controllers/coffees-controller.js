// const { request } = require("express");
const Coffee = require("../model/coffee");


const getAllCoffees = async(req,res,next) => {
    let coffees;
    try {
coffees = await Coffee.find();
    } catch (err) {
        console.log(err);
    }

    if(!coffees) {
        return res.status(404).json({message: "No Coffee Found"})
    }
    return res.status(200).json({ coffees });
}

const getById = async(req,res,next) => {
    const id = req.params.id
    let coffee;
    try {
        coffee = await Coffee.findById(id);
    }catch (err) {
        console.log(err);
    }
    if(!coffee) {
        return res.status(404).json({message: "No Coffee Found"})
    }
    return res.status(200).json({ coffee });
};

const addCoffee = async (req,res,next) => {
    const {name, brand, country, espresso_gs, output, time, tds, percent, image} = req.body;
    let coffee;
    try {
        coffee = new Coffee({
            name,
            brand,
            country,
            espresso_gs,
            output,
            time,
            tds,
            percent,
            image
        });
        await coffee.save();
    }catch (err){
        console.log(err);
    }

    if(!coffee) {
        return res.status(500).json({message:'Unable To Add'})
    }
    return res.status(201).json({ coffee });
};

const updateCoffee = async (req, res, next) => {
    const id = req.params.id;
    const {name, brand, country, espresso_gs, output, time, tds, percent, image} = req.body;
    let coffee;
    try {
        coffee = await Coffee.findByIdAndUpdate(id, {
            name,
            brand,
            country,
            espresso_gs,
            output,
            time,
            tds,
            percent,
            image
        },{ new: true });
        
    } catch (err) {
        console.log(err);
    }
    if (!coffee) {
        return res.status(404).json({message:'Unable To Update By this ID'});
    }
    
    return res.status(200).json({ coffee });
    
};

const deleteCoffee = async (req, res, next) => {
    const id = req.params.id;
    let coffee;
    try {
        coffee = await Coffee.findByIdAndRemove(id)
    } catch (err) {
        console.log(err);
    }
    if(!coffee) {
        return res.status(404).json({ message:'Unable To Delete By this ID'});
    }
    return res.status(200).json({ coffee });
};


exports.getAllCoffees = getAllCoffees;
exports.addCoffee = addCoffee;
exports.getById = getById;
exports.updateCoffee = updateCoffee;
exports.deleteCoffee = deleteCoffee;
