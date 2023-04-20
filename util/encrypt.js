const bcrypt = require('bcrypt');
const salt = 10;

// const encryptPassword = ()=>{

//     const password = "jaymin"
//     // const salt = bcrypt.genSalt(10)
//             bcrypt.hash(password,salt,(err,res)=>{
//         console.log(res);
//     })
    
// }

const encryptPassword = async (password)=>{

    const hash = await bcrypt.hashSync(password,salt)

    return hash
}


const comparePassword = async(password,hash)=>{
    const result = await bcrypt.compareSync(password,hash);
    return result;
}

module.exports ={ 
    encryptPassword,comparePassword
}