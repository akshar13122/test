const db = require('../Utils/db');
const userModel = require('../Model/userModel');

const postUsers = async (req, res) => {
    try {

    const {name , email , password} = req.body;

    if(!name || !email || !password){
        return res.status(404).json({
            success : "false",
            message : "All feilds are require"
        })
    }

    const existing = await userModel.findOne({
        where : { email} ,
    })

    if(existing){
        return res.status(400).json({
              success : false,
            message : "User Already Exists",
        })
    }

    await userModel.create({
        name , email , password
    })

    return res.status(201).json({
        success : true,
        message : "User Created Successfully"
    })

    } catch (error) {
        return res.status(500).json({
            success : "false",
            message : "Server Error"
        })
    }
}



const getUsers = async (req, res) => {
  try {
    const users = await userModel.findAll({
      attributes: {exclude : ["password"]}, // optional, cleaner
    });

    return res.status(200).json({
      success: true,
      message: "Users Fetched Successfully",
      users: users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


const editUsers = async(req, res)=> {
    try {
        const {id} = req.params;
        const {name , email , password} = req.body;

        if(!name || !email || !password){
            return res.status(404).json({
                success : "false",
                message : "All Feilds are require",
            })
        }

        const user = await userModel.findByPk(id);

        if(!user){
            return res.status(404).json({
                success : false,
                message : "User not Found with this id"
            })
        }

        await user.update({
            name , email , password
        })
            return res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      updatedUser: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
    } catch (error) {
        return res.status(500).json({
            success : "falase",
            message : "Server Error",
        })
    }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "User id is required",
      });
    }

    // Check if user exists
    const user = await userModel.findByPk(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found with this id",
      });
    }

    // Delete user
    await user.destroy();

    return res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


module.exports = {postUsers , getUsers , editUsers ,deleteUser}