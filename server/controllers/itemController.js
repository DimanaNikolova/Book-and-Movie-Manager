const express = require('express')
const router = express.Router({ mergeParams: true })

const Item = require('../model/Item')
const User = require('../model/User')
const mongoose = require('mongoose')

const getItem = async (req, res, next) => {
    const { itemId } = req.params
    try {
        const item = await Item.findOne({ _id: itemId })
        res.status(200).json(item)
    } catch (err) {
        console.log(err)
    }
}

const getAllItems = async (req, res, next) => {
    try {
        const allItems = await Item.find()
        res.status(200).json(allItems)
    } catch (err) {
        console.log(err)
    }
}

const addItemToList = async (req, response, next) => {
    const { uid, itemId, status, episodes, title, type } = req.body
    const progress = status == 'completed' ? episodes : 0

    User.findOne({ _id: uid.uid })
        .then((res) => {
            return res.items.map((m) => m.item.toString())
        })
        .then((res) => {
            if (!res.includes(itemId.itemId)) {
                const updateItem = Item.updateOne(
                    { _id: itemId.itemId },
                    { $push: { users: { user: uid.uid, status } } }
                )

                const updateUser = User.updateOne(
                    { _id: uid.uid },
                    {
                        $push: {
                            items: {
                                item: itemId.itemId,
                                status,
                                progress,
                                title,
                                type
                            },
                        },
                    }
                )

                Promise.all([updateItem, updateUser]).then((values) => {
                    response.status(200).json(values)
                })
            } else {
                const updateUser = User.updateOne(
                    { _id: uid.uid, 'items.item': itemId.itemId },
                    {
                        $set: {
                            'items.$.status': status,
                            'items.$.progress': progress,
                        },
                    }
                )

                const updateItem = Item.updateOne(
                    { _id: itemId.itemId, 'users.user': uid.uid },
                    {
                        $set: {
                            'users.$.status': status,
                            'users.$.progress': progress,
                        },
                    }
                )
                Promise.all([updateItem, updateUser]).then((values) => {
                    response.status(200).json(values)
                })
            }
        })
        .catch((e) => {
            console.log(e)
        })
}

const updateItemProgress = async (req, res, next) => {
    const { uid, itemId, status, episodes } = req.body

    try {
        const updateUser = await User.updateOne(
            { _id: uid, 'items.item': itemId },
            {
                $set: {
                    'items.$.progress': episodes,
                },
            }
        )
        res.status(200).json(updateUser)
    } catch (err) {
        console.log(err)
    }
}

const updateRating = async (req, res, next) => {
    const { uid, itemId, rating } = req.body

    try {
        const updateUser = await User.updateOne(
            { _id: uid, 'items.item': itemId },
            {
                $set: {
                    'items.$.rating': rating,
                },
            }
        )
        res.status(200).json(updateUser)
    } catch (err) {
        console.log(err)
    }
}

router.get('/all-items', getAllItems)
router.get('/:itemId', getItem)
router.put('/add-item', addItemToList)
router.put('/update-episodes', updateItemProgress)
router.put('/update-rating', updateRating)

module.exports = router
