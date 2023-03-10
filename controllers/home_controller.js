const  Post=require('../models/post');
const User=require('../models/user');


module.exports.Home=async function(req,res){
        try {
                let posts=await Post.find({})
                .populate('user')
                .populate({
                    path:'comments',    
                    populate:{
                        path:'user'
                    }
                })

            let users=await User.find({});
            
                return res.render('home',{
                    title:"Home",
                    posts: posts,
                    all_users: users
                })
            
        } catch (error) {
            console.log("Error: " , error);
            return;
        }
}
