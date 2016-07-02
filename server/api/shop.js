module.exports = function(app, api) {

    const auth = require('./auth.js')(app)
    const Shop = require('../models/shop.js')

    /**
    *   {}
    *
    *   returns
    **/
    api.get('/shops', function(req, res) {
        Shop.find({}, function(err, shops) {
            res.json(shops)
        })
    })

    /**
    *   {query.token} Token used for auth checking
    *
    *   Returns an array of your shops
    *   returns {shops}: Array of shops
    **/
    api.get('/my/shops', auth.protectedRoute, function(req, res) {
        var token = req.token

        Shop.find({
            createdBy: token.username
        }, function(err, shops) {
            if(err) {
                throw err
            }
            else {
                if(shops.length === 0) {
                    res.json({
                        success: true,
                        message: 'No shops',
                        shops: []
                    })
                }
                else {
                    res.json({
                        success: true,
                        message: 'Shops found',
                        shops: shops
                    })
                }
            }
        })
    })

    /**
    *   {query.shopName} shop title used in database retrieval
    *
    *   Returns every detail about the shop
    *   returns {shop} from database
    **/
    api.get('/shop/:shopName', function(req, res) {
        var shopName = req.query.shopName

        if(!shopName) {
            res.json({
                success: false,
                message: 'shop name not specified'
            })
        }
        else {
            Shop.findOne({
                name: shopName
            }, function(err, shop) {
                if(err) {
                    throw err
                }
                else if(!shop) {
                    res.json({
                        success: false,
                        message: 'Shop not found'
                    })
                }
                else {
                    res.json({
                        success: true,
                        message: 'Shop found',
                        shop: shop
                    })
                }
            })
        }
    })

    /**
    *   {query.token} Token used for auth checking
    *   {body.shopName} Shop Title
    *   {body.shopDescription} Shop Description
    *
    *   Creates a new shop if you are logged in
    *   returns {success message}
    **/
    api.post('/shop', auth.protectedRoute, function(req, res) {
        var token = req.token
        var shopTitle = req.body.shopName || ''
        var shopDescription = req.body.shopDescription || ''

        if(!shopName || !shopDescription) {
            res.json({
                success: false,
                message: 'fields not valid'
            })
        }
        else {
            Shop.findOne({
                'createdBy': token.username,
                'name': shopName
            }, function(err, shop) {
                if(err) {
                    throw err
                }
                else if(shop) {
                    res.json({
                        success: false,
                        message: 'Shop name already exists'
                    })
                }
                else {
                    var shop = new Shop({
                        name: shopName,
                        createdBy: token.username,
                        dateCreated: new Date(),
                        description: shopDescription
                    })

                    shop.save(function(err) {
                        if(err) {
                            throw err
                        }
                        else {
                            res.json({
                                success: true,
                                message: 'Shop created'
                            })
                        }
                    })
                }
            })
        }
    })
}
