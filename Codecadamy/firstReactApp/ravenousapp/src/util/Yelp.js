const apiKey = "BPwUE121d-04QXdbt7LObIucO-nRKGFB4RHOMp3IZVeztWea_YQLRmhlZ3S1bo2H66p1MjOBn5MfeAn9dkKaY5FpjYunctwwB8rAp023eVUyB9jRuLltOnwyN2NPXHYx"

let Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/
        https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }).then(response => {
                return response.json()
            }).then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipCode,
                            category: business.categories,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    })
                }
            })
    }
}

