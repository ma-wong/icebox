
// dependencies
const db = require("../models");
const { Op } = require("sequelize");

// routes
module.exports = function(app) {
    // Find all shoes and return them to the user with res.json
    app.get("/api/shoes", function(req, res) {
      db.Shoe.findAll({}).then(function(dbShoe) {
        res.json(dbShoe);
      });
    });

    // finding one shoes with a specific name
    app.get("/api/shoes/name/:name", function(req, res) {
        db.Shoe.findOne({
            where: {
                name: req.params.name
            }
        }).then(function(dbShoe) {
            console.log(dbShoe);
            res.json(dbShoe);
        });
    });

    // finding all shoes belonging to a specific category
    app.post("/api/shoes", function(req, res) {
        let whereProps = {};

        // where brands matches filters
        if (req.body.brands) {
            whereProps.brand = {
                [Op.or]: req.body.brands
            }
        }

        // where collaborators matches filters
        if (req.body.collabs) {
            whereProps.collaborators = {
                [Op.or]: req.body.collabs
            }
        }

        // where colors matches filters
        if (req.body.colors) {
            whereProps.color = {
                [Op.or]: req.body.colors
            }
        }

        // where geder matches filters
        if (req.body.gender) {
            whereProps.sizing_gender = {
                [Op.or]: req.body.gender
            }
        }

        // where styles matches filters
        if (req.body.styles) {
            whereProps.style = {
                [Op.or]: req.body.styles
            }
        }

        // where max price matches filters
        if (req.body.max_price) {
            whereProps.price_max = {
                [Op.lte]: req.body.max_price
            }
        }

        // where release date matches filters
        if (req.body.years) {
            whereProps.release_date = {
                [Op.regexp]: req.body.years.join("|")
            }
        }

        // where US size matches filters
        if (req.body.us_size) {
            whereProps.min_size = {
                [Op.lte]: req.body.us_size
            },
            whereProps.max_size = {
                [Op.gte]: req.body.us_size
            },
            whereProps.sizing_type = "US"
        }

        // where EU size matches filters
        if (req.body.eu_size) {
            whereProps.min_size = {
                [Op.lte]: req.body.eu_size
            },
            whereProps.max_size = {
                [Op.gte]: req.body.eu_size
            },
            whereProps.sizing_type = "EU"
        }

        // where UK size matches filters
        if (req.body.uk_size) {
            whereProps.min_size = {
                [Op.lte]: req.body.uk_size
            },
            whereProps.max_size = {
                [Op.gte]: req.body.uk_size
            },
            whereProps.sizing_type = "UK"
        }

        
        db.Shoe.findAll({
            where: whereProps
        }).then(function(dbShoe) {
            console.log(dbShoe);
            res.json(dbShoe);
        });
    });

    // FINDING ONE SHOE THAT MATCHES PARAMS
    // finding one shoe with a specific id
    app.get("/api/shoes/:id", function(req, res) {
        db.Shoe.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbShoe) {
            res.json(dbShoe);
        });
    });

  
};