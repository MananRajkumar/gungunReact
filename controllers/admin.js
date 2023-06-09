const Product = require('../models/productModel');
const Orders = require('../models/orderModel');
const Youtube = require('../models/youtubeModel');


async function getAdminPage(req, res) {
    try {
        const products = await Product.find();
        const orders = await Orders.find();
        const youtube = await Youtube.find();

        res.status(200).json({
            success: true,
            products: products,
            orders: orders,
            youtube: youtube
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            products: products
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getEditProduct(req, res) {
    try {
        res.status(200).json({
            success: true,
            message: "Get Edit Product Called!",
            id: req.params.id
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function editProduct(req, res) {
    try {
        const { id } = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json({
            success: true,
            updateProduct,
            message: "Product edited successfully"
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteProduct(req, res) {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            deletedProduct: deletedProduct
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAddProduct(req, res) {
    try {
        res.status(200).json({
            success: true,
            message: "Get Add Product Called Successfully!"
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function addProduct(req, res) {
    try {
        const { name, category, price, description1, description2, manufactureYear, edition, numberOfPages, language } = req.body;
        const product = new Product({
            name: name,
            category: category,
            price: price,
            description1: description1,
            description2: description2,
            manufactureYear: manufactureYear,
            edition: edition,
            numberOfPages: numberOfPages,
            language: language
        });

        // Product.insertOne(product)
        //     .then((result) => {
        //         console.log(result);
        //         res.status(200).json({
        //             success: true
        //         })
        //     })
        //     .catch((error) => {
        //         console.error('Error inserting product:', error);
        //     });

        Product.create(product).then(createdProduct => {
            console.log('Product created:', createdProduct);
            res.status(200).json({
                success: true,
                message: "Product added successfully"
            })
          })
          .catch(error => {
            console.error('Error creating product:', error);
          });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAddYoutube(req, res) {
    try {
        res.status(200).json({
            success: true,
            message: "getAddYoutube called successfully!"
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function addYoutube(req, res) {
    try {
        const { title, link} = req.body;
        const youtube = new Youtube({
            title: title,
            link: link
        });

        // Youtube.insertOne(youtube)
        //     .then((result) => {
        //         console.log(result);
        //         res.status(200).json({
        //             success: true
        //         })
        //     })
        //     .catch((error) => {
        //         console.error('Error inserting user:', error);
        //     });

        Youtube.create(youtube).then(createdYoutube => {
            // console.log('Youtube created:', createdYoutube);
            res.status(200).json({
                success: true,
                message: "Youtube added successfully"
            })
          })
          .catch(error => {
            console.error('Error creating youtube:', error);
          });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteYoutube(req, res) {
    try {
        const { id } = req.params;

        const deletedYoutube = await Youtube.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Youtube video deleted successfully",
            deletedYoutube: deletedYoutube
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllOrders(req, res) {
    try {
        const orders = await Orders.find();
        res.status(200).json({
            success: true,
            orders: orders
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports =
{
    getAdminPage: getAdminPage,
    getAllProducts: getAllProducts,
    getEditProduct: getEditProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    getAddProduct: getAddProduct,
    addProduct: addProduct,
    getAddYoutube: getAddYoutube, 
    addYoutube: addYoutube, 
    deleteYoutube: deleteYoutube,
    getAllOrders: getAllOrders
}