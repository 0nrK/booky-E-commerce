const pagination = async (model) => {
    const results = {
        results: {},
        pagination: {},
        filters: {}
    }

    const category = parseInt(req.query.category)
    const from = parseInt(req.query.from)
    const to = parseInt(req.query.to)

    results.filters.push(category)
    results.filters.push(from)
    results.filters.push(to)

    const match = {}

    if (category !== 0 && category !== 1) {
        match.category = category
    }

    /*  //Sort
     const sortVal = parseInt(req.query.sort)
     results.sort = sortVal
 
     let sort = {}
 
     if (sortVal === 1) sort = { price: 1 }
     if (sortVal === 2) sort = { price: -1 }
     if (sortVal === 3) sort = { createdAt: 1 }
     if (sortVal === 4) sort = { createdAt: -1 }
  */



}