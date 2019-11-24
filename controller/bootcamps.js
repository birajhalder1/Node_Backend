//@disc   Get all bootcamps
//@route  GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: "Show all bootcapms"});
}

//@disc   Crete bootcapms
//@route  POST /api/v1/bootcamps
//@access Public
exports.postBootcamps = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: "Create bootcapms"})
}

//@disc   Get bootcamps by id
//@route  GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcampById = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Get bootcamps by  ${req.params.id}`})
}

//@disc   Update bootcamps by id
//@route  PUT /api/v1/bootcamps/:id
//@access Public
exports.putBootcampById = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Update bootcamps ${req.params.id}`})
}

//@disc   Delete bootcamps by id
//@route  DELETE /api/v1/bootcamps
//@access Public
exports.deleteBootcampById = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Delete bootcamps ${req.params.id}`})
}