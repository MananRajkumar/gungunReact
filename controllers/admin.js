const Product = require('../models/productModel');
const Orders = require('../models/orderModel');
const Youtube = require('../models/youtubeModel');
const cloudinary = require('cloudinary').v2;


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
        // const images = req.files;
        // const imageLinks = [];
        // for (const [key, value] of Object.entries(images)) {
        //     // console.log(images[key].tempFilePath);
        //     const uploadImage = async () => {
        //         const result = await cloudinary.uploader.upload(images[key].tempFilePath, { folder: "products", });
        //         imageLinks.push({
        //             public_id: result.public_id,
        //             url: result.secure_url,
        //         });
        //         console.log(result);
        //     }
        //     uploadImage();
        // }

        // res.json({
        //     success: true,
        //     // imageLinks: imageLinks
        // });

        const files = req.files;
        const imageLinks = [];

        const uploadPromises = Object.entries(files).map(([key, value]) => {
            return cloudinary.uploader.upload(value.tempFilePath, { folder: "products" });
        });

        const results = await Promise.all(uploadPromises);

        results.forEach((result) => {
            imageLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
            // console.log(result);
        });

        // images.forEach(async (file) => {
        //     const result = await cloudinary.uploader.upload(file.tempFilePath);
        //     imageUrls.push(result.secure_url);
        //   });
        // for(var i = 1; i <= 4; i++){
        //     // const result = await cloudinary.uploader.upload(file.tempFilePath);
        //     const result = await cloudinary.v2.uploader.upload(temp, {upload_preset: "my_preset"}, (error, result)=>{
        //         console.log(result, error);
        //       });
        //     imageUrls.push(result.secure_url);
        // }
        // console.log(photo);
        // res.json({
        //     success: true,
        //     imageUrls: imageUrls
        // });
        const { name, category, price, description1, description2, manufactureYear, edition, numberOfPages, language } = req.body;
        const product = new Product({
            name: name,
            category: category,
            price: price,
            description1: description1,
            description2: description2,
            manufactureYear: manufactureYear,
            images: imageLinks,
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
        const { link, title, category } = req.body;
        const youtube = new Youtube({
            link: link,
            title: title,
            category: category
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