$(document).ready(function() {

    $("#logo").on("click", function (){
        window.location.href="/";
    })
    
    let searchedShoe = localStorage.getItem("searched-shoe");
    
    if (searchedShoe) {
        let searchName = searchedShoe.trim();

        $.ajax({
            method: "GET",
            url: "/api/shoes/name/" + searchName
        }).then(function(res) {
            console.log(res);
            
            let newShoeCol = $("<div>");
            newShoeCol.addClass("col-sm-4 col-xl-4");

            let shoeCard = $("<div>");
            shoeCard.addClass("card shoe");
            
            let shoeImg = $("<img>");
            shoeImg.attr("src", res.product_image);
            shoeImg.addClass("card-img-top");
            shoeImg.attr("alt", "a cute shoe");
            
            let shoeCardBody = $("<div>");
            shoeCardBody.addClass("card-body");
            
            let shoeCardName = $("<p>");
            shoeCardName.addClass("card-text");
            shoeCardName.text(res.name);
            shoeCardName.css({
                color: "gray"
            });

            let shoeLink = $("<a>");
            shoeLink.attr("href", "/shoe/" + res.id);
            shoeLink.append(shoeCard);

            shoeCardBody.append(shoeCardName);
            shoeCard.append(shoeImg, shoeCardBody);
            shoeLink.append(shoeCard)
            newShoeCol.append(shoeLink)
            $("#new-cards-div").append(newShoeCol);

        })
        localStorage.removeItem('searched-shoe');
    }

    let selectedCategory = localStorage.getItem("style");

    if (selectedCategory) {

        if (selectedCategory === "all") {
            $.ajax({
                method: "GET",
                url: "/api/shoes"
            }).then(function(res) {
    
                for (elem of res) {
                    let newShoeCol = $("<div>");
                    newShoeCol.addClass("col-sm-4 col-xl-4");
    
                    let shoeCard = $("<div>");
                    shoeCard.addClass("card shoe");
                    
                    let shoeImg = $("<img>");
                    shoeImg.attr("src", elem.product_image);
                    shoeImg.addClass("card-img-top");
                    shoeImg.attr("alt", "a cute shoe");
                    
                    let shoeCardBody = $("<div>");
                    shoeCardBody.addClass("card-body");
                    
                    let shoeCardName = $("<p>");
                    shoeCardName.addClass("card-text");
                    shoeCardName.text(elem.name);
                    shoeCardName.css({
                        color: "gray"
                    });
    
                    let shoeLink = $("<a>");
                    shoeLink.attr("href", "/shoe/" + elem.id);
                    shoeLink.append(shoeCard);
    
                    shoeCardBody.append(shoeCardName);
                    shoeCard.append(shoeImg, shoeCardBody);
                    shoeLink.append(shoeCard)
                    newShoeCol.append(shoeLink)
                    $("#new-cards-div").append(newShoeCol);
                }
    
            })
        }
        else {
            $.ajax({
                method: "POST",
                url: "/api/shoes",
                data: {
                    styles: [selectedCategory]
                }
            }).then(function(res) {
    
                for (elem of res) {
                    let newShoeCol = $("<div>");
                    newShoeCol.addClass("col-sm-4 col-xl-4");
    
                    let shoeCard = $("<div>");
                    shoeCard.addClass("card shoe");
                    
                    let shoeImg = $("<img>");
                    shoeImg.attr("src", elem.product_image);
                    shoeImg.addClass("card-img-top");
                    shoeImg.attr("alt", "a cute shoe");
                    
                    let shoeCardBody = $("<div>");
                    shoeCardBody.addClass("card-body");
                    
                    let shoeCardName = $("<p>");
                    shoeCardName.addClass("card-text");
                    shoeCardName.text(elem.name);
                    shoeCardName.css({
                        color: "gray"
                    });
    
                    let shoeLink = $("<a>");
                    shoeLink.attr("href", "/shoe/" + elem.id);
                    shoeLink.append(shoeCard);
    
                    shoeCardBody.append(shoeCardName);
                    shoeCard.append(shoeImg, shoeCardBody);
                    shoeLink.append(shoeCard)
                    newShoeCol.append(shoeLink)
                    $("#new-cards-div").append(newShoeCol);
                }
    
            })
        }
        localStorage.removeItem('style');
    }

    // retrieving shoe data if user clicked on carousel category from the home page
    let selectedCarousel = localStorage.getItem("carousel");

    if (selectedCarousel) {

        // if air jordan is selected
        if (selectedCarousel === "air-jordan") {
            $.ajax({
                method: "POST",
                url: "/api/shoes",
                data: {
                    brands: ["Air Jordan"]
                }
            }).then(function(res) {
    
                for (elem of res) {
                    let newShoeCol = $("<div>");
                    newShoeCol.addClass("col-sm-4 col-xl-4");
    
                    let shoeCard = $("<div>");
                    shoeCard.addClass("card shoe");
                    
                    let shoeImg = $("<img>");
                    shoeImg.attr("src", elem.product_image);
                    shoeImg.addClass("card-img-top");
                    shoeImg.attr("alt", "a cute shoe");
                    
                    let shoeCardBody = $("<div>");
                    shoeCardBody.addClass("card-body");
                    
                    let shoeCardName = $("<p>");
                    shoeCardName.addClass("card-text");
                    shoeCardName.text(elem.name);
                    shoeCardName.css({
                        color: "gray"
                    });
    
                    let shoeLink = $("<a>");
                    shoeLink.attr("href", "/shoe/" + elem.id);
                    shoeLink.append(shoeCard);
    
                    shoeCardBody.append(shoeCardName);
                    shoeCard.append(shoeImg, shoeCardBody);
                    shoeLink.append(shoeCard)
                    newShoeCol.append(shoeLink)
                    $("#new-cards-div").append(newShoeCol);
                }
    
            })
        }

        // if new releases is selected
        if (selectedCarousel === "new-releases") {
            let latestYear = 2020
            $.ajax({
                method: "POST",
                url: "/api/shoes",
                data: {
                    years: [latestYear]
                }
            }).then(function(res) {
    
                for (elem of res) {
                    let newShoeCol = $("<div>");
                    newShoeCol.addClass("col-sm-4 col-xl-4");
    
                    let shoeCard = $("<div>");
                    shoeCard.addClass("card shoe");
                    
                    let shoeImg = $("<img>");
                    shoeImg.attr("src", elem.product_image);
                    shoeImg.addClass("card-img-top");
                    shoeImg.attr("alt", "a cute shoe");
                    
                    let shoeCardBody = $("<div>");
                    shoeCardBody.addClass("card-body");
                    
                    let shoeCardName = $("<p>");
                    shoeCardName.addClass("card-text");
                    shoeCardName.text(elem.name);
                    shoeCardName.css({
                        color: "gray"
                    });
    
                    let shoeLink = $("<a>");
                    shoeLink.attr("href", "/shoe/" + elem.id);
                    shoeLink.append(shoeCard);
    
                    shoeCardBody.append(shoeCardName);
                    shoeCard.append(shoeImg, shoeCardBody);
                    shoeLink.append(shoeCard)
                    newShoeCol.append(shoeLink)
                    $("#new-cards-div").append(newShoeCol);
                }
    
            })
        }

        // if under200 category is selected
        if (selectedCarousel === "under-200") {
            let maxPrice = 200
            $.ajax({
                method: "POST",
                url: "/api/shoes",
                data: {
                    max_price: [maxPrice]
                }
            }).then(function(res) {
    
                for (elem of res) {
                    let newShoeCol = $("<div>");
                    newShoeCol.addClass("col-sm-4 col-xl-4");
    
                    let shoeCard = $("<div>");
                    shoeCard.addClass("card shoe");
                    
                    let shoeImg = $("<img>");
                    shoeImg.attr("src", elem.product_image);
                    shoeImg.addClass("card-img-top");
                    shoeImg.attr("alt", "a cute shoe");
                    
                    let shoeCardBody = $("<div>");
                    shoeCardBody.addClass("card-body");
                    
                    let shoeCardName = $("<p>");
                    shoeCardName.addClass("card-text");
                    shoeCardName.text(elem.name);
                    shoeCardName.css({
                        color: "gray"
                    });
    
                    let shoeLink = $("<a>");
                    shoeLink.attr("href", "/shoe/" + elem.id);
                    shoeLink.append(shoeCard);
    
                    shoeCardBody.append(shoeCardName);
                    shoeCard.append(shoeImg, shoeCardBody);
                    shoeLink.append(shoeCard)
                    newShoeCol.append(shoeLink)
                    $("#new-cards-div").append(newShoeCol);
                }
    
            })
        }

        localStorage.removeItem('carousel');
    }

    $("#filter-form").on("submit", function(event) {
        $("#new-cards-div").empty();
        const searchVal = $("#search-bar").val().trim();

        event.preventDefault();
        if (searchVal) {
            let searchName = searchVal;

            $.ajax({
                method: "GET",
                url: "/api/shoes/name/" + searchName
            }).then(function(res) {
                console.log(res);
                
                let newShoeCol = $("<div>");
                newShoeCol.addClass("col-sm-4 col-xl-4");

                let shoeCard = $("<div>");
                shoeCard.addClass("card shoe");
                
                let shoeImg = $("<img>");
                shoeImg.attr("src", res.product_image);
                shoeImg.addClass("card-img-top");
                shoeImg.attr("alt", "a cute shoe");
                
                let shoeCardBody = $("<div>");
                shoeCardBody.addClass("card-body");
                
                let shoeCardName = $("<p>");
                shoeCardName.addClass("card-text");
                shoeCardName.text(res.name);
                shoeCardName.css({
                    color: "gray"
                });

                let shoeLink = $("<a>");
                shoeLink.attr("href", "/shoe/" + res.id);
                shoeLink.append(shoeCard);

                shoeCardBody.append(shoeCardName);
                shoeCard.append(shoeImg, shoeCardBody);
                shoeLink.append(shoeCard)
                newShoeCol.append(shoeLink)
                $("#new-cards-div").append(newShoeCol);

            })    
        }

        else {

            // gender selections
            let selectedGenders = $('input[name=gender]:checked').map(function(_, el) {
                return $(el).val();
            }).get();
            console.log(selectedGenders);

            // size selections
            let usSizes = $('input[name=us-size]:checked').map(function(_, el) {
                return parseInt($(el).val());
            }).get();
            console.log(usSizes);
            
            let euSizes = $('input[name=eu-size]:checked').map(function(_, el) {
                return parseInt($(el).val());
            }).get();
            console.log(euSizes);

            let ukSizes = $('input[name=uk-size]:checked').map(function(_, el) {
                return parseInt($(el).val());
            }).get();
            console.log(ukSizes);

            // brand selections
            let selectedBrands = $('input[name=brands]:checked').map(function(_, el) {
                return $(el).val();
            }).get();
            console.log(selectedBrands);

            // style selections
            let selectedStyles = $('input[name=styles]:checked').map(function(_, el) {
                return $(el).val();
            }).get();
            console.log(selectedStyles);

            // color selections
            let selectedColors = $('input[name=color]:checked').map(function(_, el) {
                return $(el).val();
            }).get();
            console.log(selectedColors);

            // release year selections
            let selectedYears = $('input[name=release-year]:checked').map(function(_, el) {
                return $(el).val();
            }).get();
            console.log(selectedYears);

            // max-price selections
            let maxPrice = $('input[name=max-price]:checked').map(function(_, el) {
                return parseInt($(el).val());
            }).get();
            console.log(maxPrice);

            // collaborator selections
            let selectedCollaborators = $('input[name=collaborators]:checked').map(function(_, el) {
                return $(el).val();
            }).get();
            console.log(selectedCollaborators);


            let shoeFilters = {
                gender: selectedGenders,
                us_size: usSizes,
                eu_size: euSizes,
                uk_size: ukSizes,
                brands: selectedBrands,
                styles: selectedStyles,
                colors: selectedColors,
                years: selectedYears,
                max_price: maxPrice,
                collabs: selectedCollaborators
            }
            $.ajax({
                method: "POST",
                url: "/api/shoes",
                data: shoeFilters
            }).then(function(res) {
                console.log(res);

                for (elem of res) {
                    let newShoeCol = $("<div>");
                    newShoeCol.addClass("col-sm-4 col-xl-4");

                    let shoeCard = $("<div>");
                    shoeCard.addClass("card shoe");
                    
                    let shoeImg = $("<img>");
                    shoeImg.attr("src", elem.product_image);
                    shoeImg.addClass("card-img-top");
                    shoeImg.attr("alt", "a cute shoe");
                    
                    let shoeCardBody = $("<div>");
                    shoeCardBody.addClass("card-body");
                    
                    let shoeCardName = $("<p>");
                    shoeCardName.addClass("card-text");
                    shoeCardName.text(elem.name);
                    shoeCardName.css({
                        color: "gray"
                    });

                    let shoeLink = $("<a>");
                    shoeLink.attr("href", "/shoe/" + elem.id);
                    shoeLink.append(shoeCard);

                    shoeCardBody.append(shoeCardName);
                    shoeCard.append(shoeImg, shoeCardBody);
                    shoeLink.append(shoeCard)
                    newShoeCol.append(shoeLink)
                    $("#new-cards-div").append(newShoeCol);
                }


            })
        }

    })
});

// function getShoeInfo(id) {
//     $.ajax({
//         method: 'GET',
//         url: "/api/shoes/:id"
//     }).then(function(res) {
//         console.log(res);
        
//         // let lastShoeInfo = {
//         //     name: res.name,
//         //     brand: res.brand,
//         //     releaseDate: res.release_date,
//         //     collaborators: res.collaborators,
//         //     color: res.color,
//         //     sizeType: res.sizing_type,
//         //     minSize: res.min_size,
//         //     maxSize: res.max_size,
//         //     priceMin: res.price_min,
//         //     priceMax: res.price_max,
//         //     description: res.description,
//         //     style: res.style,
//         //     productLink: res.product_link
//         // }
//         localStorage.setItem("lastShoe", res.id);


//     })
// }