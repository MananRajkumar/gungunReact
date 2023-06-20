const Orders = require('../models/orderModel');
async function getCheckoutPage(req, res) {
    try {
       res.status(200).json({
        success: true
       });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function checkout(req, res) {
    try {
        res.status(200).json({
            success: true,
            message: "Checked out Successfully"
        })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getDeliveryPage(req, res) {
    try {
        res.status(200).json({
            success: true
           });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function confirmDelivery(req, res) {
    try {
        
        res.status(200).json({
            success: true
        });
          
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getConfirmOrder(req, res) {
    try {
        res.status(200).json({
            success: true
           });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports =
{
    getCheckoutPage: getCheckoutPage,
    checkout: checkout,
    getDeliveryPage: getDeliveryPage,
    confirmDelivery: confirmDelivery,
    getConfirmOrder: getConfirmOrder
}