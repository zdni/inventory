import User from '../models/User';

const emailExist = async (email) => {
  try {
    const user = await User.findOne({ email });
    if(!user) return false;
    return true;
  } catch (error) {
    return false;
  }
}

export default emailExist;