const express = require('express');
const userModel = require('../../../models/user');

const getUserDetails = async (req, res, next) => {
    try {
        let { userId } = req.params;

        let user = await userModel.findById(userId).select('name , email');

        if (!user) {
            return res.status(404).json({
                "errors": [{
                    "msg": " no user found"
                }]
            })
        }

        return res.status(200).json({
            "success": [{
                "msg": `user ${userId} fetched successfully`,
                "data": user
            }]
        })
    } catch (error) {

        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}
// const getUsers = async (req, res, next) => {
//     try {

//         let users = await User.find({});

//         if (users.length > 0) {
//             return res.status(200).json({
//                 'message': 'users fetched successfully',
//                 'data': users
//             });
//         }

//         return res.status(404).json({
//             'code': 'BAD_REQUEST_ERROR',
//             'description': 'No users found in the system'
//         });
//     } catch (error) {
//         return res.status(500).json({
//             'code': 'SERVER_ERROR',
//             'description': 'something went wrong, Please try again'
//         });
//     }
// }


// const createUser = async (req, res, next) => {
//     try {

//         const {
//             name,
//             email
//         } = req.body;

//         if (name === undefined || name === '') {
//             return res.status(422).json({
//                 'code': 'REQUIRED_FIELD_MISSING',
//                 'description': 'name is required',
//                 'field': 'name'
//             });
//         }

//         if (email === undefined || email === '') {
//             return res.status(422).json({
//                 'code': 'REQUIRED_FIELD_MISSING',
//                 'description': 'email is required',
//                 'field': 'email'
//             });
//         }


//         let isEmailExists = await User.findOne({
//             "email": email
//         });

//         if (isEmailExists) {
//             return res.status(409).json({
//                 'code': 'ENTITY_ALREAY_EXISTS',
//                 'description': 'email already exists',
//                 'field': 'email'
//             });
//         }

//         const temp = {
//             name: name,
//             email: email
//         }

//         let newUser = await User.create(temp);

//         if (newUser) {
//             return res.status(201).json({
//                 'message': 'user created successfully',
//                 'data': newUser
//             });
//         } else {
//             throw new Error('something went worng');
//         }
//     } catch (error) {
//         return res.status(500).json({
//             'code': 'SERVER_ERROR',
//             'description': 'something went wrong, Please try again'
//         });
//     }
// }

// const updateUser = async (req, res, next) => {
//     try {


//         const userId = req.params.id;

//         const {
//             name,
//             email
//         } = req.body;

//         if (name === undefined || name === '') {
//             return res.status(422).json({
//                 'code': 'REQUIRED_FIELD_MISSING',
//                 'description': 'name is required',
//                 'field': 'name'
//             });
//         }

//         if (email === undefined || email === '') {
//             return res.status(422).json({
//                 'code': 'REQUIRED_FIELD_MISSING',
//                 'description': 'email is required',
//                 'field': 'email'
//             });
//         }


//         let isUserExists = await User.findById(userId);

//         if (!isUserExists) {
//             return res.status(404).json({
//                 'code': 'BAD_REQUEST_ERROR',
//                 'description': 'No user found in the system'
//             });
//         }

//         const temp = {
//             name: name,
//             email: email
//         }

//         let updateUser = await User.findByIdAndUpdate(userId, temp, {
//             new: true
//         });

//         if (updateUser) {
//             return res.status(200).json({
//                 'message': 'user updated successfully',
//                 'data': updateUser
//             });
//         } else {
//             throw new Error('something went worng');
//         }
//     } catch (error) {

//         return res.status(500).json({
//             'code': 'SERVER_ERROR',
//             'description': 'something went wrong, Please try again'
//         });
//     }
// }

// const deleteUser = async (req, res, next) => {
//     try {
//         let user = await User.findByIdAndRemove(req.params.id);
//         if (user) {
//             return res.status(204).json({
//                 'message': `user with id ${req.params.id} deleted successfully`
//             });
//         }

//         return res.status(404).json({
//             'code': 'BAD_REQUEST_ERROR',
//             'description': 'No users found in the system'
//         });

//     } catch (error) {

//         return res.status(500).json({
//             'code': 'SERVER_ERROR',
//             'description': 'something went wrong, Please try again'
//         });
//     }
// }
module.exports = {
    getUserDetails: getUserDetails,
    // getUsers: getUsers,
    // createUser: createUser,
    // updateUser: updateUser,
    // deleteUser: deleteUser
}